var n=[],o=[];!function(t,r){if(t&&"undefined"!=typeof document){var e,i=!0===r.prepend?"prepend":"append",a=!0===r.singleTag,l="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(a){var s=n.indexOf(l);-1===s&&(s=n.push(l)-1,o[s]={}),e=o[s]&&o[s][i]?o[s][i]:o[s][i]=d()}else e=d();65279===t.charCodeAt(0)&&(t=t.substring(1)),e.styleSheet?e.styleSheet.cssText+=t:e.appendChild(document.createTextNode(t))}function d(){var n=document.createElement("style");if(n.setAttribute("type","text/css"),r.attributes)for(var o=Object.keys(r.attributes),t=0;t<o.length;t++)n.setAttribute(o[t],r.attributes[o[t]]);var e="prepend"===i?"afterbegin":"beforeend";return l.insertAdjacentElement(e,n),n}}("@import url(\"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap\");\n#workflow-makr-chart-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #efefef;\n  overflow: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start; }\n\n* {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background: #22659c; }\n\n.workflow-makr-org {\n  display: flex;\n  justify-content: center;\n  font-family: 'Lato', sans-serif; }\n  .workflow-makr-org ul {\n    padding-top: 20px;\n    position: relative;\n    transition: all 0.5s; }\n    .workflow-makr-org ul ul::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 50%;\n      border-left: 1px solid #ccc;\n      width: 50%;\n      height: 20px; }\n  .workflow-makr-org li {\n    float: left;\n    text-align: center;\n    list-style-type: none;\n    position: relative;\n    padding: 20px 10px;\n    transition: all 0.5s; }\n    .workflow-makr-org li.end {\n      float: none;\n      margin: 0 auto; }\n    .workflow-makr-org li::before, .workflow-makr-org li::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 50%;\n      border-top: 1px solid #ccc;\n      width: 50%;\n      height: 19px; }\n    .workflow-makr-org li::after {\n      right: auto;\n      left: 50%;\n      border-left: 1px solid #ccc; }\n    .workflow-makr-org li:only-child::after, .workflow-makr-org li:only-child::before {\n      border-radius: 0 !important;\n      right: calc(50% - 1px); }\n    .workflow-makr-org li:first-child::before, .workflow-makr-org li:last-child::after {\n      border: 0 none; }\n    .workflow-makr-org li:last-child::before {\n      border-right: 1px solid #ccc;\n      border-radius: 0 6px 0 0; }\n    .workflow-makr-org li:first-child::after {\n      border-radius: 6px 0 0 0; }\n    .workflow-makr-org li .node {\n      text-decoration: none;\n      color: #666;\n      display: inline-block;\n      padding: 20px 10px;\n      transition: all 0.5s;\n      background: #fff;\n      min-width: 180px;\n      border-radius: 6px;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n      .workflow-makr-org li .node.start, .workflow-makr-org li .node.end {\n        width: 50px;\n        min-width: 50px;\n        height: 50px;\n        border-radius: 50%;\n        padding: 0;\n        background: #cecece;\n        line-height: 50px;\n        font-size: 10px;\n        font-weight: 900;\n        letter-spacing: 1px;\n        color: #333; }\n      .workflow-makr-org li .node.end {\n        background: #22659c;\n        color: #fff; }\n      .workflow-makr-org li .node:not(.start):not(.end):hover,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li .node:not(.end) {\n        background: #378dd3;\n        color: #002A50;\n        transition: all 0.15s; }\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li::after,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul li::before,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul::before,\n      .workflow-makr-org li .node:not(.start):not(.end):hover + ul ul::before {\n        border-color: #94a0b4; }\n      .workflow-makr-org li .node > div,\n      .workflow-makr-org li .node > a {\n        font-size: 12px; }\n      .workflow-makr-org li .node .status {\n        font-size: 18px;\n        float: none;\n        margin: 0 auto; }\n      .workflow-makr-org li .node .action {\n        font-weight: 700;\n        font-size: 13px;\n        color: #22659c;\n        text-transform: uppercase;\n        position: absolute;\n        top: 5px;\n        font-size: 10px;\n        right: calc(50% - 45px);\n        width: 100%;\n        text-align: center;\n        background: #efefef;\n        padding: 0;\n        z-index: 2; }\n      .workflow-makr-org li .node .status,\n      .workflow-makr-org li .node .action {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 15ch; }\n  .workflow-makr-org > ul > li:before {\n    border: 0 none !important; }\n\n#loading-workflow-makr {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  min-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: #22659c;\n  transition: opacity 0.45s ease-in-out;\n  z-index: 999; }\n  #loading-workflow-makr .loader {\n    height: 32px;\n    width: 32px;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto; }\n  #loading-workflow-makr .loader span {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px; }\n  #loading-workflow-makr .loader span::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    height: 32px;\n    width: 32px;\n    border: 3px solid #FFF;\n    border-bottom: 3px solid transparent;\n    border-radius: 50%;\n    -webkit-animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n    animation: loader-1 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }\n  #loading-workflow-makr .loader span::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 5px;\n    bottom: 0;\n    right: 0;\n    margin: auto;\n    width: 6px;\n    height: 6px;\n    background: #FFF;\n    border-radius: 50%;\n    -webkit-animation: loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;\n    animation: loader-2 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite; }\n\n@-webkit-keyframes loader-1 {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  40% {\n    -webkit-transform: rotate(180deg); }\n  60% {\n    -webkit-transform: rotate(180deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes loader-1 {\n  0% {\n    transform: rotate(0deg); }\n  40% {\n    transform: rotate(180deg); }\n  60% {\n    transform: rotate(180deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes loader-2 {\n  0% {\n    -webkit-transform: translate3d(0, -32px, 0) scale(0, 2);\n    opacity: 0; }\n  50% {\n    -webkit-transform: translate3d(0, 0, 0) scale(1.25, 1.25);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 8px, 0) scale(0, 0);\n    opacity: 0; } }\n\n@keyframes loader-2 {\n  0% {\n    transform: translate3d(0, -32px, 0) scale(0, 2);\n    opacity: 0; }\n  50% {\n    transform: translate3d(0, 0, 0) scale(1.25, 1.25);\n    opacity: 1; }\n  100% {\n    transform: translate3d(0, 8px, 0) scale(0, 0);\n    opacity: 0; } }\n\n@keyframes fadeInUp {\n  from {\n    transform: translate3d(0, -40px, 0); }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes fadeInUp {\n  from {\n    transform: translate3d(0, -40px, 0); }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1; } }\n",{});let t={};function r(n,o){document.querySelector(n).innerHTML='<div id="workflow-makr-chart-container"></div>',document.querySelector("#workflow-makr-chart-container").innerHTML='<div id="loading-workflow-makr"><div class="loader"><span></span></div></div>',console.log("Initializing the workflow makr ui...");var r=new XMLHttpRequest;console.log("Loading scenario..."),r.onreadystatechange=function(){4==this.readyState&&(200==this.status&&(t=JSON.parse(this.responseText),document.querySelector("#workflow-makr-chart-container #loading-workflow-makr").style.opacity=0,setTimeout((()=>{console.log("Printing scenario..."),function(n){let o="";o+='<div id="workflow-makr-org-container">',o+='<div class="workflow-makr-org">',o+='<ul><li><div class="node start">START</div>',o+="<ul>",n.forEach((n=>o+=i(n))),o+="</ul>",o+="</li></ul>",o+="</div>",o+="</div>",document.querySelector("#workflow-makr-chart-container").innerHTML=o}(e(t.transitions))}),500)),404==this.status&&(console.error("Failed loading scenario..."),console.error("Error",this.status,this.statusText)))},r.open("GET","http://localhost:8000/workflowmakr/scenarios/"+o,!0),r.send()}function e(n){const o=[];return n.forEach((n=>{o.push({old_status:n.old_status,new_status:n.new_status,action:n.action,transitions:e(n.children)})})),o}function i(n){let o="";return o+="<li>",o+='<div class="node">',o+='<div class="action" '+(n.action.designation.length>15?'title = "'+n.action.designation+'"':"")+">"+n.action.designation+"</div>",o+='<div class="status" '+(n.new_status.designation.length>15?'title = "'+n.new_status.designation+'"':"")+">"+n.new_status.designation+"</div>",o+="</div>",n.transitions&&n.transitions.length?(o+="<ul>",n.transitions.forEach((n=>{o+=i(n)})),o+="</ul>"):function(n){return!a(t.transitions).filter((o=>o==n.new_status.id)).length}(n)&&(o+="<ul>",o+='<li class="end"><div class="node end">END</div></li>',o+="</ul>"),o+="</li>",o}function a(n){let o=[];return n.forEach((n=>{n.old_status&&o.push(n.old_status.id),n.children&&n.children.length&&(o=o.concat(a(n.children)))})),o}export{r as init};