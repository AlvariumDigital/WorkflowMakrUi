// Styles
import './styles.scss'
import 'toastify-js/src/toastify.css'

// Templating
import {
    container,
    loader,
    addIcon,
    deleteIcon,
    editIcon,
    deletingLoader,
    savingLoader
} from './templates'

// Librairies
import Toastify from 'toastify-js'

// toast colors
const toastColors = {
    primary: '#002A50',
    secondary: '#6c757d',
    success: '#198754',
    danger: '#dc3545',
    warning: '#ffc107',
    light: '#f8f9fa',
    info: '#22659c',
    dark: '#212529'
}

// The scenario objects
let s = {}
let levels = {}
let c = {}

// Autocomplete helper
let acl = false

// String dictionnary
let dictionnary = {
    transitions: {
        add: "Add transition",
        edit: "Edit transition",
        delete: "Delete transition",
        deleteConfirmation: {
            title: "Are you sure?",
            deleteBtn: "Yes!",
            cancelBtn: "No"
        },
        saveForm: {
            action: "Action",
            newStatus: "New status",
            saveBtn: "Save",
            cancelBtn: "Cancel"
        }
    },
    messages: {
        server: {
            notResponding: "Error! The server is not responding.",
            internalError: "Error! The server encountered an internal error."
        },
        scenario: {
            updated: "The scenario is updated successfully"
        },
        transitions: {
            notFound: "Error! Scenario not found.",
            delete: {
                alreadyUsed: "The transition or/and one or more of its children are already used"
            }
        }
    }
}

// Main container selector
let mainSelector = undefined

/**
 * Initialize the workflow makr ui
 * @param {*} config The workflow makr ui configuration
 */
export function init(config) {
    c = config
    parseConfig(config)
    mainSelector = config.selector

    // Initialize workflow makr ui container
    document.querySelector(mainSelector).innerHTML = container
    document.querySelector('#workflow-makr-chart-container').innerHTML = loader
    dd('Initializing the workflow makr ui...')

    // Load scenario data
    loadScenario(config)

    // Attach event listeners
    attachEventListeners()
}

/**
 * Load the scenario data and show it
 */
function loadScenario() {
    var xhr = new XMLHttpRequest()
    dd('Loading scenario...')
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return
        if (this.status == 200) {
            s = JSON.parse(this.responseText)

            // Show org chart
            const loader = document.querySelector('#workflow-makr-chart-container #loading-workflow-makr')
            if (loader)
                loader.style.opacity = 0
            setTimeout(() => {
                dd('Printing scenario...')
                showScenario(parseTransitions(s.transitions))
                reCalculateContainerWidth()
            }, 500)
        } else if (this.status == 404) {
            toast(toastColors.danger, dictionnary.messages.transitions.notFound)
        } else if (this.status == 500) {
            toast(toastColors.danger, dictionnary.messages.server.internalError)
        } else {
            toast(toastColors.danger, dictionnary.messages.server.notResponding)
        }
    }
    xhr.open('GET', c.path + '/workflowmakr/scenarios/' + c.scenario_id, true)
    xhr.setRequestHeader('accept', 'application/json')
    if (c.request_headers) {
        Object.keys(c.request_headers).forEach(function (key) {
            xhr.setRequestHeader(key, c.request_headers[key])
        })
    }
    xhr.send()
}

/**
 * Attach different events listeners
 */
function attachEventListeners() {
    document.addEventListener('click', function (e) {
        const target = e.target
        // Adding a transition
        if (target.classList.contains('add-btn')) {
            createEventListener(target)
        }
        if (target.getAttribute('data-create-transition')) {
            confirmCreateTransition(target)
        }
        if (target.getAttribute('data-cancel-create-transition')) {
            cancelCreateTransition()
        }
        // Updating a transition
        if (target.classList.contains('edit-btn')) {
            editEventListener(target)
        }
        if (target.getAttribute('data-cancel-update-transition')) {
            cancelEditTransition(target)
        }
        if (target.getAttribute('data-update-transition')) {
            confirmEditTransition(target)
        }
        // Deleting a transition
        if (target.classList.contains('delete-btn')) {
            deleteEventListener(target)
        }
        if (target.getAttribute('data-cancel-delete-transition')) {
            cancelDeleteTransition(target)
        }
        if (target.getAttribute('data-delete-transition')) {
            confirmDeleteTransition(target)
        }
    })
    // Autocomplete listeners
    document.addEventListener('keyup', function (e) {
        const target = e.target
        if (target.classList.contains('autocomplete')) {
            autocompleteListener(target)
        }
    })
}

/**
 * Parse the transitions array into org chart format
 * @param array transitions The scenario transitions
 * @param number index The index number
 * 
 * @return The array of the scenario transitions
 */
function parseTransitions(transitions, index = 0) {
    index++
    const t = []
    transitions.forEach(transition => {
        t.push({
            id: transition.id,
            old_status: transition.old_status,
            new_status: transition.new_status,
            action: transition.action,
            predecessor: transition.predecessor_id,
            transitions: parseTransitions(transition.children, index)
        })
        if (!levels['level-' + index]) {
            levels['level-' + index] = []
        }
        levels['level-' + index].push(transition.id)
    })
    return t
}

/**
 * Show scenario transitions into org chart format
 * @param array transitions The array of parsed transitions
 */
function showScenario(transitions) {
    let html = ''
    html += '<div id="workflow-makr-org-container">'
    html += '<div class="workflow-makr-org">'
    html += '<ul>'
    html += '<li data-transition="' + null + '">'
    html += '<div class="node start" data-transition="' + null + '">'
    html += '<img src="' + addIcon + '" data-transition-id="' + null + '" class="add-btn" title="' + dictionnary.transitions.add + '"/>'
    html += '</div>'
    html += '<ul data-parent="' + null + '">'
    transitions.forEach(transition => html += showNode(transition))
    html += '</ul>'
    html += '</li>'
    html += '</ul>'
    html += '</div>'
    html += '</div>'
    document.querySelector('#workflow-makr-chart-container').innerHTML = html
}

/**
 * Re calculate container width
 */
function reCalculateContainerWidth() {
    let max = 0
    if (levels) {
        Object.keys(levels).forEach(function (key) {
            if (levels[key].length > max) {
                max = levels[key].length
            }
        })
    }
    document.querySelector('#workflow-makr-chart-container').style.minWidth = (max == 0 ? '100%': max * (200 * 1.8) + 'px')
}

/**
 * Event listener for the event "click" on transition delete button
 * @param element The element clicked
 */
function deleteEventListener(element) {
    const transitionId = +element.getAttribute("data-transition-id")
    cancelCreateTransition()
    document.querySelector('.node[data-transition="' + transitionId + '"]').classList.add('to-delete')
}

/**
 * Event listener for the event "click" on cancel delete a transition
 * @param element The element clicked
 */
function cancelDeleteTransition(element) {
    document.querySelector('.node[data-transition="' + element.getAttribute('data-cancel-delete-transition') + '"]').classList.remove('to-delete')
}

/**
 * Event listener for the event "click" on add a transition
 * @param element The element clicked
 */
function createEventListener(element) {
    cancelCreateTransition()
    const transitionId = element.getAttribute('data-transition-id')
    const transition = transitionId ? findTransition(s.transitions, element.getAttribute('data-transition-id')) : null
    const node = document.querySelector('li[data-transition="' + transitionId + '"]')
    let nodeChildren = document.querySelector('ul[data-parent="' + transitionId + '"]')
    if (!nodeChildren) {
        node.insertAdjacentHTML('beforeend', '<ul data-parent="' + transitionId + '"></ul>')
        nodeChildren = document.querySelector('ul[data-parent="' + transitionId + '"]')
    }
    let newNode = ''
    newNode += '<li class="to-create">'
    newNode += '<div class="node saving">'
    newNode +=
        '<form class="save-form">\
            <label for="transition-action-to-create">' + dictionnary.transitions.saveForm.action + '</label>\
            <div class="autocomplete-container">\
                <div class="loader"><span></span></div>\
                <input class="autocomplete" data-target-model="actions" data-target="#transition-action-autocomplete-to-create" id="transition-action-to-create" value="" />\
                <div class="autocomplete-result" id="transition-action-autocomplete-to-create"></div>\
            </div>\
            <label for="transition-new-status-to-create">' + dictionnary.transitions.saveForm.newStatus + '</label>\
            <div class="autocomplete-container">\
                <div class="loader"><span></span></div>\
                <input class="autocomplete" data-target-model="statuses" data-target="#transition-new-status-autocomplete-to-create" id="transition-new-status-to-create" value="" />\
                <div class="autocomplete-result" id="transition-new-status-autocomplete-to-create"></div>\
            </div>\
            <div>\
                <a data-create-transition="' + (transition ? transition.id : null) + '">' + dictionnary.transitions.saveForm.saveBtn + '</a>\
                <a data-cancel-create-transition="true">' + dictionnary.transitions.saveForm.cancelBtn + '</a>\
            </div>\
        </form>'
    newNode += '</div>'
    newNode += '</li>'
    nodeChildren.insertAdjacentHTML('afterbegin', newNode)
    reCalculateContainerWidth()
}

/**
 * Event listener for the event "click" on confirm create a transition
 * @param element The element clicked
 */
function confirmCreateTransition(element) {
    document.querySelector('#workflow-makr-chart-container').insertAdjacentHTML('beforeend', savingLoader)
    var xhr = new XMLHttpRequest()
    dd('Creating transition...')
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return
        if (this.status == 200) {
            loadScenario()
            toast(toastColors.success, dictionnary.messages.scenario.updated)
        }
        if (this.status == 404) {
            console.error('Failed creating transition...')
            console.error("Error", this.status, this.statusText)
        }
        if (this.status == 422) {
            console.error('Failed creating transition...')
            console.error("Error", this.status, this.statusText)
            const body = JSON.parse(this.responseText).messages
            let messages = "<p>"
            if (body.new_status) {
                body.new_status.forEach(item => messages += item + "<br />")
            }
            if (body.action) {
                body.action.forEach(item => messages += item + "<br />")
            }
            if (body.old_status) {
                body.old_status.forEach(item => messages += item + "<br />")
            }
            if (body.predecessor_id) {
                body.predecessor_id.forEach(item => messages += item + "<br />")
            }
            if (body.scenario_id) {
                body.scenario_id.forEach(item => messages += item + "<br />")
            }
            messages += "</p>"
            toast(toastColors.warning, messages)
            document.querySelector('#saving-transition-loader').remove()
        }
    }
    xhr.open('POST', c.path + '/workflowmakr/transitions', true)
    xhr.setRequestHeader('accept', 'application/json')
    if (c.request_headers) {
        Object.keys(c.request_headers).forEach(function (key) {
            xhr.setRequestHeader(key, c.request_headers[key])
        })
    }
    const actionSelector = 'li.to-create .node.saving .save-form input#transition-action-to-create'
    const newStatusSelector = 'li.to-create .node.saving .save-form input#transition-new-status-to-create'
    const transitionId = element.getAttribute('data-create-transition')
    const transition = transitionId ? findTransition(s.transitions, transitionId) : null
    xhr.send(JSON.stringify({
        action: document.querySelector(actionSelector).value,
        old_status: transition ? transition.new_status.designation : null,
        new_status: document.querySelector(newStatusSelector).value,
        predecessor_id: transition ? transition.id : null,
        scenario_id: s.id
    }))
}

/**
 * Event listener for the event "click" on cancel create a transition
 */
function cancelCreateTransition() {
    let elements = document.querySelector('#workflow-makr-org-container li.to-create')
    if (elements) {
        elements.remove()
    }
    elements = document.querySelector('#workflow-makr-org-container ul:empty')
    if (elements) {
        elements.remove()
    }
    elements = document.querySelector('.node.to-delete')
    if (elements)
        elements.classList.remove('to-delete')
    elements = document.querySelector('.node.saving')
    if (elements)
        elements.classList.remove('saving')
    reCalculateContainerWidth()
}

/**
 * Event listener for the event "click" on transition edit button
 * @param element The element clicked
 */
function editEventListener(element) {
    const transitionId = +element.getAttribute("data-transition-id")
    cancelCreateTransition()
    document.querySelector('.node[data-transition="' + transitionId + '"]').classList.add('saving')
}

/**
 * Event listener for the event "click" on cancel update a transition
 * @param element The element clicked
 */
function cancelEditTransition(element) {
    document.querySelector('.node[data-transition="' + element.getAttribute('data-cancel-update-transition') + '"]').classList.remove('saving')
    document.querySelector('.node[data-transition="' + element.getAttribute('data-cancel-update-transition') + '"] form.save-form').reset()
    document.querySelector('.node[data-transition="' + element.getAttribute('data-cancel-update-transition') + '"] .autocomplete-container').classList.remove('loading')
}

/**
 * Event listener for the event "click" on confirm update a transition
 * @param element The element clicked
 */
function confirmEditTransition(element) {
    document.querySelector('#workflow-makr-chart-container').insertAdjacentHTML('beforeend', savingLoader)
    var xhr = new XMLHttpRequest()
    dd('Updating transition...')
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return
        if (this.status == 200) {
            loadScenario()
            toast(toastColors.success, dictionnary.messages.scenario.updated)
        }
        if (this.status == 404) {
            console.error('Failed updating transition...')
            console.error("Error", this.status, this.statusText)
        }
        if (this.status == 422) {
            console.error('Failed updating transition...')
            console.error("Error", this.status, this.statusText)
            const body = JSON.parse(this.responseText).messages
            let messages = "<p>"
            if (body.new_status) {
                body.new_status.forEach(item => messages += item + "<br />")
            }
            if (body.action) {
                body.action.forEach(item => messages += item + "<br />")
            }
            if (body.old_status) {
                body.old_status.forEach(item => messages += item + "<br />")
            }
            if (body.predecessor_id) {
                body.predecessor_id.forEach(item => messages += item + "<br />")
            }
            messages += "</p>"
            toast(toastColors.warning, messages)
            document.querySelector('#saving-transition-loader').remove()
        }
    }
    xhr.open('PUT', c.path + '/workflowmakr/transitions/' + element.getAttribute('data-update-transition'), true)
    xhr.setRequestHeader('accept', 'application/json')
    if (c.request_headers) {
        Object.keys(c.request_headers).forEach(function (key) {
            xhr.setRequestHeader(key, c.request_headers[key])
        })
    }
    const actionSelector = '.node[data-transition="' + element.getAttribute('data-update-transition') + '"] .save-form input#transition-action-' + element.getAttribute('data-update-transition')
    const newStatusSelector = '.node[data-transition="' + element.getAttribute('data-update-transition') + '"] .save-form input#transition-new-status-' + element.getAttribute('data-update-transition')
    const transition = findTransition(s.transitions, +element.getAttribute('data-update-transition'))
    xhr.send(JSON.stringify({
        action: document.querySelector(actionSelector).value,
        old_status: (transition.old_status) ? transition.old_status.designation : null,
        new_status: document.querySelector(newStatusSelector).value,
        predecessor_id: transition.predecessor_id
    }))
}

/**
 * Find a transition from the scenario object based on it's id
 * @param array transitions The transitions array
 * @param number id The transition id
 * 
 * @return The transition object
 */
function findTransition(transitions, id) {
    let result = null
    transitions.forEach(transition => {
        if (transition.id == id) {
            result = transition
        } else if (transition.children && transition.children.length && !result) {
            result = findTransition(transition.children, id)
        }
    })
    return result
}

/**
 * Event listener for the event "click" on confirm delete a transition
 * @param element The element clicked
 */
function confirmDeleteTransition(element) {
    document.querySelector('#workflow-makr-chart-container').insertAdjacentHTML('beforeend', deletingLoader)
    var xhr = new XMLHttpRequest()
    dd('Deleting transition...')
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return
        if (this.status == 200) {
            loadScenario()
            toast(toastColors.success, dictionnary.messages.scenario.updated)
        }
        if (this.status == 404) {
            console.error('Failed deleting transition...')
            console.error("Error", this.status, this.statusText)
        }
        if (this.status == 422) {
            console.error('Failed deleting transition...')
            console.error("Error", this.status, this.statusText)
            toast(toastColors.warning, dictionnary.messages.transitions.delete.alreadyUsed)
            document.querySelector('#deleting-transition-loader').remove()
        }
    }
    xhr.open('DELETE', c.path + '/workflowmakr/transitions/' + element.getAttribute('data-delete-transition'), true)
    xhr.setRequestHeader('accept', 'application/json')
    if (c.request_headers) {
        Object.keys(c.request_headers).forEach(function (key) {
            xhr.setRequestHeader(key, c.request_headers[key])
        })
    }
    xhr.send()
}

/**
 * Event fired on "keyup", "change" and "focus" events on autocomplete elements
 * @param autocomplete The autocomplete element
 */
function autocompleteListener(autocomplete) {
    if (!acl) {
        acl = true
        const container = autocomplete.closest('.autocomplete-container')
        container.classList.add('loading')
        setTimeout(function () {
            if (autocomplete.closest('.node').classList.contains('saving')) {
                const autocompleteContainer = document.querySelector(autocomplete.getAttribute('data-target'))
                if (!autocomplete.value) {
                    container.classList.remove('loading')
                    acl = false
                    autocompleteClearAndHide(autocompleteContainer)
                    return
                }
                var xhr = new XMLHttpRequest()
                dd('Loading autocomplete data...')
                xhr.onreadystatechange = function () {
                    container.classList.remove('loading')
                    acl = false
                    if (this.readyState != 4) return
                    if (this.status == 200) {
                        const autocompleteRejex = new RegExp("^" + autocomplete.value, "i")
                        let verified = false
                        let fragment = document.createDocumentFragment()
                        const db = JSON.parse(this.responseText).data.map(item => item.designation)
                        for (let i = 0; i < db.length; i++) {
                            if (autocompleteRejex.test(db[i])) {
                                verified = true
                                const element = document.createElement("p")
                                element.innerText = db[i]
                                element.setAttribute("onclick", "const autocomplete = document.querySelector('[data-target=\"" + autocomplete.getAttribute('data-target') + "\"]'); const autocompleteContainer = document.querySelector(autocomplete.getAttribute('data-target'));    autocomplete.value = this.innerText; autocompleteContainer.innerHTML = '';  autocompleteContainer.style.display = 'none';")
                                fragment.appendChild(element)
                            }
                        }
                        if (verified == true) {
                            autocompleteContainer.innerHTML = ""
                            autocompleteContainer.style.display = "block"
                            autocompleteContainer.appendChild(fragment)
                            return
                        }
                        autocompleteClearAndHide(autocompleteContainer)
                    } else if (this.status == 500) {
                        toast(toastColors.danger, dictionnary.messages.server.internalError)
                    } else {
                        toast(toastColors.danger, dictionnary.messages.server.notResponding)
                    }
                }
                xhr.open('GET', c.path + '/workflowmakr/' + autocomplete.getAttribute('data-target-model') + '?q=' + autocomplete.value, true)
                xhr.setRequestHeader('accept', 'application/json')
                if (c.request_headers) {
                    Object.keys(c.request_headers).forEach(function (key) {
                        xhr.setRequestHeader(key, c.request_headers[key])
                    })
                }
                xhr.send()
            }
        }, 300)
    }
}

/**
 * Clear the autocomplete container and hide it
 * @param autocompleteContainer The autocomplete element
 */
function autocompleteClearAndHide(autocompleteContainer) {
    autocompleteContainer.innerHTML = ""
    autocompleteContainer.style.display = "none"
}

/**
 * Add a single node to scenario org chart html
 * @param object transition The transition object to show
 * 
 * @return The node html
 */
function showNode(transition) {
    let node = ''
    node += '<li data-transition="' + transition.id + '">'
    node += '<div class="node" data-transition="' + transition.id + '">'
    node += '<img src="' + editIcon + '" data-transition-id="' + transition.id + '" class="edit-btn" title="' + dictionnary.transitions.edit + '" />'
    node += '<img src="' + deleteIcon + '" data-transition-id="' + transition.id + '" class="delete-btn" title="' + dictionnary.transitions.delete + '" />'
    node += '<div class="action" ' + (transition.action.designation.length > 15 ? 'title = "' + transition.action.designation + '"' : '') + '>' + transition.action.designation + '</div>'
    node += '<div class="status" ' + (transition.new_status.designation.length > 15 ? 'title = "' + transition.new_status.designation + '"' : '') + '>' + transition.new_status.designation + '</div>'
    node += '<img src="' + addIcon + '" data-transition-id="' + transition.id + '" class="add-btn" title="' + dictionnary.transitions.add + '" />'
    node +=
        '<div class="delete-confirmation">\
            <p>' + dictionnary.transitions.deleteConfirmation.title + '</p>\
            <div>\
                <a data-delete-transition="' + transition.id + '">' + dictionnary.transitions.deleteConfirmation.deleteBtn + '</a>\
                <a data-cancel-delete-transition="' + transition.id + '">' + dictionnary.transitions.deleteConfirmation.cancelBtn + '</a>\
            </div>\
        </div>'
    node +=
        '<form class="save-form">\
            <label for="transition-action-' + transition.id + '">' + dictionnary.transitions.saveForm.action + '</label>\
            <div class="autocomplete-container">\
                <div class="loader"><span></span></div>\
                <input class="autocomplete" data-target-model="actions" data-target="#transition-action-autocomplete-' + transition.id + '" id="transition-action-' + transition.id + '" value="' + transition.action.designation + '" />\
                <div class="autocomplete-result" id="transition-action-autocomplete-' + transition.id + '"></div>\
            </div>\
            <label for="transition-new-status-' + transition.id + '">' + dictionnary.transitions.saveForm.newStatus + '</label>\
            <div class="autocomplete-container">\
                <div class="loader"><span></span></div>\
                <input class="autocomplete" data-target-model="statuses" data-target="#transition-new-status-autocomplete-' + transition.id + '" id="transition-new-status-' + transition.id + '" value="' + transition.new_status.designation + '" />\
                <div class="autocomplete-result" id="transition-new-status-autocomplete-' + transition.id + '"></div>\
            </div>\
            <div>\
                <a data-update-transition="' + transition.id + '">' + dictionnary.transitions.saveForm.saveBtn + '</a>\
                <a data-cancel-update-transition="' + transition.id + '">' + dictionnary.transitions.saveForm.cancelBtn + '</a>\
            </div>\
        </form>'
    node += '</div>'
    if (transition.transitions && transition.transitions.length) {
        node += '<ul data-parent="' + transition.id + '">'
        transition.transitions.forEach(t => {
            node += showNode(t)
        })
        node += '</ul>'
    }
    node += '</li>'
    return node
}

/**
 * Parse the configuration passed to the workflow makr ui init function
 * @param {*} config The workflow makr ui configuration
 */
function parseConfig(config) {
    if (config.i18n) {
        dictionnary = config.i18n
    }
    if (config.toast_time_out) {
        c.toast_time_out = config.toast_time_out
    } else {
        c.toast_time_out = 9000
    }
}

/**
 * Console a message if debug is enabled
 * @param string msg The message to show in console
 */
function dd(msg) {
    if (c && c.debug) {
        console.log(msg)
    }
}

/**
 * Show a toast message
 * @param string backgroundColor The toast background color
 * @param string message The message to show
 */
function toast(backgroundColor, message) {
    const config = {
        text: message,
        duration: c.toast_time_out,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: backgroundColor,
        stopOnFocus: true
    }
    Toastify(config).showToast()
}