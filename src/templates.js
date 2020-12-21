// Main container
export const container =
  '<div id="workflow-makr-chart-container"></div>'

// Page loader
export const loader =
  '<div id="loading-workflow-makr"><div class="loader"><span></span></div></div>'

// Deleting a transition loader
export const deletingLoader =
  '<div id="deleting-transition-loader"><div class="loader"><span></span></div></div>'

// Snackbar message
export const snackbar = 
  '<div id="snackbar">{{ msg }}</div>'

// Base 64 add icon
export const addIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVQ4jaWSO2hTYRzFz3dThz6GEiyIaIgSb4IUoUOpGEI6pU2Mdqxg3SwU8bFYx+CgiyBiFmnRQeGGZmhpBRMfZLBDljwoWAht77WpEEQlUVDz7j0OljxKykU84/nO9+N//t8H/KdER/fYmBl9pnHowg4AkLiBn5U3yMXyRkAJdt/M2NXA73BklRlthxlth+HIKsen7/6CwzsNQDrwcv/I5PJc+DV1XSdJJpNJJhIJkqSu65xbiLL/7ORiZ4jdNxN88ZKtCoVCVBSlzXv8fIV7k+yNDAA214B7ZOjh9Sm/UUXcuHIB7uGhR5BHDzcBh/q8U35XjxCdd9oqIQQu+129MPV4AaALAKCbTp22WZBOpxGPxxvhVCoFkigUCg3P6XTCcfI4oEtyEwCKWr2OowNmyLLcCOdyOQBo88xmM75//gGAogkQVNcy23APX4TVam2E8/k8SMLj8bTVWH6/Bkhis7mDWj3ybClWqlRrhjsoV6p4uviuiNputAnQ3n79sPHxTiCoGAICQQXrW9nbUKPf9p9JXWcmVm7dn2exVCZJappGVVVJksVSmTfvzdM0OLGElo+0/90kOPzX5BOWB5d857oHbRYAwLr6CQuReGkzm51FJvIEgH4Q4K+so0fQ3XseFDYAAHe3UK2+wnbsi2HHf9UfUvbrs4JlrH0AAAAASUVORK5CYII='

// Base 64 edit icon
export const editIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1ElEQVQ4jZWTTUiUURSGn/PNzx2SmEqNUhQKwS9y0KxAghZKKEPECLmthZUU0WJmEahbFxHkQIH9YJs2tRByoBoUaShXQUQlgeWYM5gQCrX1jjm3xdRM8zlf1Lu6HM5z73nvOUdwyo6EsDgPdIM0FIJmGZgmzzjzibk/06V4agorlIpjuFgWL5dBuIPWUdJJXbqgKazwB5JgOl1AhyRFbj1MOqktAJSK/zsMYDpRarRQgR0JYck7t7IDykfs7Cka91QzcneCL6vfS3byptXDbnsYpMMNHhro4+TxNiInjlHlF57Mvi36wJKcF+h2gydvDrLwOcOL1/MAZFe+OpyYHqvUqq1weinD4ZDN9qoAT1++If5wxpEpDZYTVn4fiVuDLC5laW+xef8pQ33tDq6NP2Zdb2yp1Po1JEVd7e/lWeoVh1qamVvIUlcTpC92g9yPfAWjZtkLTAP271BHazP762u4NzFD19EDnI66wYDIlIdqewWR4vTtrd1JcJuftdU1rlx/wIYbDAYjFwq9P9g7huGSW2bl1xnjw+TlwidqHQVJ/Qf+HK1jAB4AvqU3Ce57hNe7CzjC35fpNuI7w8dEjoqJdiSER85hTE/ZOotMsWnuO9f5J1WVkw2yAfLvAAAAAElFTkSuQmCC'

// Base 64 delete icon
export const deleteIcon =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACD0lEQVQ4T42TTWsTURSG3zMTJ8Quou0PEKlx60fozSQVqaEU8zdctIIbwUX6QaHQTT9BEPsF/o5qqTK17QyTKoorbaL4B9rUhVTSmTlybzJxJo3i3d1z7/vcc95zLqFjOaZ5W/f9MSYqBsAVeaz5/nfo+htiXhMHBx+jEgo377LZi76uPwPwoBMaEzBveInE44LjnMq4ArTErwDc+Zc4PGPgbaDr9yVEAVwhXoQv942M4NiywI1GjKUlk7hcLOJoczOMr+cqlYcka9aC4L2MSnH/7CxObBvVcrkN0QwDmeVlpIVAbWoKx9vbCkLMt6gyMLDORKMqYBi4Pj+PdKGAH7aNw3JZ1ZhZWkI6l0N9Zwe1yUmw54VZrJIrRBXAtTASgzgOQIS0aaK+u4va+HhUDAa+kCNEQwMuxJyWmSwsIJ3Pq/DJ3h6qUnx2FvMlABpdAarmxUX1sgLs7zcBHcYqgJvNHkLXMyFaiVs1S6FclwYHu0KY6LP0YA3AmJq4ZLIpFqJZ88SE8iAzN9cVQszPZRduMtEH1cZSCf0zM+fclsaGkK/T0zja2lKZMdENNUjRVvYOD6MuB+lPq5o9Nwz0Dg1FxSum6z5SADufT2m+/5KAu/8zysRs/ezpKd2zrF/tzyQhCc97Gg7V30BMtHKaSj2R4vZnil5ueTLKQJGBq+oS0TctCF4HmrZhuu6n6P3fcCns3XprXkoAAAAASUVORK5CYII='

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