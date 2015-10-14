///online or offline
if(window.location.host=='open.joinquant.com:8023'){
        var g_pHost = "https://www.joinquant.com";
}else{
        var g_pHost = "http://www.kuanke100.com";
}
///when open link in new window,replace its href
$(document).ready(function(){
    $('body').delegate('a','click',function(){
        if($(this).attr("target")=="_blank"){
             $(this).attr("href",g_pHost+"/research?target=research&url="+$(this).attr("href"));
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