/* 
ITERKOCZE COMPANY 2018-2021, Wszelkie prawa zastrzeĹźone.
Iterkocze Company Iterkocze Framework jest produktem Iterkocze Company.
W zwiÄzku z tym, prawa autorskie naleĹźÄ do Iterkocze Company.
*/

/**
 * Zmienia parametr innerText wskazanego elementu
 * @param {HTMLBodyElement} element 
 * @param {String} text 
 */
function SetElementText(element, text)
{
    document.getElementById(element);
    element.innerText = text;
}

/**
 * Zmienia parametr innerHTML wskazanego emelentu
 * @param {HTMLBodyElement} element 
 * @param {String} text 
 */
function SetElementHTML(element, text)
{
    document.getElementById(element);
    element.innerHTML = text;
}

/**
 * Ustawia tutuĹ strony
 * @param {String} title 
 */
function SetPageTitle(title)
{
    document.title = title;
}

/**
 * Zmienia kolor elementu 'element' na 'color'
 * @param {HTMLBodyElement} element 
 * @param {string} color 
 */
function SetElementColor(element, color)
{
     element.style.color = color;
}

/**
 * Zwraca parametr innerText objektu HTML
 * @param {HTMLBodyElement} element 
 * @returns {string}
 */
function GetElementText(element)
{
    return element.innerText;
}

/**
 * Zwraca parametr innerHTML objektu HTML
 * @param {HTMLBodyElement} element 
 * @returns 
 */
function GetElementHTML(element)
{
    return element.innerHTML;
}

/**
 * Zwraca element na bazie podanego 
 * @param {HTMLBodyElement} element 
 * @returns 
 */
function GetElementByID(element)
{
    return document.getElementById(element.id);
}

/**
 * Zwraca parametr color elementu
 * @param {HTMLBodyElement} element 
 * @returns 
 */
 function GetElementColor(element)
 {
    return element.style.color;
}

/**
 * Powoduje kolorystyczna tÄcze
 * @param {HTMLBodyElement} element 
 */
function LGBT(element)
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

/**
 * Tworzy nowy element na stronie, zawierajÄcy podane atrybuty
 * @param {string} name 
 * @param {string} text 
 * @returns Element
 */
function CreateText(name, parent, text)
{
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

/**
 * Zwraca losowÄ wartoĹÄ z Array 'arr'
 * @param {Array} arr 
 * @returns 
 */
function SelectRandom(arr = [])
{
    return arr[Math.floor(Math.random() * arr.length)];
}