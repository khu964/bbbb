const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    const box = document.getElementById('box');
    box.style.backgroundColor = randomCode;
   //  document.body.style.backgroundColor = randomCode;
   
    document.getElementById("hel").innerText = randomCode;
 }
 const color = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    const box = document.getElementById('box1');
    box.style.backgroundColor = randomCode;
//   document.body.style.backgroundColor = randomCode;
    document.getElementById("red").innerText = randomCode;
 }
 const sorry= () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    const box = document.getElementById('box2');
    box.style.backgroundColor = randomCode;
   // document.body.style.backgroundColor = randomCode;
    document.getElementById("ready").innerText = randomCode;
 }
 const get = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    const box = document.getElementById('box3');
    box.style.backgroundColor = randomCode;
   //  document.body.style.backgroundColor = randomCode;
    document.getElementById("hi").innerText = randomCode;
 }
 