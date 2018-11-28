//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
var element = document.createElement('div');
var ul = document.createElement('ul');
for(let i=0;i<4;i++) {
let li = document.createElement('li');
li.innerHTML = (i*i).toString();
ul.appendChild(li);
}
element.appendChild('ul');
