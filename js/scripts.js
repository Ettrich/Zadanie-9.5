var buttonClass = document.getElementsByClassName('button');

for (var i = 0 ; i <= buttonClass.length ; i++) {
    var text = buttonClass[i].innerText;
    alert(text);
}