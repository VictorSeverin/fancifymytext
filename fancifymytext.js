function buttonClicked() {
    document.getElementById("text").style.fontSize = "24pt";
}

function applyStyle() {
    let textarea = document.getElementById("text");
    if (document.getElementById("FancyShmancy").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    } else if (document.getElementById("BoringBetty").checked) {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
    }
}

function mooTransform() {
    let textarea = document.getElementById("text");
    let text = textarea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        sentences[i] = words.join(" ");
    }

    textarea.value = sentences.join(". ");
}