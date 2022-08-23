"use strict";

// Create domcomnetent loaded
document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("DOMContentLoaded");
}

function inputHandler(e) {
    console.log();
}
function convert(){
    let yt_url = document.querySelector("input").value;
    
    document.querySelector("main").innerHTML = `<iframe src="https://convert2mp3s.com/api/widgetv2?url=${yt_url}"
    width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>`;
   
}
