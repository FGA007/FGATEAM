/*过滤UC浏览器匹配文字换成超链接*/
function filtrateUC() {
    var aDom = document.getElementsByTagName("a");
    if(aDom && aDom.length > 0){
        for(var i = 0; i < aDom.length; i++){
            var thisHref = aDom[i].href;
            var thisText = aDom[i].innerText;
            if(thisHref.indexOf("uc.cn") >= 0){
                aDom[i].replaceWith(thisText);
            }
        }
    }

    var iframeDom = document.getElementsByTagName("iframe");
    if (iframeDom && iframeDom.length > 0) {
        for (var k = 0; k < iframeDom.length; k++) {
            iframeDom[k].remove();
        }
    }
}

var pageDATA_ua = window.navigator.userAgent.toLowerCase();
if (pageDATA_ua.indexOf('ucbrowser') >= 0) {
    filtrateUC();
    window.onscroll = function () {
        filtrateUC();
    };
}