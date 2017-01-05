
var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function () {
	var num = document.getElementsByTagName('li').length;
	list.innerHTML += '<li>item </li>';
});

// nie wiem tylko jak zrobić by zmienna num wpisywała się w tag <li>