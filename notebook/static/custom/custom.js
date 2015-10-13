window.onload=function (){
                var iframe = document.createElement("iframe");
                iframe.style.display="none";
                iframe.id="iframeC";
                iframe.name="iframeC";
                hashH = document.documentElement.scrollHeight;
                urlC = "http://www.kuanke100.com/agent.html";
                iframe.src = urlC+"#"+hashH;
                document.body.appendChild(iframe);
            }        