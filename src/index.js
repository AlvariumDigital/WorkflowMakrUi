// Styles
import './styles.scss'

// Templating
import {
    container,
    loader,
    addIcon,
    deleteIcon,
    deleteDialog,
    parseHtml,
    editIcon
} from './templates'

// The scenario objects
let s = {}
let levels = {}

// String dictionnary
const dictionnary = {
    transitions: {
        add: "Add transition",
        edit: "Edit transition",
        delete: "Delete transition",
        deleteConfirmation: {
            title: "Are you sure?",
            deleteBtn: "Yes!",
            cancelBtn: "No"
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
    parseConfig(config)
    mainSelector = config.selector

    // Initialize workflow makr ui container
    document.querySelector(mainSelector).innerHTML = container
    document.querySelector('#workflow-makr-chart-container').innerHTML = loader
    console.log('Initializing the workflow makr ui...')

    // Load scenario data
    var xhr = new XMLHttpRequest()
    console.log('Loading scenario...')
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return
        if (this.status == 200) {
            s = JSON.parse(this.responseText)

            // Show org chart
            document.querySelector('#workflow-makr-chart-container #loading-workflow-makr').style.opacity = 0
            setTimeout(() => {
                console.log('Printing scenario...')
                showScenario(parseTransitions(s.transitions))
                reCalculateContainerWidth()
            }, 500)
        }
        if (this.status == 404) {
            console.error('Failed loading scenario...')
            console.error("Error", this.status, this.statusText)
        }
    }
    xhr.open('GET', 'http://localhost:8000/workflowmakr/scenarios/' + config.scenario_id, true)
    xhr.setRequestHeader('accept', 'application/json')
    if (config.request_headers) {
        Object.keys(config.request_headers).forEach(function (key) {
            xhr.setRequestHeader(key, config.request_headers[key])
        })
    }
    xhr.send()

    // Attach event listeners
    attachEventListeners()
}

/**
 * Attach different events listeners
 */
function attachEventListeners() {
    document.addEventListener('click', function (e) {
        const target = e.target
        if (target.classList.contains('delete-btn')) {
            deleteEventListener(target)
        }
        if (target.getAttribute('data-cancel-delete-transition')) {
            cancelDeleteTransition(target)
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
    html += '<li>'
    html += '<div class="node start">'
    html += 'START'
    html += '<img src="' + addIcon + '" data-transition-id="' + null + '" class="add-btn" title="' + dictionnary.transitions.add + '"/>'
    html += '</div>'
    html += '<ul>'
    transitions.forEach(transition => html += showNode(transition))
    html += '</ul>'
    html += '</li></ul>'
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
    document.querySelector('#workflow-makr-chart-container').style.minWidth = max * (200 * 1.8) + 'px'
}

/**
 * Event listener for the event "click" on transition delete button
 * @param element The element clicked
 */
function deleteEventListener(element) {
    const transitionId = +element.getAttribute("data-transition-id")
    const transition = findTransition(s.transitions, transitionId)
    document.querySelector('.node.to-delete')?.classList.remove('to-delete')
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
 * Add a single node to scenario org chart html
 * @param object transition The transition object to show
 * 
 * @return The node html
 */
function showNode(transition) {
    let node = ''
    node += '<li>'
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
    node += '</div>'
    if (transition.transitions && transition.transitions.length) {
        node += '<ul>'
        transition.transitions.forEach(t => {
            node += showNode(t)
        })
        node += '</ul>'
    } else if (isLastTransition(transition)) {
        node += '<ul>'
        node += '<li class="end"><div class="node end">END</div></li>'
        node += '</ul>'
    }
    node += '</li>'
    return node
}

/**
 * Check if the transition is of type end (no transition after it)
 * @param object transition The transition object
 * 
 * @return TRUE if the transition is the last, FALSE otherwise
 */
function isLastTransition(transition) {
    const statuses = getAllOldStatuses(s.transitions)
    return !statuses.filter(s => s == transition.new_status.id).length
}

/**
 * Get all the old_statuses from scenario transitions
 * @param array transitions The scenario object transitions
 * 
 * @return The array of all old_status items id
 */
function getAllOldStatuses(transitions) {
    let statuses = []
    transitions.forEach(transition => {
        if (transition.old_status) {
            statuses.push(transition.old_status.id)
        }
        if (transition.children && transition.children.length) {
            statuses = statuses.concat(getAllOldStatuses(transition.children))
        }
    })
    return statuses
}

/**
 * Parse the configuration passed to the workflow makr ui init function
 * @param {*} config The workflow makr ui configuration
 */
function parseConfig(config) {
    if (config.i18n) {
        Object.keys(config.i18n).forEach(function (key) {
            dictionnary[key] = config.i18n[key]
        })
    }
}