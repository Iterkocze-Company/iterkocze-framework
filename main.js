function SetElementText(element, text) {
    document.getElementById(element);
    element.innerText = text;
}

function SetElementHTML(element, text) {
    document.getElementById(element);
    element.innerHTML = text;
}

function SetPageTitle(title) {
    document.title = title;
}

function SetElementColor(element, color) {
     element.style.color = color;
}

function GetElementText(element) {
    return element.innerText;
}

function GetElementHTML(element) {
    return element.innerHTML;
}

function GetElementByID(element) {
    return document.getElementById(element.id);
}

function GetElementColor(element) {
    return element.style.color;
}

function LGBT(element) {
    setTimeout(function()
    {
        element.style.color = "rgb(255, 0, 24)";
    }, 200);
    setTimeout(function()
    {
        element.style.color = "rgb(255, 165, 44)";
    }, 400);
    setTimeout(function()
    {
        element.style.color = "rgb(255, 255, 65)";
    }, 600);
    setTimeout(function()
    {
        element.style.color = "rgb(0, 128, 24)";
    }, 800);
    setTimeout(function()
    {
        element.style.color = "rgb(0, 0, 249)";
    }, 1000);
    setTimeout(function()
    {
        element.style.color = "rgb(134, 0, 125)";
    }, 1200);

    setTimeout(function()
    {
        setTimeout(function()
        {
            element.style.color = "rgb(255, 0, 24)";
        }, 200);
        setTimeout(function()
        {
            element.style.color = "rgb(255, 165, 44)";
        }, 400);
        setTimeout(function()
        {
            element.style.color = "rgb(255, 255, 65)";
        }, 600);
        setTimeout(function()
        {
            element.style.color = "rgb(0, 128, 24)";
        }, 800);
        setTimeout(function()
        {
            element.style.color = "rgb(0, 0, 249)";
        }, 1000);
        setTimeout(function()
        {
            element.style.color = "rgb(134, 0, 125)";
        }, 1200);

        LGBT(element);
    }, 1200);
}

function CreateText(name, parent, text) {
    if (arguments == 2) //It not work, lepiej nie uĹźywaÄ tylko z dwona argumentami. Too bad.
    {
        var helo = document.createElement(name);
        helo.innerText = "domyĹlny tekst";
        document.getElementById(parent).appendChild(helo); 
    }   
    else
    {
        var helo = document.createElement(name);
        helo.innerText = text;
        document.getElementById(parent).appendChild(helo); 
    }
    return helo;
}

function SelectRandom(arr = []) {
    return arr[Math.floor(Math.random() * arr.length)];
}