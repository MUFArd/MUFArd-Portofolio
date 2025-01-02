const links = document.querySelectorAll(".source-code a");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        if (link.classList.contains('active')) {
            link.classList.remove('active');
        } else {
            // Remove 'active' class from all other links
            links.forEach(otherlink => otherlink.classList.remove('active'));

            // Add 'active' class to the clicked link
            link.classList.add('active');
        }
    });
});
function copyIframeText(iframeId) {
    var iframe = document.getElementById(iframeId);
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var textToCopy = iframeDoc.body.innerText;

    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");

    document.body.removeChild(tempTextArea);

    alert("Teks dalam iframe " + iframeId + " telah disalin ke clipboard.");
}
