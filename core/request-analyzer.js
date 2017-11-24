

'use strict';


/**
 * requestAnalyzer
 */

var requestAnalyzer = {'a':'b'};

/**
 * Constants
 */



/**
 * Initializations
 */

requestAnalyzer.whitelistedDomains = {};

/**
 * Public Methods
 */

/**
 * Private Methods
 */

requestAnalyzer._applyWhitelistedDomains = function () {

    chrome.storage.local.get('whitelistedDomains', function (items) {
        requestAnalyzer.whitelistedDomains = items.whitelistedDomains || {};
    });
};

/**
 * Event Handlers
 */

chrome.storage.onChanged.addListener(requestAnalyzer._applyWhitelistedDomains);





