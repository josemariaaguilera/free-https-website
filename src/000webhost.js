/*
find the banner added by 000webhost using the style attr and delete it.
this script will not work if your css is added using the style attr.
*/
function deleteAdds(){
    var body = document.getElementsByTagName("body")[0];
    var footer = null;

    if(body !== undefined){
        footer = body.querySelectorAll("div[style]")[0];

        if(footer !== undefined && footer.tagName == 'DIV'){
            body.removeChild(footer);
        } else {
            console.error("error trying to delete the element")
        }

    }else{
        console.error("body not loaded");
    }
}

//first check if the website is served in local (file://) or in a server (http or https). then, if is served by a server, remove the banner.
if(window.location.origin !== 'file://'){
  document.addEventListener("DOMContentLoaded", deleteAdds);
}
