let arr = [];
var xhr = new XMLHttpRequest();

xhr.open(
'GET',
'https://run.mocky.io/v3/885684f7-653d-41dd-a55b-ed03eb27ebb1',
true)

xhr.send()

xhr.onreadystatechange = function () {
if(xhr.readyState !== 4){
return
}
console.log('end')
if (xhr.status === 200){
console.log( JSON.parse(xhr.responseText))
arr = JSON.parse(xhr.responseText)
Student.fill(arr);
} else{
console.log('err', xhr.responseText)
}
}

const Student = (function() {


const fill = (arr) => {
let table = document.createElement('table');
let tr = document.createElement('tr');
table.appendChild(tr);
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
tr.appendChild(document.createElement('th'));
table.rows[0].cells[0].innerHTML = 'Name';
table.rows[0].cells[1].innerHTML = 'Surname';
table.rows[0].cells[2].innerHTML = 'Age';
table.rows[0].cells[3].innerHTML = 'Average';

document.body.appendChild(table);
let i = 1;

arr.forEach(elem => {
let tr = document.createElement('tr');
table.appendChild(tr);
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
table.rows[i].cells[0].textContent = elem.name;
table.rows[i].cells[1].innerHTML = elem.surname;
table.rows[i].cells[2].innerHTML = elem.age;
table.rows[i].cells[3].innerHTML = elem.average;
i++;
});

sumAverage();

};

function refreshData() {
let table = document.querySelector('table');
let i = 1;
arr.forEach(elem => {
let tr = document.createElement('tr');
table.appendChild(tr);
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
tr.appendChild(document.createElement('td'));
table.rows[i].cells[0].textContent = elem.name;
table.rows[i].cells[1].innerHTML = elem.surname;
table.rows[i].cells[2].innerHTML = elem.age;
table.rows[i].cells[3].innerHTML = elem.average;
i++;
});

sumAverage();
}


function sumAverage() {
const el = document.querySelector('table');
const resultEl = document.querySelector('#result');
let sum = 0;
Array.from(el.children).forEach((child, index) => {
if (index !== 0) {
sum += +child.lastElementChild.textContent;
}
});

resultEl.textContent = +(sum / arr.length).toFixed(2);
}




return {
fill,
refreshData
}
})();
function pushFunction(){
arr.push({ name: document.getElementById('name').value,
surname: document.getElementById('surname').value,
age: document.getElementById('age').value,
average: document.getElementById('average').value
}, );
Student.refreshData(arr);
}

function deleteRow() {
let k=document.getElementById('del').value;
let table = document.querySelector('table');
let m=k-1;
table.children[k].remove();
arr.splice(m, 1);
Student.refreshData(arr);
}