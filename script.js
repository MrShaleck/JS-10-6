var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    var len = list.children.length;
    element.innerText = 'item ' + len;
    list.appendChild(element);
});

// var listElement = document.getElementsByTagName = ('li');

// var countOfListElement = listElement.lenght;

// list.appendChild(element);
// console.log(countOfListElement);

