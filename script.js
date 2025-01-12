function resizeIframe()
 { var iframe = document.getElementById('myIframe'); 
    iframe.contentWindow.document.body.style.margin = '0'; 
    iframe.contentWindow.document.body.style.padding = '0'; 
    iframe.contentWindow.document.body.style.width = '100%';
     iframe.contentWindow.document.body.style.height = '100%'; 
} document.getElementById('myIframe').onload = resizeIframe;