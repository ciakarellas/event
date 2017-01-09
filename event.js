
var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function () {
	var num = document.getElementsByTagName('li').length;
	list.innerHTML += '<li>item '+ num +'</li>' 
});
