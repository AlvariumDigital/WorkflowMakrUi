// Main container
export const container =
  '<div id="workflow-makr-chart-container"></div>'

// Page loader
export const loader =
  '<div id="loading-workflow-makr"><div class="loader"><span></span></div></div>'

/**
 * Parse variables into an html string
 * @param string html The html string to parse
 * @param array variables The variable array (key, value)
 * 
 * @return string The parsed html string
 */
export function parseHtml(html, variables) {
  for (const [key, value] of Object.entries(variables)) {
    html = html.replace('{{ ' + key + ' }}', value);
  }
  return html
}