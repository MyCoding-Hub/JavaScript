// alert('Hello Buddy');

// console.log(document);

// let ido = document.getElementById('id1');

// console.log(ido);

// console.log(document.getElementsByClassName('class1'));

// console.log(document.querySelector('#id1'));

// console.log(document.title = 'ALLEZO');

// let all = document.querySelectorAll('p');

// console.log(all[2].textContent);
// // all.forEach((n) => n.remove())
// all.forEach((n) => n.textContent = 'Allezo Buddy');

// document.querySelector('#text1').addEventListener('input' , (m) => {
//     console.log(m.target.value);
// })

let search = () => {
    // let y = document.getElementById('text1').value;
    // console.log(y);

    let x = document.querySelector('body')
    x.style.background = 'blue'
}


let undo = () => {
    let m = document.querySelector('body')
    m.style.background = 'white'
}

let add = () => {
    let j = document.querySelector('ul')
    let k = document.createElement('li')
    k.textContent = 'im Alright'
    j.appendChild(k)
}



let n = document.createElement('p');
n.textContent = 'new version';

document.querySelector('body').appendChild(n);
