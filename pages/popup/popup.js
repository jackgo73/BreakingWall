


'use strict';


let popup = {};

// Initializations

document.addEventListener('DOMContentLoaded', function () {
    let version;
    version = chrome.runtime.getManifest().version;
    document.getElementById('version-label').innerText = version;

    let websiteContextElement, protectionToggleElement, domainIndicatorElement;

    websiteContextElement = document.getElementById('website-context');
    protectionToggleElement = document.getElementById('protection-toggle-button');
    domainIndicatorElement = document.getElementById('domain-indicator');

    domainIndicatorElement.innerText = 'baidu.com';
    websiteContextElement.setAttribute('class', 'panel');
    protectionToggleElement.setAttribute('class', 'button button-toggle active');


});


