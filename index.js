// function clickButton() {
//     document.body.style.backgroundColor = 'red';
//     document.body.style.color = 'yellow';
// }
// const colorBody = document.getElementById('second');
// colorBody.onclick = clickButton;

// // make it in another way

function clickButton1() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
const newColor = document.getElementById('third')
newColor.addEventListener('click', clickButton1)

// function clickButton2() {
//     document.body.style.backgroundColor = 'yellow';
//     document.body.style.color = 'black';
// }
// const newColor2 = document.getElementById('four')
// newColor2.addEventListener('click', clickButton2)

// // how to add this item and use this one addEventListener 


// document.getElementById('head').addEventListener('click',function (){
//     console.log('first click now');
//     event.stopPropagation();
// } )

// document.getElementById('id-1').addEventListener('click', function (){
//     console.log('first click now1');
//     event.stopPropagation();
// } )
// This is for add or remve any icon




document.getElementById('newOne').addEventListener('click', 
function(event){
    var items = document.getElementById('listitem');
    var newElement = document.createElement('li');
    newElement.innerHTML = 'This is new element'
    items.appendChild(newElement);
})

document.getElementById('newOne').addEventListener('click',
    function (event){
        var items = document.getElementById('listItem');
        var newElement = document.createElement('li');
        newElement.innerHTML = 'new element add'
        items.appendChild(newElement);
    })






document.getElementById('listItem').addEventListener('click',
function (event){
    event.target.parentNode.removeChild(event.target) 
})