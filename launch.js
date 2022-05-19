document.getElementById("Launch").addEventListener("click", function() {

    urle = "https://" + document.domain + "\\example.html";
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = urle;
    console.log(iframe.src)
    win.document.body.appendChild(iframe)

})
