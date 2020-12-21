// Styles
import './styles.scss'

// Templating
import {
    container,
    loader,
    addIcon,
    editIcon
} from './templates'

// The scenario object
let s = {}

// String dictionnary
const dictionnary = {
    transitions: {
        add: "Add transition",
        edit: "Edit transition"
    }
}

/**
 * Initialize the workflow makr ui
 * @param string selector The html selector for the canvas to put into the org chart
 * @param number scenario The scenario id
 */
export function init(selector, scenario) {
    // Initialize workflow makr ui container
    document.querySelector(selector).innerHTML = container
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
            }, 500)
        }
        if (this.status == 404) {
            console.error('Failed loading scenario...')
            console.error("Error", this.status, this.statusText)
        }
    }
    xhr.open('GET', 'http://localhost:8000/workflowmakr/scenarios/' + scenario, true)
    xhr.send()
}

/**
 * Parse the transitions array into org chart format
 * @param array transitions The scenario transitions
 * 
 * @return The array of the scenario transitions
 */
function parseTransitions(transitions) {
    const t = []
    transitions.forEach(transition => {
        t.push({
            id: transition.id,
            old_status: transition.old_status,
            new_status: transition.new_status,
            action: transition.action,
            predecessor: transition.predecessor_id,
            transitions: parseTransitions(transition.children)
        })
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
    html += '<a data-transition-id="' + null + '" class="add-btn" title="' + dictionnary.transitions.add + '"><img src="' + addIcon + '" /></a>'
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
 * Add a single node to scenario org chart html
 * @param object transition The transition object to show
 * 
 * @return The node html
 */
function showNode(transition) {
    let node = ''
    node += '<li>'
    node += '<div class="node">'
    node += '<a data-transition-id="' + transition.id + '" class="edit-btn" title="' + dictionnary.transitions.edit + '"><img src="' + editIcon + '" /></a>'
    node += '<div class="action" ' + (transition.action.designation.length > 15 ? 'title = "' + transition.action.designation + '"' : '') + '>' + transition.action.designation + '</div>'
    node += '<div class="status" ' + (transition.new_status.designation.length > 15 ? 'title = "' + transition.new_status.designation + '"' : '') + '>' + transition.new_status.designation + '</div>'
    node += '<a data-transition-id="' + transition.id + '" class="add-btn" title="' + dictionnary.transitions.add + '"><img src="' + addIcon + '" /></a>'
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