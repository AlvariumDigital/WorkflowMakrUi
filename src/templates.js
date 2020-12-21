// Main container
export const container =
  '<div id="workflow-makr-chart-container"></div>'

// Page loader
export const loader =
  '<div id="loading-workflow-makr"><div class="loader"><span></span></div></div>'

// Base 64 add icon
export const addIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVQ4jaWSO2hTYRzFz3dThz6GEiyIaIgSb4IUoUOpGEI6pU2Mdqxg3SwU8bFYx+CgiyBiFmnRQeGGZmhpBRMfZLBDljwoWAht77WpEEQlUVDz7j0OljxKykU84/nO9+N//t8H/KdER/fYmBl9pnHowg4AkLiBn5U3yMXyRkAJdt/M2NXA73BklRlthxlth+HIKsen7/6CwzsNQDrwcv/I5PJc+DV1XSdJJpNJJhIJkqSu65xbiLL/7ORiZ4jdNxN88ZKtCoVCVBSlzXv8fIV7k+yNDAA214B7ZOjh9Sm/UUXcuHIB7uGhR5BHDzcBh/q8U35XjxCdd9oqIQQu+129MPV4AaALAKCbTp22WZBOpxGPxxvhVCoFkigUCg3P6XTCcfI4oEtyEwCKWr2OowNmyLLcCOdyOQBo88xmM75//gGAogkQVNcy23APX4TVam2E8/k8SMLj8bTVWH6/Bkhis7mDWj3ybClWqlRrhjsoV6p4uviuiNputAnQ3n79sPHxTiCoGAICQQXrW9nbUKPf9p9JXWcmVm7dn2exVCZJappGVVVJksVSmTfvzdM0OLGElo+0/90kOPzX5BOWB5d857oHbRYAwLr6CQuReGkzm51FJvIEgH4Q4K+so0fQ3XseFDYAAHe3UK2+wnbsi2HHf9UfUvbrs4JlrH0AAAAASUVORK5CYII='

// Base 64 edit icon
export const editIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVQ4jY2TMU8UURDHfzPLhguVFtiCwWZ36fgCJp6xutu3ja0WgNRHArGyNFdwlooQ4wcgYQ8qEv0IdtxRkUCNNdEcu2Nxx3m3t2v8Vy/z5jcz703+QlFhI0K8DYwlIBtFPYRrLDugf9qbTJfxaW3T5/amjdo8Qofz9HKq8KpbwWiRy28WFnf58XnAFBy6I0L3bGaiooK4TuiOWNv0AeYAuL1pI3ykn36vBKP4BTkNcnuLjhhoKWEjQm3+33CzCfIOkceovOei+w21GmEjUsTbQOhUwmESY5qA/xTjAcopAMIe4q0rxtLMh43f6xyYQ/w32N0nNG/T654BcJ5eYiwrf1c1CwvxGJYspXdyUsjK5srhOEFoDuHBPpIfl8DAcAveNJw8R/OX4L/CBvsgZZ3v5SnCNatuZRwSe43JQ/LBV4wu/eNuKRo1nyBcKZYdYLQmr8B+gn3hIk0rOgPawrLDEeI+EMT16uSCgrhOkHQAFIDaox1Etv6rSBDXEdliYXEXys1UQ9irMNM2ufyaNJNQ1NDO6xjLTNv5CssOi3b+AzI6mWmKNVc3AAAAAElFTkSuQmCC'

// Edit dialog
export const editDialog =
  '<div id="edit-transition-dialog" class="overlay">\
    <div class="popup">\
      <div class="header">\
        <h2>{{ title }}</h2>\
        <a class="close-dialog" data-target="#edit-transition-dialog">&times;</a>\
      </div>\
      <div class="content">\
        This is a dialog\
      </div>\
      <div class="footer">\
        <a class="close-dialog" data-target="#edit-transition-dialog">{{ closeBtn }}</a>\
        <a class="save">{{ saveBtn }}</a>\
      </div>\
    </div>\
  </div>'

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