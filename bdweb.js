// BDWeb

// Declare main BDWeb namespace
var __bdweb__ = {};

// bdweb init
(function() {
    console.info('BDWeb: Initializing...');
    __bdweb__.root = document.getElementById('app-mount');
    __bdweb__.hasInitialized = false;
    __bdweb__.initQuery = 'nav.wrapper-1Rf91z.guilds-1SWlCJ[aria-label="Servers sidebar"]';
    __bdweb__.userCircleSVG = `<circle cx="20" cy="3" r="3" fill="red"></circle>`;
    __bdweb__.showClientWarning = function showClientWarning() {
        console.warn('BDWeb: WARNING');
        console.warn('BDWeb is a Discord web modification.');
        console.warn('Please, do NOT report bugs with the Discord interface, without disabling BDWeb first!');
        console.warn('You are at risk of ToS bans.');
        console.warn('Continue at your own risk!');
        console.warn('Thanks for trying out BDWeb!');
        console.warn(' - The BDWeb Development Team');
    }
    __bdweb__.initIntervalID = setInterval(() => {
        console.info('BDWeb: Checking if Discord is ready...');
        if (document.querySelector(__bdweb__.initQuery)) {
            clearInterval(__bdweb__.initIntervalID);
            __bdweb__.hasInitialized = true;
            console.info('BDWeb: Discord is ready!');
            console.info('BDWeb: Injecting warning icon...')
            __bdweb__.userSetButton = document.querySelector('html.full-motion.platform-web body div#app-mount.appMount-3lHmkl div.app-1q1i1E div.app-2rEoOp div.layers-3iHuyZ.layers-3q14ss div.layer-3QrUeG.baseLayer-35bLyl div.container-2lgZY8 div.base-3dtUhz div.content-98HsJk div.sidebar-2K8pFh section.panels-j1Uci_ div.container-3baos1 div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6').lastChild.querySelector('svg');
            __bdweb__.userSetButton.innerHTML += __bdweb__.userCircleSVG;
            console.info('BDWeb: Checking for User CSS...');
            if (!localStorage.bdweb__userCSS) {
                console.info('BDWeb: No User CSS found!');
                console.info('BDWeb: Added empty user CSS.');
                localStorage.bdweb__userCSS = '';
            }
            console.info('BDWeb: Loading user CSS...');
            if (!document.getElementById('bdweb-user-css')) {
                __bdweb__.root.innerHTML += `<!-- bdweb::userCSS -->
<!-- Do not edit! This is synced with the BDWeb User CSS automatically. -->
<style id="bdweb-user-css">
${localStorage.bdweb__userCSS}
</style>`;
            } else {
                document.getElementById('bdweb-user-css').innerHTML = localStorage.bdweb__userCSS
            }
            console.info('BDWeb: User CSS injected!');
            console.info('BDWeb: Finished initial injection!');
            setTimeout(() => {
                __bdweb__.showClientWarning();
            }, 5000);
        } else {
            console.info('BDWeb: Discord is not ready.');
        }
    }, 3000);
})();