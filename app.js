function getTextWidth(text, font) {
    // if given, use cached canvas for better performance
    // else, create new canvas
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return Math.round(metrics.width);
};

function copyTitle() {
    var titleInput = document.getElementById("title-input").value;  
    document.getElementById("output-title").textContent = titleInput;
    //console.log("Title: " + getTextWidth(document.getElementById("output-title").textContent, "18px arial"));
    var titleOutput = getTextWidth(document.getElementById("output-title").textContent, "18px arial");
    document.getElementById("title-counter").textContent = titleOutput + "px";
    document.getElementById("title-char-count").textContent = titleInput.length + " Zeichen";
    
    if (titleOutput > 499) {
        document.getElementById("title-counter").style.backgroundColor = "#FF0000";
    }
    else {
        document.getElementById("title-counter").style.backgroundColor = "#006621";
    }
    if (titleOutput === 0) {
        document.getElementById("output-title").textContent = "CLANEO: SEO, SEA und Content Marketing Agentur aus Berlin";
    }
};
function copyDesc() {
    var descInput = document.getElementById("description-input").value;  
    document.getElementById("output-description").textContent = descInput;
    //console.log("Description: " + getTextWidth(document.getElementById("output-description").textContent, "13px arial"));
    var descOutput = getTextWidth(document.getElementById("output-description").textContent, "13px arial");
    document.getElementById("description-counter").textContent = descOutput + "px";
    document.getElementById("desc-char-count").textContent = descInput.length+ " Zeichen";

    if (descOutput > 920) {
        document.getElementById("description-counter").style.backgroundColor = "#FF0000";
    }
    else {
        document.getElementById("description-counter").style.backgroundColor = "#006621";
    }
    if (descOutput === 0) {
        document.getElementById("output-description").textContent = "Search-, Content- und Performance-Marketing aus erster Hand: Ein Team aus langjährigen Inhouse- und Agentur-Mitarbeitern. Jetzt Termin vereinbaren!";
    }
};
function copyUrl() {
    var urlInput = document.getElementById("url-input").value;
    document.getElementById("output-url").textContent = urlInput;
    

    if (urlInput == '') {
        document.getElementById("output-url").textContent = "www.claneo.com > snippet-optimizer";
    }
};