
var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function () {
	var num = document.getElementsByTagName('li').length;
	console.log(num);
	list.innerHTML += '<li>item </li>';
});

