
///online or offline
if(window.location.host.indexOf('joinquant.com') >= 0){
        var g_pHost = "https://www.joinquant.com";
}else{
        var g_pHost = "http://www.kuanke100.com";
}

///when open link in new window,replace its href
$(document).ready(function(){
    $('body').delegate('a','click',function(){
        var href = $(this).attr('href');
        if($(this).attr("target")=="_blank" && (href.slice(0, 4) != 'http' || href.indexOf('open.joinquant.com') >= 0)) {
             $(this).attr("href",g_pHost+"/research?target=research&url="+href);
        }
    });
    setTimeout("ajustHeight()", 300)
});
///ajust parent window's height according to this window's height
function ajustHeight(){
    var iframe = document.createElement("iframe");
    iframe.style.display="none";
    iframe.name="iframeC";
    hashH = document.getElementById('site').scrollHeight+document.getElementById('header').scrollHeight;
    urlC = g_pHost+"/agent.html";
    iframe.src = urlC+"#"+hashH;
    document.body.appendChild(iframe);
}

require([
    'base/js/namespace'
], function(IPython) {
    IPython.hook_new_window_url = function(url) {
        if (url && url.indexOf('www.joinquant.com') < 0) {
            url = g_pHost+"/research?target=research&url="+url
        }
        return url;
    };
    
    // var raw_open = window.open;

    // window.open = function(url, target) {
    //     if (url && (!target || target == '_blank') && url.indexOf('www.joinquant.com') < 0) {
    //         url = g_pHost+"/research?target=research&url="+url
    //     }
    //     raw_open(url, target)
    // }
});
