
var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function () {
	var num = document.getElementsByTagName('li').length;
	list.innerHTML += '<li>item</li>' + num
});

// Tak ale jak tak zrobię to numer dodaje się w osobnej lini a nie obok a nie wiem czy można wrzucać w tag html zmienna