window.onload = function () {
    console.log('heidi ho!'); // why isnt this logging?!
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
};
