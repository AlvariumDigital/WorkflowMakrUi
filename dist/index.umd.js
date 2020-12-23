(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.workflowmakr = {}));
}(this, (function (exports) { 'use strict';

    var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css = "@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;800;900&display=swap\");\n#workflow-makr-chart-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #efefef;\n  overflow: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start; }\n  #workflow-makr-chart-container a {\n    text-decoration: none; }\n\n* {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #22659c; }\n\n.workflow-makr-org {\n  display: flex;\n  justify-content: center;\n  font-family: 'Lato', sans-serif; }\n  .workflow-makr-org ul {\n    padding-top: 20px;\n    position: relative;\n    transition: all 0.5s; }\n    .workflow-makr-org ul ul::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 50%;\n      border-left: 1px solid #ccc;\n      width: 50%;\n      height: 20px; }\n  .workflow-makr-org li {\n    float: left;\n    text-align: center;\n    list-style-type: none;\n    position: relative;\n    padding: 20px 10px;\n    transition: all 0.5s; }\n    .workflow-makr-org li.end {\n      float: none;\n      margin: 0 auto; }\n    .workflow-makr-org li::before, .workflow-makr-org li::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 50%;\n      border-top: 1px solid #ccc;\n      width: 50%;\n      height: 19px; }\n    .workflow-makr-org li::after {\n      right: auto;\n      left: 50%;\n      border-left: 1px solid #ccc; }\n    .workflow-makr-org li:only-child::after, .workflow-makr-org li:only-child::before {\n      border-radius: 0 !important;\n      right: calc(50% - 1px); }\n    .workflow-makr-org li:first-child::before, .workflow-makr-org li:last-child::after {\n      border: 0 none; }\n    .workflow-makr-org li:last-child::before {\n      border-right: 1px solid #ccc;\n      border-radius: 0 6px 0 0; }\n    .workflow-makr-org li:first-child::after {\n      border-radius: 6px 0 0 0; }\n    .workflow-makr-org li .node {\n      text-decoration: none;\n      color: #666;\n      display: inline-block;\n      padding: 20px 10px;\n      transition: all 0.5s;\n      background: #fff;\n      width: 180px;\n      border-radius: 6px;\n      position: relative;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n      .workflow-makr-org li .node.start, .workflow-makr-org li .node.end {\n        width: 50px;\n        min-width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        padding: 0;\n        background: #cecece;\n        line-height: 50px;\n        font-size: 10px;\n        font-weight: 900;\n        letter-spacing: 1px;\n        color: #333;\n        position: relative; }\n      .workflow-makr-org li .node.end {\n        background: #22659c;\n        color: #fff; }\n      .workflow-makr-org li .node:not(.start):not(.end):hover {\n        background: #dfecf8;\n        color: #002A50;\n        transition: all 0.15s; }\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li::after,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li::before,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul::before,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul ul::before {\n        border-width: 2px;\n        border-color: #94a0b4; }\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li:only-child::before {\n        right: calc(50% - 2px); }\n      .workflow-makr-org li .node:not(.start):not(.end).to-delete,\n      .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li .node:not(.end) {\n        background: #f6cdd1; }\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li::after,\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li::before,\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul::before,\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul ul::before,\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li .node:not(.end) + ul li::after,\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li .node:not(.end) + ul li::before,\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li .node:not(.end) + ul::before,\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li .node:not(.end) + ul ul::before {\n          border-width: 2px;\n          border-color: #dc3545; }\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li:only-child::before,\n        .workflow-makr-org li .node:not(.start):not(.end).to-delete + ul li .node:not(.end) + ul li:only-child::before {\n          right: calc(50% - 2px); }\n      .workflow-makr-org li .node:hover .add-btn,\n      .workflow-makr-org li .node:hover .delete-btn,\n      .workflow-makr-org li .node:hover .edit-btn {\n        opacity: .8; }\n        .workflow-makr-org li .node:hover .add-btn:hover,\n        .workflow-makr-org li .node:hover .delete-btn:hover,\n        .workflow-makr-org li .node:hover .edit-btn:hover {\n          opacity: 1; }\n      .workflow-makr-org li .node > div,\n      .workflow-makr-org li .node > a {\n        font-size: 12px; }\n      .workflow-makr-org li .node .status {\n        font-size: 18px;\n        float: none;\n        margin: 0 auto; }\n      .workflow-makr-org li .node .action {\n        font-weight: 700;\n        font-size: 13px;\n        color: #22659c;\n        text-transform: uppercase;\n        position: absolute;\n        top: -15px;\n        font-size: 10px;\n        right: calc(50% - 45px);\n        width: 100%;\n        text-align: center;\n        background: #efefef;\n        padding: 0;\n        z-index: 2; }\n      .workflow-makr-org li .node .add-btn,\n      .workflow-makr-org li .node .delete-btn,\n      .workflow-makr-org li .node .edit-btn {\n        cursor: pointer;\n        text-decoration: none;\n        position: absolute;\n        z-index: 2;\n        opacity: 0;\n        transition: opacity 0.2s ease-in-out; }\n      .workflow-makr-org li .node .add-btn {\n        bottom: -18px;\n        right: calc(50% - 8.5px); }\n      .workflow-makr-org li .node .delete-btn {\n        top: 3px;\n        right: 3px; }\n      .workflow-makr-org li .node .edit-btn {\n        top: 3px;\n        right: 25px;\n        border-radius: 50%;\n        background-color: transparent; }\n      .workflow-makr-org li .node.start .add-btn {\n        bottom: -18px; }\n      .workflow-makr-org li .node .status,\n      .workflow-makr-org li .node .action {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 15ch; }\n      .workflow-makr-org li .node .delete-confirmation,\n      .workflow-makr-org li .node .save-form {\n        display: none; }\n      .workflow-makr-org li .node.saving {\n        background-color: #dfecf8; }\n        .workflow-makr-org li .node.saving .status,\n        .workflow-makr-org li .node.saving .action,\n        .workflow-makr-org li .node.saving .edit-btn,\n        .workflow-makr-org li .node.saving .add-btn,\n        .workflow-makr-org li .node.saving .delete-btn {\n          display: none; }\n        .workflow-makr-org li .node.saving .save-form {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: flex-start; }\n          .workflow-makr-org li .node.saving .save-form label {\n            font-size: 11px;\n            font-weight: 800;\n            margin-bottom: 5px; }\n          .workflow-makr-org li .node.saving .save-form input {\n            background-color: transparent;\n            outline: none;\n            box-shadow: none;\n            border: none;\n            border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n            padding: 5px;\n            margin-bottom: 10px;\n            font-size: 13px;\n            font-weight: 300;\n            width: calc(100% - 10px); }\n          .workflow-makr-org li .node.saving .save-form > div:not(.autocomplete-result) {\n            width: 100%;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center; }\n            .workflow-makr-org li .node.saving .save-form > div:not(.autocomplete-result) a {\n              padding: 5px 10px;\n              border-radius: 6px;\n              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n              background-color: #ffffff; }\n              .workflow-makr-org li .node.saving .save-form > div:not(.autocomplete-result) a[data-update-transition], .workflow-makr-org li .node.saving .save-form > div:not(.autocomplete-result) a[data-create-transition] {\n                background-color: #22659c;\n                margin-right: 5px;\n                color: #ffffff; }\n              .workflow-makr-org li .node.saving .save-form > div:not(.autocomplete-result) a:hover {\n                cursor: pointer;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.42); }\n      .workflow-makr-org li .node.to-delete .status {\n        display: none; }\n      .workflow-makr-org li .node.to-delete .edit-btn,\n      .workflow-makr-org li .node.to-delete .add-btn,\n      .workflow-makr-org li .node.to-delete .delete-btn,\n      .workflow-makr-org li .node.to-delete + ul li .node:not(.end) .edit-btn,\n      .workflow-makr-org li .node.to-delete + ul li .node:not(.end) .add-btn,\n      .workflow-makr-org li .node.to-delete + ul li .node:not(.end) .delete-btn {\n        display: none; }\n      .workflow-makr-org li .node.to-delete .delete-confirmation {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        text-align: center; }\n        .workflow-makr-org li .node.to-delete .delete-confirmation > div {\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n          align-items: center; }\n        .workflow-makr-org li .node.to-delete .delete-confirmation p {\n          font-size: 12px;\n          font-weight: 600;\n          margin-bottom: 5px; }\n        .workflow-makr-org li .node.to-delete .delete-confirmation a {\n          padding: 5px 10px;\n          border-radius: 6px;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          background-color: #ffffff; }\n          .workflow-makr-org li .node.to-delete .delete-confirmation a[data-delete-transition] {\n            background-color: #dc3545;\n            margin-right: 5px;\n            color: #ffffff; }\n          .workflow-makr-org li .node.to-delete .delete-confirmation a:hover {\n            cursor: pointer;\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.42); }\n  .workflow-makr-org > ul > li:before {\n    border: 0 none !important; }\n\n#loading-workflow-makr,\n#deleting-transition-loader,\n#saving-transition-loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  min-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: #22659c;\n  transition: opacity 0.45s ease-in-out;\n  z-index: 999; }\n\n#deleting-transition-loader,\n#saving-transition-loader {\n  background-color: rgba(34, 101, 156, 0.3); }\n\n.loader {\n  height: 32px;\n  width: 32px;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto; }\n  .loader span {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px; }\n  .loader span::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px;\n    border: 3px solid #FFF;\n    border-bottom: 3px solid transparent;\n    border-radius: 50%;\n    -webkit-animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n    animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }\n  .loader span::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 6px;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    width: 6px;\n    height: 6px;\n    background: transparent;\n    border-radius: 50%;\n    -webkit-animation: loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n    animation: loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }\n\n@-webkit-keyframes loader-1 {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  40% {\n    -webkit-transform: rotate(180deg); }\n  60% {\n    -webkit-transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loader-1 {\n  0% {\n    transform: rotate(0deg); }\n  40% {\n    transform: rotate(180deg); }\n  60% {\n    transform: rotate(180deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes loader-2 {\n  0% {\n    -webkit-transform: translate3d(0, -32px, 0) scale(0, 2);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1.25, 1.25);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 8px, 0) scale(0, 0);\n    opacity: 0; } }\n\n@keyframes loader-2 {\n  0% {\n    transform: translate3d(0, -32px, 0) scale(0, 2);\n    opacity: 0; }\n  50% {\n    transform: translate3d(0, 0, 0) scale(1.25, 1.25);\n    opacity: 1; }\n  100% {\n    transform: translate3d(0, 8px, 0) scale(0, 0);\n    opacity: 0; } }\n\n@keyframes fadeInUp {\n  from {\n    transform: translate3d(0, -40px, 0); }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    transform: translate3d(0, -40px, 0); }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n.toastify {\n  font-family: 'Lato', sans-serif; }\n  .toastify ul {\n    list-style: none;\n    padding: 0; }\n    .toastify ul li {\n      list-style: none; }\n\n.autocomplete-container {\n  position: relative; }\n  .autocomplete-container input {\n    height: 26px; }\n  .autocomplete-container .loader {\n    visibility: hidden;\n    opacity: 0;\n    width: 20px;\n    height: 20px;\n    top: 0;\n    right: 12px;\n    left: unset;\n    bottom: unset; }\n    .autocomplete-container .loader > span {\n      height: 20px;\n      width: 20px; }\n      .autocomplete-container .loader > span:before {\n        height: 20px;\n        width: 20px;\n        border: 3px solid #8bbde6;\n        border-bottom: 3px solid transparent; }\n      .autocomplete-container .loader > span:after {\n        width: 4px;\n        height: 4px;\n        background: transparent; }\n  .autocomplete-container.loading .loader {\n    visibility: visible;\n    opacity: 1; }\n\n.autocomplete,\n.autocomplete-result {\n  box-sizing: border-box; }\n\n.autocomplete-result {\n  display: none;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-top: 0;\n  position: absolute;\n  overflow: auto;\n  max-height: 93px;\n  background: #fff;\n  width: 100%;\n  top: 27px;\n  z-index: 3; }\n  .autocomplete-result p {\n    padding: 5px 10px;\n    margin: 0;\n    text-align: left;\n    color: #000; }\n    .autocomplete-result p:nth-child(2n+1) {\n      background: #f6f6f6; }\n    .autocomplete-result p:hover {\n      cursor: pointer;\n      background: #e5e5e5; }\n";
    n(css,{});

    var css$1 = "/*!\n * Toastify js 1.9.3\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: fit-content;\n    }\n}\n";
    n(css$1,{});

    // Main container
    const container =
      '<div id="workflow-makr-chart-container"></div>';

    // Page loader
    const loader =
      '<div id="loading-workflow-makr"><div class="loader"><span></span></div></div>';

    // Deleting a transition loader
    const deletingLoader =
      '<div id="deleting-transition-loader"><div class="loader"><span></span></div></div>';

    // Saving a transition loader
    const savingLoader =
    '<div id="saving-transition-loader"><div class="loader"><span></span></div></div>';

    // Base 64 add icon
    const addIcon =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9ElEQVQ4jaWSO2hTYRzFz3dThz6GEiyIaIgSb4IUoUOpGEI6pU2Mdqxg3SwU8bFYx+CgiyBiFmnRQeGGZmhpBRMfZLBDljwoWAht77WpEEQlUVDz7j0OljxKykU84/nO9+N//t8H/KdER/fYmBl9pnHowg4AkLiBn5U3yMXyRkAJdt/M2NXA73BklRlthxlth+HIKsen7/6CwzsNQDrwcv/I5PJc+DV1XSdJJpNJJhIJkqSu65xbiLL/7ORiZ4jdNxN88ZKtCoVCVBSlzXv8fIV7k+yNDAA214B7ZOjh9Sm/UUXcuHIB7uGhR5BHDzcBh/q8U35XjxCdd9oqIQQu+129MPV4AaALAKCbTp22WZBOpxGPxxvhVCoFkigUCg3P6XTCcfI4oEtyEwCKWr2OowNmyLLcCOdyOQBo88xmM75//gGAogkQVNcy23APX4TVam2E8/k8SMLj8bTVWH6/Bkhis7mDWj3ybClWqlRrhjsoV6p4uviuiNputAnQ3n79sPHxTiCoGAICQQXrW9nbUKPf9p9JXWcmVm7dn2exVCZJappGVVVJksVSmTfvzdM0OLGElo+0/90kOPzX5BOWB5d857oHbRYAwLr6CQuReGkzm51FJvIEgH4Q4K+so0fQ3XseFDYAAHe3UK2+wnbsi2HHf9UfUvbrs4JlrH0AAAAASUVORK5CYII=';

    // Base 64 edit icon
    const editIcon =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1ElEQVQ4jZWTTUiUURSGn/PNzx2SmEqNUhQKwS9y0KxAghZKKEPECLmthZUU0WJmEahbFxHkQIH9YJs2tRByoBoUaShXQUQlgeWYM5gQCrX1jjm3xdRM8zlf1Lu6HM5z73nvOUdwyo6EsDgPdIM0FIJmGZgmzzjzibk/06V4agorlIpjuFgWL5dBuIPWUdJJXbqgKazwB5JgOl1AhyRFbj1MOqktAJSK/zsMYDpRarRQgR0JYck7t7IDykfs7Cka91QzcneCL6vfS3byptXDbnsYpMMNHhro4+TxNiInjlHlF57Mvi36wJKcF+h2gydvDrLwOcOL1/MAZFe+OpyYHqvUqq1weinD4ZDN9qoAT1++If5wxpEpDZYTVn4fiVuDLC5laW+xef8pQ33tDq6NP2Zdb2yp1Po1JEVd7e/lWeoVh1qamVvIUlcTpC92g9yPfAWjZtkLTAP271BHazP762u4NzFD19EDnI66wYDIlIdqewWR4vTtrd1JcJuftdU1rlx/wIYbDAYjFwq9P9g7huGSW2bl1xnjw+TlwidqHQVJ/Qf+HK1jAB4AvqU3Ce57hNe7CzjC35fpNuI7w8dEjoqJdiSER85hTE/ZOotMsWnuO9f5J1WVkw2yAfLvAAAAAElFTkSuQmCC';

    // Base 64 delete icon
    const deleteIcon =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACD0lEQVQ4T42TTWsTURSG3zMTJ8Quou0PEKlx60fozSQVqaEU8zdctIIbwUX6QaHQTT9BEPsF/o5qqTK17QyTKoorbaL4B9rUhVTSmTlybzJxJo3i3d1z7/vcc95zLqFjOaZ5W/f9MSYqBsAVeaz5/nfo+htiXhMHBx+jEgo377LZi76uPwPwoBMaEzBveInE44LjnMq4ArTErwDc+Zc4PGPgbaDr9yVEAVwhXoQv942M4NiywI1GjKUlk7hcLOJoczOMr+cqlYcka9aC4L2MSnH/7CxObBvVcrkN0QwDmeVlpIVAbWoKx9vbCkLMt6gyMLDORKMqYBi4Pj+PdKGAH7aNw3JZ1ZhZWkI6l0N9Zwe1yUmw54VZrJIrRBXAtTASgzgOQIS0aaK+u4va+HhUDAa+kCNEQwMuxJyWmSwsIJ3Pq/DJ3h6qUnx2FvMlABpdAarmxUX1sgLs7zcBHcYqgJvNHkLXMyFaiVs1S6FclwYHu0KY6LP0YA3AmJq4ZLIpFqJZ88SE8iAzN9cVQszPZRduMtEH1cZSCf0zM+fclsaGkK/T0zja2lKZMdENNUjRVvYOD6MuB+lPq5o9Nwz0Dg1FxSum6z5SADufT2m+/5KAu/8zysRs/ezpKd2zrF/tzyQhCc97Gg7V30BMtHKaSj2R4vZnil5ueTLKQJGBq+oS0TctCF4HmrZhuu6n6P3fcCns3XprXkoAAAAASUVORK5CYII=';

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    /*!
     * Toastify js 1.9.3
     * https://github.com/apvarun/toastify-js
     * @license MIT licensed
     *
     * Copyright (C) 2018 Varun A P
     */

    var toastify = createCommonjsModule(function (module) {
    (function(root, factory) {
      if ( module.exports) {
        module.exports = factory();
      } else {
        root.Toastify = factory();
      }
    })(commonjsGlobal, function(global) {
      // Object initialization
      var Toastify = function(options) {
          // Returning a new init object
          return new Toastify.lib.init(options);
        },
        // Library version
        version = "1.9.3";

      // Defining the prototype of the object
      Toastify.lib = Toastify.prototype = {
        toastify: version,

        constructor: Toastify,

        // Initializing the object with required parameters
        init: function(options) {
          // Verifying and validating the input object
          if (!options) {
            options = {};
          }

          // Creating the options object
          this.options = {};

          this.toastElement = null;

          // Validating the options
          this.options.text = options.text || "Hi there!"; // Display message
          this.options.node = options.node; // Display content as node
          this.options.duration = options.duration === 0 ? 0 : options.duration || 3000; // Display duration
          this.options.selector = options.selector; // Parent selector
          this.options.callback = options.callback || function() {}; // Callback after display
          this.options.destination = options.destination; // On-click destination
          this.options.newWindow = options.newWindow || false; // Open destination in new window
          this.options.close = options.close || false; // Show toast close icon
          this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : "toastify-top"; // toast position - top or bottom
          this.options.positionLeft = options.positionLeft || false; // toast position - left or right
          this.options.position = options.position || ''; // toast position - left or right
          this.options.backgroundColor = options.backgroundColor; // toast background color
          this.options.avatar = options.avatar || ""; // img element src - url or a path
          this.options.className = options.className || ""; // additional class names for the toast
          this.options.stopOnFocus = options.stopOnFocus === undefined? true: options.stopOnFocus; // stop timeout on focus
          this.options.onClick = options.onClick; // Callback after click

          this.options.offset = options.offset || { x: 0, y: 0 }; // toast offset

          // Returning the current object for chaining functions
          return this;
        },

        // Building the DOM element
        buildToast: function() {
          // Validating if the options are defined
          if (!this.options) {
            throw "Toastify is not initialized";
          }

          // Creating the DOM object
          var divElement = document.createElement("div");
          divElement.className = "toastify on " + this.options.className;

          // Positioning toast to left or right or center
          if (!!this.options.position) {
            divElement.className += " toastify-" + this.options.position;
          } else {
            // To be depreciated in further versions
            if (this.options.positionLeft === true) {
              divElement.className += " toastify-left";
              console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.');
            } else {
              // Default position
              divElement.className += " toastify-right";
            }
          }

          // Assigning gravity of element
          divElement.className += " " + this.options.gravity;

          if (this.options.backgroundColor) {
            divElement.style.background = this.options.backgroundColor;
          }

          // Adding the toast message/node
          if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
            // If we have a valid node, we insert it
            divElement.appendChild(this.options.node);
          } else {
            divElement.innerHTML = this.options.text;

            if (this.options.avatar !== "") {
              var avatarElement = document.createElement("img");
              avatarElement.src = this.options.avatar;

              avatarElement.className = "toastify-avatar";

              if (this.options.position == "left" || this.options.positionLeft === true) {
                // Adding close icon on the left of content
                divElement.appendChild(avatarElement);
              } else {
                // Adding close icon on the right of content
                divElement.insertAdjacentElement("afterbegin", avatarElement);
              }
            }
          }

          // Adding a close icon to the toast
          if (this.options.close === true) {
            // Create a span for close element
            var closeElement = document.createElement("span");
            closeElement.innerHTML = "&#10006;";

            closeElement.className = "toast-close";

            // Triggering the removal of toast from DOM on close click
            closeElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                this.removeElement(this.toastElement);
                window.clearTimeout(this.toastElement.timeOutValue);
              }.bind(this)
            );

            //Calculating screen width
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

            // Adding the close icon to the toast element
            // Display on the right if screen width is less than or equal to 360px
            if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
              // Adding close icon on the left of content
              divElement.insertAdjacentElement("afterbegin", closeElement);
            } else {
              // Adding close icon on the right of content
              divElement.appendChild(closeElement);
            }
          }

          // Clear timeout while toast is focused
          if (this.options.stopOnFocus && this.options.duration > 0) {
            var self = this;
            // stop countdown
            divElement.addEventListener(
              "mouseover",
              function(event) {
                window.clearTimeout(divElement.timeOutValue);
              }
            );
            // add back the timeout
            divElement.addEventListener(
              "mouseleave",
              function() {
                divElement.timeOutValue = window.setTimeout(
                  function() {
                    // Remove the toast from DOM
                    self.removeElement(divElement);
                  },
                  self.options.duration
                );
              }
            );
          }
          
          // Adding an on-click destination path
          if (typeof this.options.destination !== "undefined") {
            divElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                if (this.options.newWindow === true) {
                  window.open(this.options.destination, "_blank");
                } else {
                  window.location = this.options.destination;
                }
              }.bind(this)
            );
          }

          if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
            divElement.addEventListener(
              "click",
              function(event) {
                event.stopPropagation();
                this.options.onClick();            
              }.bind(this)
            );
          }

          // Adding offset
          if(typeof this.options.offset === "object") {

            var x = getAxisOffsetAValue("x", this.options);
            var y = getAxisOffsetAValue("y", this.options);
            
            var xOffset = this.options.position == "left" ? x : "-" + x;
            var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

            divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

          }

          // Returning the generated element
          return divElement;
        },

        // Displaying the toast
        showToast: function() {
          // Creating the DOM object for the toast
          this.toastElement = this.buildToast();

          // Getting the root element to with the toast needs to be added
          var rootElement;
          if (typeof this.options.selector === "undefined") {
            rootElement = document.body;
          } else {
            rootElement = document.getElementById(this.options.selector);
          }

          // Validating if root element is present in DOM
          if (!rootElement) {
            throw "Root element is not defined";
          }

          // Adding the DOM element
          rootElement.insertBefore(this.toastElement, rootElement.firstChild);

          // Repositioning the toasts in case multiple toasts are present
          Toastify.reposition();

          if (this.options.duration > 0) {
            this.toastElement.timeOutValue = window.setTimeout(
              function() {
                // Remove the toast from DOM
                this.removeElement(this.toastElement);
              }.bind(this),
              this.options.duration
            ); // Binding `this` for function invocation
          }

          // Supporting function chaining
          return this;
        },

        hideToast: function() {
          if (this.toastElement.timeOutValue) {
            clearTimeout(this.toastElement.timeOutValue);
          }
          this.removeElement(this.toastElement);
        },

        // Removing the element from the DOM
        removeElement: function(toastElement) {
          // Hiding the element
          // toastElement.classList.remove("on");
          toastElement.className = toastElement.className.replace(" on", "");

          // Removing the element from DOM after transition end
          window.setTimeout(
            function() {
              // remove options node if any
              if (this.options.node && this.options.node.parentNode) {
                this.options.node.parentNode.removeChild(this.options.node);
              }

              // Remove the elemenf from the DOM, only when the parent node was not removed before.
              if (toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
              }

              // Calling the callback function
              this.options.callback.call(toastElement);

              // Repositioning the toasts again
              Toastify.reposition();
            }.bind(this),
            400
          ); // Binding `this` for function invocation
        },
      };

      // Positioning the toasts on the DOM
      Toastify.reposition = function() {

        // Top margins with gravity
        var topLeftOffsetSize = {
          top: 15,
          bottom: 15,
        };
        var topRightOffsetSize = {
          top: 15,
          bottom: 15,
        };
        var offsetSize = {
          top: 15,
          bottom: 15,
        };

        // Get all toast messages on the DOM
        var allToasts = document.getElementsByClassName("toastify");

        var classUsed;

        // Modifying the position of each toast element
        for (var i = 0; i < allToasts.length; i++) {
          // Getting the applied gravity
          if (containsClass(allToasts[i], "toastify-top") === true) {
            classUsed = "toastify-top";
          } else {
            classUsed = "toastify-bottom";
          }

          var height = allToasts[i].offsetHeight;
          classUsed = classUsed.substr(9, classUsed.length-1);
          // Spacing between toasts
          var offset = 15;

          var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

          // Show toast in center if screen with less than or qual to 360px
          if (width <= 360) {
            // Setting the position
            allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

            offsetSize[classUsed] += height + offset;
          } else {
            if (containsClass(allToasts[i], "toastify-left") === true) {
              // Setting the position
              allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

              topLeftOffsetSize[classUsed] += height + offset;
            } else {
              // Setting the position
              allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

              topRightOffsetSize[classUsed] += height + offset;
            }
          }
        }

        // Supporting function chaining
        return this;
      };

      // Helper function to get offset.
      function getAxisOffsetAValue(axis, options) {

        if(options.offset[axis]) {
          if(isNaN(options.offset[axis])) {
            return options.offset[axis];
          }
          else {
            return options.offset[axis] + 'px';
          }
        }

        return '0px';

      }

      function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") {
          return false;
        } else if (
          elem.className &&
          elem.className
            .trim()
            .split(/\s+/gi)
            .indexOf(yourClass) > -1
        ) {
          return true;
        } else {
          return false;
        }
      }

      // Setting up the prototype for the init object
      Toastify.lib.init.prototype = Toastify.lib;

      // Returning the Toastify function to be assigned to the window object/module
      return Toastify;
    });
    });

    // Styles

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
    };

    // The scenario objects
    let s = {};
    let levels = {};
    let c = {};

    // Autocomplete helper
    let acl = false;

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
    };

    // Main container selector
    let mainSelector = undefined;

    /**
     * Initialize the workflow makr ui
     * @param {*} config The workflow makr ui configuration
     */
    function init(config) {
        c = config;
        parseConfig(config);
        mainSelector = config.selector;

        // Initialize workflow makr ui container
        document.querySelector(mainSelector).innerHTML = container;
        document.querySelector('#workflow-makr-chart-container').innerHTML = loader;
        dd('Initializing the workflow makr ui...');

        // Load scenario data
        loadScenario();

        // Attach event listeners
        attachEventListeners();
    }

    /**
     * Load the scenario data and show it
     */
    function loadScenario() {
        var xhr = new XMLHttpRequest();
        dd('Loading scenario...');
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return
            if (this.status == 200) {
                s = JSON.parse(this.responseText);

                // Show org chart
                const loader = document.querySelector('#workflow-makr-chart-container #loading-workflow-makr');
                if (loader)
                    loader.style.opacity = 0;
                setTimeout(() => {
                    dd('Printing scenario...');
                    showScenario(parseTransitions(s.transitions));
                    reCalculateContainerWidth();
                }, 500);
            } else if (this.status == 404) {
                toast(toastColors.danger, dictionnary.messages.transitions.notFound);
            } else if (this.status == 500) {
                toast(toastColors.danger, dictionnary.messages.server.internalError);
            } else {
                toast(toastColors.danger, dictionnary.messages.server.notResponding);
            }
        };
        xhr.open('GET', c.path + '/workflowmakr/scenarios/' + c.scenario_id, true);
        xhr.setRequestHeader('accept', 'application/json');
        if (c.request_headers) {
            Object.keys(c.request_headers).forEach(function (key) {
                xhr.setRequestHeader(key, c.request_headers[key]);
            });
        }
        xhr.send();
    }

    /**
     * Attach different events listeners
     */
    function attachEventListeners() {
        document.addEventListener('click', function (e) {
            const target = e.target;
            // Adding a transition
            if (target.classList.contains('add-btn')) {
                createEventListener(target);
            }
            if (target.getAttribute('data-create-transition')) {
                confirmCreateTransition(target);
            }
            if (target.getAttribute('data-cancel-create-transition')) {
                cancelCreateTransition();
            }
            // Updating a transition
            if (target.classList.contains('edit-btn')) {
                editEventListener(target);
            }
            if (target.getAttribute('data-cancel-update-transition')) {
                cancelEditTransition(target);
            }
            if (target.getAttribute('data-update-transition')) {
                confirmEditTransition(target);
            }
            // Deleting a transition
            if (target.classList.contains('delete-btn')) {
                deleteEventListener(target);
            }
            if (target.getAttribute('data-cancel-delete-transition')) {
                cancelDeleteTransition(target);
            }
            if (target.getAttribute('data-delete-transition')) {
                confirmDeleteTransition(target);
            }
        });
        // Autocomplete listeners
        document.addEventListener('keyup', function (e) {
            const target = e.target;
            if (target.classList.contains('autocomplete')) {
                autocompleteListener(target);
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
        html += '<li data-transition="' + null + '">';
        html += '<div class="node start" data-transition="' + null + '">';
        html += '<img src="' + addIcon + '" data-transition-id="' + null + '" class="add-btn" title="' + dictionnary.transitions.add + '"/>';
        html += '</div>';
        html += '<ul data-parent="' + null + '">';
        transitions.forEach(transition => html += showNode(transition));
        html += '</ul>';
        html += '</li>';
        html += '</ul>';
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
        document.querySelector('#workflow-makr-chart-container').style.minWidth = (max == 0 ? '100%': max * (200 * 1.8) + 'px');
    }

    /**
     * Event listener for the event "click" on transition delete button
     * @param element The element clicked
     */
    function deleteEventListener(element) {
        const transitionId = +element.getAttribute("data-transition-id");
        cancelCreateTransition();
        document.querySelector('.node[data-transition="' + transitionId + '"]').classList.add('to-delete');
    }

    /**
     * Event listener for the event "click" on cancel delete a transition
     * @param element The element clicked
     */
    function cancelDeleteTransition(element) {
        document.querySelector('.node[data-transition="' + element.getAttribute('data-cancel-delete-transition') + '"]').classList.remove('to-delete');
    }

    /**
     * Event listener for the event "click" on add a transition
     * @param element The element clicked
     */
    function createEventListener(element) {
        cancelCreateTransition();
        const transitionId = element.getAttribute('data-transition-id');
        const transition = transitionId ? findTransition(s.transitions, element.getAttribute('data-transition-id')) : null;
        const node = document.querySelector('li[data-transition="' + transitionId + '"]');
        let nodeChildren = document.querySelector('ul[data-parent="' + transitionId + '"]');
        if (!nodeChildren) {
            node.insertAdjacentHTML('beforeend', '<ul data-parent="' + transitionId + '"></ul>');
            nodeChildren = document.querySelector('ul[data-parent="' + transitionId + '"]');
        }
        let newNode = '';
        newNode += '<li class="to-create">';
        newNode += '<div class="node saving">';
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
        </form>';
        newNode += '</div>';
        newNode += '</li>';
        nodeChildren.insertAdjacentHTML('afterbegin', newNode);
        reCalculateContainerWidth();
    }

    /**
     * Event listener for the event "click" on confirm create a transition
     * @param element The element clicked
     */
    function confirmCreateTransition(element) {
        document.querySelector('#workflow-makr-chart-container').insertAdjacentHTML('beforeend', savingLoader);
        var xhr = new XMLHttpRequest();
        dd('Creating transition...');
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return
            if (this.status == 200) {
                loadScenario();
                toast(toastColors.success, dictionnary.messages.scenario.updated);
            }
            if (this.status == 404) {
                console.error('Failed creating transition...');
                console.error("Error", this.status, this.statusText);
            }
            if (this.status == 422) {
                console.error('Failed creating transition...');
                console.error("Error", this.status, this.statusText);
                const body = JSON.parse(this.responseText).messages;
                let messages = "<p>";
                if (body.new_status) {
                    body.new_status.forEach(item => messages += item + "<br />");
                }
                if (body.action) {
                    body.action.forEach(item => messages += item + "<br />");
                }
                if (body.old_status) {
                    body.old_status.forEach(item => messages += item + "<br />");
                }
                if (body.predecessor_id) {
                    body.predecessor_id.forEach(item => messages += item + "<br />");
                }
                if (body.scenario_id) {
                    body.scenario_id.forEach(item => messages += item + "<br />");
                }
                messages += "</p>";
                toast(toastColors.warning, messages);
                document.querySelector('#saving-transition-loader').remove();
            }
        };
        xhr.open('POST', c.path + '/workflowmakr/transitions', true);
        xhr.setRequestHeader('accept', 'application/json');
        if (c.request_headers) {
            Object.keys(c.request_headers).forEach(function (key) {
                xhr.setRequestHeader(key, c.request_headers[key]);
            });
        }
        const actionSelector = 'li.to-create .node.saving .save-form input#transition-action-to-create';
        const newStatusSelector = 'li.to-create .node.saving .save-form input#transition-new-status-to-create';
        const transitionId = element.getAttribute('data-create-transition');
        const transition = transitionId ? findTransition(s.transitions, transitionId) : null;
        xhr.send(JSON.stringify({
            action: document.querySelector(actionSelector).value,
            old_status: transition ? transition.new_status.designation : null,
            new_status: document.querySelector(newStatusSelector).value,
            predecessor_id: transition ? transition.id : null,
            scenario_id: s.id
        }));
    }

    /**
     * Event listener for the event "click" on cancel create a transition
     */
    function cancelCreateTransition() {
        let elements = document.querySelector('#workflow-makr-org-container li.to-create');
        if (elements) {
            elements.remove();
        }
        elements = document.querySelector('#workflow-makr-org-container ul:empty');
        if (elements) {
            elements.remove();
        }
        elements = document.querySelector('.node.to-delete');
        if (elements)
            elements.classList.remove('to-delete');
        elements = document.querySelector('.node.saving');
        if (elements)
            elements.classList.remove('saving');
        reCalculateContainerWidth();
    }

    /**
     * Event listener for the event "click" on transition edit button
     * @param element The element clicked
     */
    function editEventListener(element) {
        const transitionId = +element.getAttribute("data-transition-id");
        cancelCreateTransition();
        document.querySelector('.node[data-transition="' + transitionId + '"]').classList.add('saving');
    }

    /**
     * Event listener for the event "click" on cancel update a transition
     * @param element The element clicked
     */
    function cancelEditTransition(element) {
        document.querySelector('.node[data-transition="' + element.getAttribute('data-cancel-update-transition') + '"]').classList.remove('saving');
        document.querySelector('.node[data-transition="' + element.getAttribute('data-cancel-update-transition') + '"] form.save-form').reset();
        document.querySelector('.node[data-transition="' + element.getAttribute('data-cancel-update-transition') + '"] .autocomplete-container').classList.remove('loading');
    }

    /**
     * Event listener for the event "click" on confirm update a transition
     * @param element The element clicked
     */
    function confirmEditTransition(element) {
        document.querySelector('#workflow-makr-chart-container').insertAdjacentHTML('beforeend', savingLoader);
        var xhr = new XMLHttpRequest();
        dd('Updating transition...');
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return
            if (this.status == 200) {
                loadScenario();
                toast(toastColors.success, dictionnary.messages.scenario.updated);
            }
            if (this.status == 404) {
                console.error('Failed updating transition...');
                console.error("Error", this.status, this.statusText);
            }
            if (this.status == 422) {
                console.error('Failed updating transition...');
                console.error("Error", this.status, this.statusText);
                const body = JSON.parse(this.responseText).messages;
                let messages = "<p>";
                if (body.new_status) {
                    body.new_status.forEach(item => messages += item + "<br />");
                }
                if (body.action) {
                    body.action.forEach(item => messages += item + "<br />");
                }
                if (body.old_status) {
                    body.old_status.forEach(item => messages += item + "<br />");
                }
                if (body.predecessor_id) {
                    body.predecessor_id.forEach(item => messages += item + "<br />");
                }
                messages += "</p>";
                toast(toastColors.warning, messages);
                document.querySelector('#saving-transition-loader').remove();
            }
        };
        xhr.open('PUT', c.path + '/workflowmakr/transitions/' + element.getAttribute('data-update-transition'), true);
        xhr.setRequestHeader('accept', 'application/json');
        if (c.request_headers) {
            Object.keys(c.request_headers).forEach(function (key) {
                xhr.setRequestHeader(key, c.request_headers[key]);
            });
        }
        const actionSelector = '.node[data-transition="' + element.getAttribute('data-update-transition') + '"] .save-form input#transition-action-' + element.getAttribute('data-update-transition');
        const newStatusSelector = '.node[data-transition="' + element.getAttribute('data-update-transition') + '"] .save-form input#transition-new-status-' + element.getAttribute('data-update-transition');
        const transition = findTransition(s.transitions, +element.getAttribute('data-update-transition'));
        xhr.send(JSON.stringify({
            action: document.querySelector(actionSelector).value,
            old_status: (transition.old_status) ? transition.old_status.designation : null,
            new_status: document.querySelector(newStatusSelector).value,
            predecessor_id: transition.predecessor_id
        }));
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
     * Event listener for the event "click" on confirm delete a transition
     * @param element The element clicked
     */
    function confirmDeleteTransition(element) {
        document.querySelector('#workflow-makr-chart-container').insertAdjacentHTML('beforeend', deletingLoader);
        var xhr = new XMLHttpRequest();
        dd('Deleting transition...');
        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return
            if (this.status == 200) {
                loadScenario();
                toast(toastColors.success, dictionnary.messages.scenario.updated);
            }
            if (this.status == 404) {
                console.error('Failed deleting transition...');
                console.error("Error", this.status, this.statusText);
            }
            if (this.status == 422) {
                console.error('Failed deleting transition...');
                console.error("Error", this.status, this.statusText);
                toast(toastColors.warning, dictionnary.messages.transitions.delete.alreadyUsed);
                document.querySelector('#deleting-transition-loader').remove();
            }
        };
        xhr.open('DELETE', c.path + '/workflowmakr/transitions/' + element.getAttribute('data-delete-transition'), true);
        xhr.setRequestHeader('accept', 'application/json');
        if (c.request_headers) {
            Object.keys(c.request_headers).forEach(function (key) {
                xhr.setRequestHeader(key, c.request_headers[key]);
            });
        }
        xhr.send();
    }

    /**
     * Event fired on "keyup", "change" and "focus" events on autocomplete elements
     * @param autocomplete The autocomplete element
     */
    function autocompleteListener(autocomplete) {
        if (!acl) {
            acl = true;
            const container = autocomplete.closest('.autocomplete-container');
            container.classList.add('loading');
            setTimeout(function () {
                if (autocomplete.closest('.node').classList.contains('saving')) {
                    const autocompleteContainer = document.querySelector(autocomplete.getAttribute('data-target'));
                    if (!autocomplete.value) {
                        container.classList.remove('loading');
                        acl = false;
                        autocompleteClearAndHide(autocompleteContainer);
                        return
                    }
                    var xhr = new XMLHttpRequest();
                    dd('Loading autocomplete data...');
                    xhr.onreadystatechange = function () {
                        container.classList.remove('loading');
                        acl = false;
                        if (this.readyState != 4) return
                        if (this.status == 200) {
                            const autocompleteRejex = new RegExp("^" + autocomplete.value, "i");
                            let verified = false;
                            let fragment = document.createDocumentFragment();
                            const db = JSON.parse(this.responseText).data.map(item => item.designation);
                            for (let i = 0; i < db.length; i++) {
                                if (autocompleteRejex.test(db[i])) {
                                    verified = true;
                                    const element = document.createElement("p");
                                    element.innerText = db[i];
                                    element.setAttribute("onclick", "const autocomplete = document.querySelector('[data-target=\"" + autocomplete.getAttribute('data-target') + "\"]'); const autocompleteContainer = document.querySelector(autocomplete.getAttribute('data-target'));    autocomplete.value = this.innerText; autocompleteContainer.innerHTML = '';  autocompleteContainer.style.display = 'none';");
                                    fragment.appendChild(element);
                                }
                            }
                            if (verified == true) {
                                autocompleteContainer.innerHTML = "";
                                autocompleteContainer.style.display = "block";
                                autocompleteContainer.appendChild(fragment);
                                return
                            }
                            autocompleteClearAndHide(autocompleteContainer);
                        } else if (this.status == 500) {
                            toast(toastColors.danger, dictionnary.messages.server.internalError);
                        } else {
                            toast(toastColors.danger, dictionnary.messages.server.notResponding);
                        }
                    };
                    xhr.open('GET', c.path + '/workflowmakr/' + autocomplete.getAttribute('data-target-model') + '?q=' + autocomplete.value, true);
                    xhr.setRequestHeader('accept', 'application/json');
                    if (c.request_headers) {
                        Object.keys(c.request_headers).forEach(function (key) {
                            xhr.setRequestHeader(key, c.request_headers[key]);
                        });
                    }
                    xhr.send();
                }
            }, 300);
        }
    }

    /**
     * Clear the autocomplete container and hide it
     * @param autocompleteContainer The autocomplete element
     */
    function autocompleteClearAndHide(autocompleteContainer) {
        autocompleteContainer.innerHTML = "";
        autocompleteContainer.style.display = "none";
    }

    /**
     * Add a single node to scenario org chart html
     * @param object transition The transition object to show
     * 
     * @return The node html
     */
    function showNode(transition) {
        let node = '';
        node += '<li data-transition="' + transition.id + '">';
        node += '<div class="node" data-transition="' + transition.id + '">';
        node += '<img src="' + editIcon + '" data-transition-id="' + transition.id + '" class="edit-btn" title="' + dictionnary.transitions.edit + '" />';
        node += '<img src="' + deleteIcon + '" data-transition-id="' + transition.id + '" class="delete-btn" title="' + dictionnary.transitions.delete + '" />';
        node += '<div class="action" ' + (transition.action.designation.length > 15 ? 'title = "' + transition.action.designation + '"' : '') + '>' + transition.action.designation + '</div>';
        node += '<div class="status" ' + (transition.new_status.designation.length > 15 ? 'title = "' + transition.new_status.designation + '"' : '') + '>' + transition.new_status.designation + '</div>';
        node += '<img src="' + addIcon + '" data-transition-id="' + transition.id + '" class="add-btn" title="' + dictionnary.transitions.add + '" />';
        node +=
            '<div class="delete-confirmation">\
            <p>' + dictionnary.transitions.deleteConfirmation.title + '</p>\
            <div>\
                <a data-delete-transition="' + transition.id + '">' + dictionnary.transitions.deleteConfirmation.deleteBtn + '</a>\
                <a data-cancel-delete-transition="' + transition.id + '">' + dictionnary.transitions.deleteConfirmation.cancelBtn + '</a>\
            </div>\
        </div>';
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
        </form>';
        node += '</div>';
        if (transition.transitions && transition.transitions.length) {
            node += '<ul data-parent="' + transition.id + '">';
            transition.transitions.forEach(t => {
                node += showNode(t);
            });
            node += '</ul>';
        }
        node += '</li>';
        return node
    }

    /**
     * Parse the configuration passed to the workflow makr ui init function
     * @param {*} config The workflow makr ui configuration
     */
    function parseConfig(config) {
        if (config.i18n) {
            dictionnary = config.i18n;
        }
        if (config.toast_time_out) {
            c.toast_time_out = config.toast_time_out;
        } else {
            c.toast_time_out = 9000;
        }
    }

    /**
     * Console a message if debug is enabled
     * @param string msg The message to show in console
     */
    function dd(msg) {
        if (c && c.debug) {
            console.log(msg);
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
        };
        toastify(config).showToast();
    }

    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
