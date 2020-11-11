// BDWeb

// Declare main BDWeb namespace
var __bdweb__ = {};

// bdweb init
(function() {
    console.info('BDWeb: Initializing...');
    __bdweb__.root = document.getElementById('app-mount');
    __bdweb__.hasInitialized = false;
    __bdweb__.initQuery = 'nav.wrapper-1Rf91z.guilds-1SWlCJ[aria-label="Servers sidebar"]';
    __bdweb__.userCircleSVG = `<circle cx="20" cy="3" r="3" fill="red"></circle>`
    __bdweb__.initIntervalID = setInterval(() => {
        console.info('BDWeb: Checking if Discord is ready...');
        if (document.querySelector(__bdweb__.initQuery)) {
            clearInterval(__bdweb__.initIntervalID);
            __bdweb__.hasInitialized = true;
            console.info('BDWeb: Discord is ready!');
            __bdweb__.userSetButton = document.querySelector('html.full-motion.platform-web body div#app-mount.appMount-3lHmkl div.app-1q1i1E div.app-2rEoOp div.layers-3iHuyZ.layers-3q14ss div.layer-3QrUeG.baseLayer-35bLyl div.container-2lgZY8 div.base-3dtUhz div.content-98HsJk div.sidebar-2K8pFh section.panels-j1Uci_ div.container-3baos1 div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6').lastChild.querySelector('svg');
            console.log(__bdweb__);
            __bdweb__.userSetButton.innerHTML += __bdweb__.userCircleSVG;
        } else {
            console.info('BDWeb: Discord is not ready.');
        }
    }, 3000);
})();