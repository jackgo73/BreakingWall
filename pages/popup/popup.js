'use strict';


// popup

let popup = {};

// const

const WEB_DOMAIN_EXPRESSION = /:\/\/(.[^\/]+)(.*)/;
const WEB_PREFIX_VALUE = 'www.';
const WEB_PREFIX_LENGTH = WEB_PREFIX_VALUE.length;

// Initializations

document.addEventListener('DOMContentLoaded', function () {
    let version;
    version = chrome.runtime.getManifest().version;
    document.getElementById('version-label').innerText = version;

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {

        let domain;
        try {
            domain = tabs[0].url.match(WEB_DOMAIN_EXPRESSION)[1];
        } catch (exception) {
            domain = null;
        }
        if (domain !== null) {

            let websiteContextElement, proxyToggleElement, domainIndicatorElement;

            websiteContextElement = document.getElementById('website-context');
            proxyToggleElement = document.getElementById('proxy-toggle-button');
            domainIndicatorElement = document.getElementById('domain-indicator');

            if (domain.startsWith(WEB_PREFIX_VALUE)) {
                domain = domain.slice(WEB_PREFIX_LENGTH);
            }

            domainIndicatorElement.innerText = domain;

            //TODO !backgroundPage.requestAnalyzer.whitelistedDomains[domain]
            if (true) {

                proxyToggleElement.setAttribute('class', 'button button-toggle active');

                let disableProxyTitle = chrome.i18n.getMessage('disableProxyTitle');
                proxyToggleElement.setAttribute('title', disableProxyTitle);

                proxyToggleElement.addEventListener('click', function () {
                    //TODO backgroundPage.stateManager.addDomainToWhitelist(domain).then(function () {
                    chrome.tabs.reload(tabs[0].id, {
                        'bypassCache': true
                    });

                    return window.close();
                    //});
                });


            } else {

                proxyToggleElement.setAttribute('class', 'button button-toggle');
                let enableProxyTitle = chrome.i18n.getMessage('enableProxyTitle');
                proxyToggleElement.setAttribute('title', enableProxyTitle);

                proxyToggleElement.addEventListener('click', function () {
                    //TODO backgroundPage.stateManager.deleteDomainFromWhitelist(domain).then(function () {
                    chrome.tabs.reload(tabs[0].id, {
                        'bypassCache': true
                    });

                    return window.close();
                    //});
                });
            }

            websiteContextElement.setAttribute('class', 'panel');
        }




    });


});


