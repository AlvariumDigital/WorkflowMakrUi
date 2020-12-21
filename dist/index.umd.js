(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.workflowmakr = {}));
}(this, (function (exports) { 'use strict';

    var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css = "@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap\");\n#workflow-makr-chart-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #efefef;\n  overflow: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start; }\n\n* {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #22659c; }\n\n.workflow-makr-org {\n  display: flex;\n  justify-content: center;\n  font-family: 'Lato', sans-serif; }\n  .workflow-makr-org ul {\n    padding-top: 20px;\n    position: relative;\n    transition: all 0.5s; }\n    .workflow-makr-org ul ul::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 50%;\n      border-left: 1px solid #ccc;\n      width: 50%;\n      height: 20px; }\n  .workflow-makr-org li {\n    float: left;\n    text-align: center;\n    list-style-type: none;\n    position: relative;\n    padding: 20px 10px;\n    transition: all 0.5s; }\n    .workflow-makr-org li.end {\n      float: none;\n      margin: 0 auto; }\n    .workflow-makr-org li::before, .workflow-makr-org li::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 50%;\n      border-top: 1px solid #ccc;\n      width: 50%;\n      height: 19px; }\n    .workflow-makr-org li::after {\n      right: auto;\n      left: 50%;\n      border-left: 1px solid #ccc; }\n    .workflow-makr-org li:only-child::after, .workflow-makr-org li:only-child::before {\n      border-radius: 0 !important;\n      right: calc(50% - 1px); }\n    .workflow-makr-org li:first-child::before, .workflow-makr-org li:last-child::after {\n      border: 0 none; }\n    .workflow-makr-org li:last-child::before {\n      border-right: 1px solid #ccc;\n      border-radius: 0 6px 0 0; }\n    .workflow-makr-org li:first-child::after {\n      border-radius: 6px 0 0 0; }\n    .workflow-makr-org li .node {\n      text-decoration: none;\n      color: #666;\n      display: inline-block;\n      padding: 20px 10px;\n      transition: all 0.5s;\n      background: #fff;\n      min-width: 180px;\n      border-radius: 6px;\n      position: relative;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n      .workflow-makr-org li .node.start, .workflow-makr-org li .node.end {\n        width: 50px;\n        min-width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        padding: 0;\n        background: #cecece;\n        line-height: 50px;\n        font-size: 10px;\n        font-weight: 900;\n        letter-spacing: 1px;\n        color: #333;\n        position: relative; }\n      .workflow-makr-org li .node.end {\n        background: #22659c;\n        color: #fff; }\n      .workflow-makr-org li .node:not(.start):not(.end):hover {\n        background: #dfecf8;\n        color: #002A50;\n        transition: all 0.15s; }\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li::after,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li::before,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul::before,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul ul::before {\n        border-width: 2px;\n        border-color: #94a0b4; }\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li:only-child::before {\n        right: calc(50% - 2px); }\n      .workflow-makr-org li .node:hover .add-btn,\n      .workflow-makr-org li .node:hover .delete-btn,\n      .workflow-makr-org li .node:hover .edit-btn {\n        opacity: .8; }\n        .workflow-makr-org li .node:hover .add-btn:hover,\n        .workflow-makr-org li .node:hover .delete-btn:hover,\n        .workflow-makr-org li .node:hover .edit-btn:hover {\n          opacity: 1; }\n      .workflow-makr-org li .node > div,\n      .workflow-makr-org li .node > a {\n        font-size: 12px; }\n      .workflow-makr-org li .node .status {\n        font-size: 18px;\n        float: none;\n        margin: 0 auto; }\n      .workflow-makr-org li .node .action {\n        font-weight: 700;\n        font-size: 13px;\n        color: #22659c;\n        text-transform: uppercase;\n        position: absolute;\n        top: -15px;\n        font-size: 10px;\n        right: calc(50% - 45px);\n        width: 100%;\n        text-align: center;\n        background: #efefef;\n        padding: 0;\n        z-index: 2; }\n      .workflow-makr-org li .node .add-btn,\n      .workflow-makr-org li .node .delete-btn,\n      .workflow-makr-org li .node .edit-btn {\n        cursor: pointer;\n        text-decoration: none;\n        position: absolute;\n        z-index: 2;\n        opacity: 0;\n        transition: opacity 0.2s ease-in-out; }\n      .workflow-makr-org li .node .add-btn {\n        bottom: -18px;\n        right: calc(50% - 8.5px); }\n      .workflow-makr-org li .node .delete-btn {\n        top: 3px;\n        right: 3px; }\n      .workflow-makr-org li .node .edit-btn {\n        top: 3px;\n        right: 25px;\n        border-radius: 50%;\n        background-color: transparent; }\n      .workflow-makr-org li .node.start .add-btn {\n        bottom: -39px; }\n      .workflow-makr-org li .node .status,\n      .workflow-makr-org li .node .action {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 15ch; }\n  .workflow-makr-org > ul > li:before {\n    border: 0 none !important; }\n\n#loading-workflow-makr {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  min-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: #22659c;\n  transition: opacity 0.45s ease-in-out;\n  z-index: 999; }\n  #loading-workflow-makr .loader {\n    height: 32px;\n    width: 32px;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto; }\n  #loading-workflow-makr .loader span {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px; }\n  #loading-workflow-makr .loader span::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px;\n    border: 3px solid #FFF;\n    border-bottom: 3px solid transparent;\n    border-radius: 50%;\n    -webkit-animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n    animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }\n  #loading-workflow-makr .loader span::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 6px;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    width: 6px;\n    height: 6px;\n    background: #FFF;\n    border-radius: 50%;\n    -webkit-animation: loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n    animation: loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }\n\n@-webkit-keyframes loader-1 {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  40% {\n    -webkit-transform: rotate(180deg); }\n  60% {\n    -webkit-transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loader-1 {\n  0% {\n    transform: rotate(0deg); }\n  40% {\n    transform: rotate(180deg); }\n  60% {\n    transform: rotate(180deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes loader-2 {\n  0% {\n    -webkit-transform: translate3d(0, -32px, 0) scale(0, 2);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1.25, 1.25);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 8px, 0) scale(0, 0);\n    opacity: 0; } }\n\n@keyframes loader-2 {\n  0% {\n    transform: translate3d(0, -32px, 0) scale(0, 2);\n    opacity: 0; }\n  50% {\n    transform: translate3d(0, 0, 0) scale(1.25, 1.25);\n    opacity: 1; }\n  100% {\n    transform: translate3d(0, 8px, 0) scale(0, 0);\n    opacity: 0; } }\n\n@keyframes fadeInUp {\n  from {\n    transform: translate3d(0, -40px, 0); }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    transform: translate3d(0, -40px, 0); }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  visibility: hidden;\n  opacity: 0;\n  z-index: 3;\n  font-family: 'Lato', sans-serif; }\n  .overlay.show {\n    visibility: visible;\n    opacity: 1; }\n  .overlay#delete-transition-dialog .popup {\n    width: 500px; }\n    .overlay#delete-transition-dialog .popup .content p {\n      padding: 20px 0 0 0;\n      margin: 0;\n      color: #ff0000;\n      text-align: center; }\n  .overlay .popup {\n    margin: 70px auto;\n    background: #fff;\n    border-radius: 5px;\n    min-width: 30%;\n    max-width: 90%;\n    position: relative; }\n    .overlay .popup .close-dialog {\n      transition: color 200ms;\n      font-size: 30px;\n      font-weight: bold;\n      text-decoration: none; }\n    .overlay .popup .close-dialog:hover {\n      color: #22659c;\n      cursor: pointer; }\n    .overlay .popup .content {\n      max-height: calc(90% - 60px - 60px);\n      overflow: auto;\n      padding: 20px;\n      font-size: 16px; }\n      .overlay .popup .content .transition-meta {\n        display: grid;\n        font-size: 18px;\n        grid-gap: 3px;\n        grid-template-columns: repeat(3, 1fr) 1em;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 10px;\n        width: 100%; }\n        .overlay .popup .content .transition-meta > span {\n          background-color: #22659c;\n          color: #ffffff;\n          font-weight: 700;\n          letter-spacing: 0.01em;\n          line-height: 1.333em;\n          padding: 0.667em 0.667em 0.667em 1.333em;\n          position: relative;\n          text-decoration: none;\n          text-align: center;\n          position: relative; }\n          .overlay .popup .content .transition-meta > span > span {\n            position: absolute;\n            top: -18px;\n            left: 0;\n            font-size: .6rem;\n            color: #002A50;\n            font-weight: 800; }\n          .overlay .popup .content .transition-meta > span .text {\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            max-width: 10ch; }\n          .overlay .popup .content .transition-meta > span:nth-child(1) {\n            background-color: #b5d5ef;\n            z-index: 3; }\n          .overlay .popup .content .transition-meta > span:nth-child(2) {\n            background-color: #8bbde6;\n            z-index: 2; }\n          .overlay .popup .content .transition-meta > span:nth-child(3) {\n            background-color: #61a5dd;\n            z-index: 1; }\n          .overlay .popup .content .transition-meta > span:before {\n            border-bottom: 1.333em solid transparent;\n            border-left: 0.667em solid #ffffff;\n            border-top: 1.333em solid transparent;\n            bottom: 0;\n            content: '';\n            height: 0;\n            left: 0;\n            position: absolute;\n            top: 0;\n            width: 0; }\n          .overlay .popup .content .transition-meta > span:after {\n            border-bottom: 1.333em solid transparent;\n            border-left: 0.667em solid;\n            border-top: 1.333em solid transparent;\n            bottom: 0;\n            content: '';\n            height: 0;\n            position: absolute;\n            right: 0;\n            top: 0;\n            transform: translateX(0.667em);\n            width: 0; }\n          .overlay .popup .content .transition-meta > span:nth-child(1):after {\n            border-left-color: #b5d5ef; }\n          .overlay .popup .content .transition-meta > span:nth-child(2):after {\n            border-left-color: #8bbde6; }\n          .overlay .popup .content .transition-meta > span:nth-child(3):after {\n            border-left-color: #61a5dd; }\n    .overlay .popup .header,\n    .overlay .popup .footer {\n      height: 60px;\n      display: flex;\n      flex-direction: row;\n      align-items: center; }\n    .overlay .popup .header,\n    .overlay .popup .footer {\n      padding: 0 20px; }\n    .overlay .popup .header {\n      justify-content: space-between;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n      .overlay .popup .header h2 {\n        font-size: 18px; }\n    .overlay .popup .footer {\n      justify-content: flex-end;\n      border-top: 1px solid rgba(0, 0, 0, 0.1);\n      background-color: rgba(0, 0, 0, 0.05); }\n      .overlay .popup .footer .close-dialog {\n        font-size: 14px;\n        font-weight: normal;\n        text-decoration: none;\n        padding: 7.5px 15px; }\n      .overlay .popup .footer .save,\n      .overlay .popup .footer .delete {\n        font-size: 16px;\n        font-weight: normal;\n        background-color: #22659c;\n        text-decoration: none;\n        color: #ffffff;\n        padding: 7.5px 15px 10px 15px;\n        border-radius: 3px;\n        transition: background-color 0.3s ease-in-out; }\n        .overlay .popup .footer .save:hover,\n        .overlay .popup .footer .delete:hover {\n          cursor: pointer;\n          background-color: #002A50; }\n      .overlay .popup .footer .save {\n        background-color: #22659c; }\n        .overlay .popup .footer .save:hover {\n          background-color: #002A50; }\n      .overlay .popup .footer .delete {\n        background-color: #ff4d4d; }\n        .overlay .popup .footer .delete:hover {\n          background-color: #ff1a1a; }\n";
    n(css,{});

    // Main container
    const container =
      '<div id="workflow-makr-chart-container"></div>';

    // Page loader
    const loader =
      '<div id="loading-workflow-makr"><div class="loader"><span></span></div></div>';

    // Base 64 add icon
    const addIcon =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVQ4jaWSO2hTYRzFz3dThz6GEiyIaIgSb4IUoUOpGEI6pU2Mdqxg3SwU8bFYx+CgiyBiFmnRQeGGZmhpBRMfZLBDljwoWAht77WpEEQlUVDz7j0OljxKykU84/nO9+N//t8H/KdER/fYmBl9pnHowg4AkLiBn5U3yMXyRkAJdt/M2NXA73BklRlthxlth+HIKsen7/6CwzsNQDrwcv/I5PJc+DV1XSdJJpNJJhIJkqSu65xbiLL/7ORiZ4jdNxN88ZKtCoVCVBSlzXv8fIV7k+yNDAA214B7ZOjh9Sm/UUXcuHIB7uGhR5BHDzcBh/q8U35XjxCdd9oqIQQu+129MPV4AaALAKCbTp22WZBOpxGPxxvhVCoFkigUCg3P6XTCcfI4oEtyEwCKWr2OowNmyLLcCOdyOQBo88xmM75//gGAogkQVNcy23APX4TVam2E8/k8SMLj8bTVWH6/Bkhis7mDWj3ybClWqlRrhjsoV6p4uviuiNputAnQ3n79sPHxTiCoGAICQQXrW9nbUKPf9p9JXWcmVm7dn2exVCZJappGVVVJksVSmTfvzdM0OLGElo+0/90kOPzX5BOWB5d857oHbRYAwLr6CQuReGkzm51FJvIEgH4Q4K+so0fQ3XseFDYAAHe3UK2+wnbsi2HHf9UfUvbrs4JlrH0AAAAASUVORK5CYII=';

    // Base 64 edit icon
    const editIcon =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1ElEQVQ4jZWTTUiUURSGn/PNzx2SmEqNUhQKwS9y0KxAghZKKEPECLmthZUU0WJmEahbFxHkQIH9YJs2tRByoBoUaShXQUQlgeWYM5gQCrX1jjm3xdRM8zlf1Lu6HM5z73nvOUdwyo6EsDgPdIM0FIJmGZgmzzjzibk/06V4agorlIpjuFgWL5dBuIPWUdJJXbqgKazwB5JgOl1AhyRFbj1MOqktAJSK/zsMYDpRarRQgR0JYck7t7IDykfs7Cka91QzcneCL6vfS3byptXDbnsYpMMNHhro4+TxNiInjlHlF57Mvi36wJKcF+h2gydvDrLwOcOL1/MAZFe+OpyYHqvUqq1weinD4ZDN9qoAT1++If5wxpEpDZYTVn4fiVuDLC5laW+xef8pQ33tDq6NP2Zdb2yp1Po1JEVd7e/lWeoVh1qamVvIUlcTpC92g9yPfAWjZtkLTAP271BHazP762u4NzFD19EDnI66wYDIlIdqewWR4vTtrd1JcJuftdU1rlx/wIYbDAYjFwq9P9g7huGSW2bl1xnjw+TlwidqHQVJ/Qf+HK1jAB4AvqU3Ce57hNe7CzjC35fpNuI7w8dEjoqJdiSER85hTE/ZOotMsWnuO9f5J1WVkw2yAfLvAAAAAElFTkSuQmCC';

    // Base 64 delete icon
    const deleteIcon =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACD0lEQVQ4T42TTWsTURSG3zMTJ8Quou0PEKlx60fozSQVqaEU8zdctIIbwUX6QaHQTT9BEPsF/o5qqTK17QyTKoorbaL4B9rUhVTSmTlybzJxJo3i3d1z7/vcc95zLqFjOaZ5W/f9MSYqBsAVeaz5/nfo+htiXhMHBx+jEgo377LZi76uPwPwoBMaEzBveInE44LjnMq4ArTErwDc+Zc4PGPgbaDr9yVEAVwhXoQv942M4NiywI1GjKUlk7hcLOJoczOMr+cqlYcka9aC4L2MSnH/7CxObBvVcrkN0QwDmeVlpIVAbWoKx9vbCkLMt6gyMLDORKMqYBi4Pj+PdKGAH7aNw3JZ1ZhZWkI6l0N9Zwe1yUmw54VZrJIrRBXAtTASgzgOQIS0aaK+u4va+HhUDAa+kCNEQwMuxJyWmSwsIJ3Pq/DJ3h6qUnx2FvMlABpdAarmxUX1sgLs7zcBHcYqgJvNHkLXMyFaiVs1S6FclwYHu0KY6LP0YA3AmJq4ZLIpFqJZ88SE8iAzN9cVQszPZRduMtEH1cZSCf0zM+fclsaGkK/T0zja2lKZMdENNUjRVvYOD6MuB+lPq5o9Nwz0Dg1FxSum6z5SADufT2m+/5KAu/8zysRs/ezpKd2zrF/tzyQhCc97Gg7V30BMtHKaSj2R4vZnil5ueTLKQJGBq+oS0TctCF4HmrZhuu6n6P3fcCns3XprXkoAAAAASUVORK5CYII=';

    // Delete confirmation dialog
    const deleteDialog =
      '<div id="delete-transition-dialog" class="overlay">\
    <div class="popup">\
      <div class="header">\
        <h2>{{ title }}</h2>\
        <a class="close-dialog" data-target="#delete-transition-dialog">&times;</a>\
      </div>\
      <div class="content">\
        <div class="transition-meta">\
        <span><span>{{ oldStatus }} </span><div class="text">{{ transitionOldStatus }}</div></span>\
        <span><span>{{ action }} </span><div class="text">{{ transitionAction }}</div></span>\
        <span><span>{{ newStatus }} </span><div class="text">{{ transitionNewStatus }}</div></span>\
        </div>\
        <p>{{ deleteMsg }}</p>\
      </div>\
      <div class="footer">\
        <a class="close-dialog" data-target="#delete-transition-dialog">{{ closeBtn }}</a>\
        <a class="delete">{{ deleteBtn }}</a>\
      </div>\
    </div>\
  </div>';

    /**
     * Parse variables into an html string
     * @param string html The html string to parse
     * @param array variables The variable array (key, value)
     * 
     * @return string The parsed html string
     */
    function parseHtml(html, variables) {
      for (const [key, value] of Object.entries(variables)) {
        html = html.replace('{{ ' + key + ' }}', value);
      }
      return html
    }

    // Styles

    // The scenario objects
    let s = {};
    let levels = {};

    // String dictionnary
    const dictionnary = {
        transitions: {
            add: "Add transition",
            edit: "Edit transition",
            delete: "Delete transition",
            dialog: {
                add: {
                    title: "Create a new transition"
                },
                delete: {
                    title: "Delete a transition",
                    closeBtn: "Cancel",
                    deleteBtn: "Delete",
                    msg: "<strong>Important:</strong> Deleting this transition will delete :count children transitions linked to it recursively!",
                    oldStatus: "Old status:",
                    action: " Action:",
                    newStatus: "New status:"
                }
            }
        }
    };

    // Main container selector
    let mainSelector = undefined;

    /**
     * Initialize the workflow makr ui
     * @param {*} config The workflow makr ui configuration
     */
    function init(config) {
        parseConfig(config);
        mainSelector = config.selector;

        // Initialize workflow makr ui container
        document.querySelector(mainSelector).innerHTML = container;
        document.querySelector('#workflow-makr-chart-container').innerHTML = loader;
        console.log('Initializing the workflow makr ui...');

        // Load scenario data
        var xhr = new XMLHttpRequest();
        console.log('Loading scenario...');
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return
            if (this.status == 200) {
                s = JSON.parse(this.responseText);

                // Show org chart
                document.querySelector('#workflow-makr-chart-container #loading-workflow-makr').style.opacity = 0;
                setTimeout(() => {
                    console.log('Printing scenario...');
                    showScenario(parseTransitions(s.transitions));
                    reCalculateContainerWidth();
                }, 500);
            }
            if (this.status == 404) {
                console.error('Failed loading scenario...');
                console.error("Error", this.status, this.statusText);
            }
        };
        xhr.open('GET', 'http://localhost:8000/workflowmakr/scenarios/' + config.scenario_id, true);
        xhr.send();

        // Attach event listeners
        attachEventListeners();
    }

    /**
     * Attach different events listeners
     */
    function attachEventListeners() {
        document.addEventListener('click', function (e) {
            const target = e.target;
            if (target.classList.contains('delete-btn')) {
                deleteEventListener(target);
            }
            if (target.classList.contains('close-dialog')) {
                closeDialogEventListener(target);
            }
        });
    }

    /**
     * Parse the transitions array into org chart format
     * @param array transitions The scenario transitions
     * @param number index The index number
     * 
     * @return The array of the scenario transitions
     */
    function parseTransitions(transitions, index = 0) {
        index++;
        const t = [];
        transitions.forEach(transition => {
            t.push({
                id: transition.id,
                old_status: transition.old_status,
                new_status: transition.new_status,
                action: transition.action,
                predecessor: transition.predecessor_id,
                transitions: parseTransitions(transition.children, index)
            });
            if (!levels['level-' + index]) {
                levels['level-' + index] = [];
            }
            levels['level-' + index].push(transition.id);
        });
        return t
    }

    /**
     * Show scenario transitions into org chart format
     * @param array transitions The array of parsed transitions
     */
    function showScenario(transitions) {
        let html = '';
        html += '<div id="workflow-makr-org-container">';
        html += '<div class="workflow-makr-org">';
        html += '<ul>';
        html += '<li>';
        html += '<div class="node start">';
        html += 'START';
        html += '<img src="' + addIcon + '" data-transition-id="' + null + '" class="add-btn" title="' + dictionnary.transitions.add + '"/>';
        html += '</div>';
        html += '<ul>';
        transitions.forEach(transition => html += showNode(transition));
        html += '</ul>';
        html += '</li></ul>';
        html += '</div>';
        html += '</div>';
        document.querySelector('#workflow-makr-chart-container').innerHTML = html;
    }

    /**
     * Re calculate container width
     */
    function reCalculateContainerWidth() {
        let max = 0;
        if (levels) {
            Object.keys(levels).forEach(function (key) {
                if (levels[key].length > max) {
                    max = levels[key].length;
                }
            });
        }
        document.querySelector('#workflow-makr-chart-container').style.minWidth = max * (200 * 1.8) + 'px';
    }

    /**
     * Event listener for the event "click" on transition delete button
     * @param element The element clicked
     */
    function deleteEventListener(element) {
        const transitionId = +element.getAttribute("data-transition-id");
        const transition = findTransition(s.transitions, transitionId);
        document.querySelector(mainSelector).insertAdjacentHTML('beforeend', parseHtml(deleteDialog, {
            title: dictionnary.transitions.dialog.delete.title,
            closeBtn: dictionnary.transitions.dialog.delete.closeBtn,
            deleteBtn: dictionnary.transitions.dialog.delete.deleteBtn,
            transitionOldStatus: transition.old_status ? transition.old_status.designation : '',
            transitionAction: transition.action.designation,
            transitionNewStatus: transition.new_status.designation,
            deleteMsg: dictionnary.transitions.dialog.delete.msg.replace(':count', transition.children.length),
            oldStatus: dictionnary.transitions.dialog.delete.oldStatus,
            action: dictionnary.transitions.dialog.delete.action,
            newStatus: dictionnary.transitions.dialog.delete.newStatus
        }));
        document.querySelector('#delete-transition-dialog').classList.add('show');
    }

    /**
     * Find a transition from the scenario object based on it's id
     * @param array transitions The transitions array
     * @param number id The transition id
     * 
     * @return The transition object
     */
    function findTransition(transitions, id) {
        let result = null;
        transitions.forEach(transition => {
            if (transition.id == id) {
                result = transition;
            } else if (transition.children && transition.children.length && !result) {
                result = findTransition(transition.children, id);
            }
        });
        return result
    }

    /**
     * Event listener for the event "click" on close dialog button
     * @param element The element clicked
     */
    function closeDialogEventListener(element) {
        document.querySelector(element.getAttribute('data-target')).remove();
    }

    /**
     * Add a single node to scenario org chart html
     * @param object transition The transition object to show
     * 
     * @return The node html
     */
    function showNode(transition) {
        let node = '';
        node += '<li>';
        node += '<div class="node">';
        node += '<img src="' + editIcon + '" data-transition-id="' + transition.id + '" class="edit-btn" title="' + dictionnary.transitions.edit + '" />';
        node += '<img src="' + deleteIcon + '" data-transition-id="' + transition.id + '" class="delete-btn" title="' + dictionnary.transitions.delete + '" />';
        node += '<div class="action" ' + (transition.action.designation.length > 15 ? 'title = "' + transition.action.designation + '"' : '') + '>' + transition.action.designation + '</div>';
        node += '<div class="status" ' + (transition.new_status.designation.length > 15 ? 'title = "' + transition.new_status.designation + '"' : '') + '>' + transition.new_status.designation + '</div>';
        node += '<img src="' + addIcon + '" data-transition-id="' + transition.id + '" class="add-btn" title="' + dictionnary.transitions.add + '" />';
        node += '</div>';
        if (transition.transitions && transition.transitions.length) {
            node += '<ul>';
            transition.transitions.forEach(t => {
                node += showNode(t);
            });
            node += '</ul>';
        } else if (isLastTransition(transition)) {
            node += '<ul>';
            node += '<li class="end"><div class="node end">END</div></li>';
            node += '</ul>';
        }
        node += '</li>';
        return node
    }

    /**
     * Check if the transition is of type end (no transition after it)
     * @param object transition The transition object
     * 
     * @return TRUE if the transition is the last, FALSE otherwise
     */
    function isLastTransition(transition) {
        const statuses = getAllOldStatuses(s.transitions);
        return !statuses.filter(s => s == transition.new_status.id).length
    }

    /**
     * Get all the old_statuses from scenario transitions
     * @param array transitions The scenario object transitions
     * 
     * @return The array of all old_status items id
     */
    function getAllOldStatuses(transitions) {
        let statuses = [];
        transitions.forEach(transition => {
            if (transition.old_status) {
                statuses.push(transition.old_status.id);
            }
            if (transition.children && transition.children.length) {
                statuses = statuses.concat(getAllOldStatuses(transition.children));
            }
        });
        return statuses
    }

    /**
     * Parse the configuration passed to the workflow makr ui init function
     * @param {*} config The workflow makr ui configuration
     */
    function parseConfig(config) {
        if (config.i18n) {
            Object.keys(config.i18n).forEach(function (key) {
                dictionnary[key] = config.i18n[key];
            });
        }
    }

    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
