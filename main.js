var settings = document.getElementById("settings");

settings = settings.innerHTML
    .replace(/\/\*([^\*\/]*)\*\//g, "")
    .split(";");

var settingsObj = {
    "background color": "#335",
    
    "text color": "#000",
    "text background color": "#FFF",
};
for(var i = 0; i<settings.length; i++){
    var S = settings[i].split(":");
    
    S[0] = S[0].trim();
    
    if(settingsObj[S[0]]){
        settingsObj[S[0]] = S[1];
    }
}

document.body.style.backgroundColor = settingsObj["background color"];
document.body.style.color = settingsObj["text color"];

var story = document.getElementById("story");

story.style.backgroundColor = settingsObj["text background color"];

var s = document.createElement("div");
s.id = "story-holder";

var ps = story.innerHTML.match(/\n([^\n]+)/g);
for(var i = 0; i<ps.length; i++){
    var e = document.createElement("p");
    e.innerHTML = ps[i]
        .replace(/\[title\] *([^\n]*)/gi, "<h1>$1</h1>")
        .replace(/\[chapter\] *([^\n]*)/gi, "<h2>$1</h2>")
    
    if(e.innerHTML === ps[i]){
        e.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + e.innerHTML;
    }
    
    e.innerHTML = e.innerHTML
        .replace(/_([^_\n]+)_/, "<em>$1</em>")
        .replace(/\*([^\*\n]+)\*/, "<strong>$1</strong>");
    
    s.append(e);
}

document.body.append(s);
