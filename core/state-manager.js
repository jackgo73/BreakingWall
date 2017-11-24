

'use strict';


var stateManager = {};


/**
 * Public Methods
 */


stateManager.addDomainToWhitelist = function (domain) {

    return new Promise((resolve) => {

        let whitelistedDomains = requestAnalyzer.whitelistedDomains;
        whitelistedDomains[domain] = true;

        chrome.storage.local.set({whitelistedDomains}, resolve);
    });
};

stateManager.deleteDomainFromWhitelist = function (domain) {

    return new Promise((resolve) => {

        let whitelistedDomains = requestAnalyzer.whitelistedDomains;
        delete whitelistedDomains[domain];

        chrome.storage.local.set({whitelistedDomains}, resolve);
    });
};