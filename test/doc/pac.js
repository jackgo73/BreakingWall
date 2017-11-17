var FindProxyForURL = function (url, host) {
    if (host == 'localhost'
        || host == '127.0.0.1'
        || shExpMatch(host, '192.168.*')
        || shExpMatch(host, '10.168.*')
        || shExpMatch(host, '*.ghelper-server.com')
        || host == 'chromehelper.net') {
        return 'DIRECT';
    }


    if (shExpMatch(host, '*.ghelper-server.com') || shExpMatch(host, '*.*.ghelper-server.com')) {
        return 'DIRECT';
    }
    if (shExpMatch(host, 'google.com.hk') || shExpMatch(host, '*.google.com.hk')) {
        return 'HTTPS hk.stunnel.co:1443';
    }
    if (shExpMatch(host, 'mail.google.com') || shExpMatch(host, '*.mail.google.com')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'gmail.com') || shExpMatch(host, '*.gmail.com')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'chrome.com') || shExpMatch(host, '*.chrome.com')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'chromium.org') || shExpMatch(host, '*.chromium.org')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'gstatic.com') || shExpMatch(host, '*.gstatic.com')) {
        return 'HTTPS jp2.ghelper-server.com:1445;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'wikipedia.org') || shExpMatch(host, '*.wikipedia.org')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'stackoverflow.com') || shExpMatch(host, '*.stackoverflow.com')) {
        return 'HTTPS sg.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS newwark.stunnel.co:433;HTTPS ca.ghelper-server.com:1443;HTTPS hk.ghelper-server.com:1443;HTTPS us2.ghelper-server.com:443;HTTPS stunnel.co:443;HTTPS us3.ghelper-server.com:444;HTTPS hk2.stunnel.co:443;HTTPS los.stunnel.co:443';
    }
    if (shExpMatch(host, 'clients*.google.com') || shExpMatch(host, '*.clients*.google.com')) {
        return 'HTTPS jp2.ghelper-server.com:1445;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'android.com') || shExpMatch(host, '*.android.com')) {
        return 'HTTPS sg.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS newwark.stunnel.co:433;HTTPS ca.ghelper-server.com:1443;HTTPS hk.ghelper-server.com:1443;HTTPS us2.ghelper-server.com:443;HTTPS stunnel.co:443;HTTPS us3.ghelper-server.com:444;HTTPS hk2.stunnel.co:443;HTTPS los.stunnel.co:443';
    }
    if (shExpMatch(host, 'fbcdn.net') || shExpMatch(host, '*.fbcdn.net')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'googleusercontent.com	') || shExpMatch(host, '*.googleusercontent.com	')) {
        return 'HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'ggpht.com') || shExpMatch(host, '*.ggpht.com')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'googleusercontent.com') || shExpMatch(host, '*.googleusercontent.com')) {
        return 'HTTPS sg.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS newwark.stunnel.co:433;HTTPS ca.ghelper-server.com:1443;HTTPS hk.ghelper-server.com:1443;HTTPS us2.ghelper-server.com:443;HTTPS stunnel.co:443;HTTPS us3.ghelper-server.com:444;HTTPS hk2.stunnel.co:443;HTTPS los.stunnel.co:443';
    }
    if (shExpMatch(host, 'google.us') || shExpMatch(host, '*.google.us')) {
        return 'HTTPS us2.ghelper-server.com:443;HTTPS los.stunnel.co:443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433';
    }
    if (shExpMatch(host, 'appspot.com') || shExpMatch(host, '*.appspot.com')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'html5rocks.com') || shExpMatch(host, '*.html5rocks.com')) {
        return 'HTTPS stunnel.co:443;HTTPS hk2.stunnel.co:443;HTTPS us2.ghelper-server.com:443;HTTPS sg.ghelper-server.com:1443;HTTPS los.stunnel.co:443;HTTPS jp2.ghelper-server.com:1445;HTTPS ca.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS us3.ghelper-server.com:444;HTTPS newwark.stunnel.co:433;HTTPS jp.ghelper-server.com:1445';
    }
    if (shExpMatch(host, 'google.*') || shExpMatch(host, '*.google.*')) {
        return 'HTTPS sg.ghelper-server.com:1443;HTTPS us.ghelper-server.com:1443;HTTPS newwark.stunnel.co:433;HTTPS ca.ghelper-server.com:1443;HTTPS hk.ghelper-server.com:1443;HTTPS us2.ghelper-server.com:443;HTTPS stunnel.co:443;HTTPS us3.ghelper-server.com:444;HTTPS hk2.stunnel.co:443;HTTPS los.stunnel.co:443';
    }
    return 'DIRECT';
}
