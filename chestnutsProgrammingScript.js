function iframeLoaded() {
    var iFrameID = document.getElementById('page');
    if(iFrameID) {
        // here you can make the height, I delete it first, then I make it again
        iFrameID.height = "";
        iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight+150 + "px";
    }
}

