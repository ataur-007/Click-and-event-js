var items = document.getElementsByClassName('list');
for (let i = 0; i < items.length; i++) {
    const list = items[i];
    list.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target)
    })
}

document.getElementById('addnew').addEventListener('click', function (event) {
    var items = document.getElementById('listitem')
    var newItems = document.createElement('li');
    newItems.innerHTML = 'Brand new items'
    items.appendChild(newItems);
})


document.getElementById('addNew').addEventListener('click',
    function (event) {
        var items = document.getElementById('listitem');
        var newElement = document.createElement('li');
        newElement.innerHTML = 'new element add'
        items.appendChild(newElement);
    })


document.getElementById('listitem').addEventListener('click',
    function (event) {
event.target.parentNode.removeChild(event.target)    }
)