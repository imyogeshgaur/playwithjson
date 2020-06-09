let email = document.getElementById('email');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let subject = document.getElementById('subject');
let btn = document.getElementById('btn')

btn.addEventListener('click',showVal);

function showVal(){
   student.keys.email=email.value;
   student.keys.fname=fname.value;
   student.keys.lname=lname.value;
   student.keys.subject=subject.value;
   student.push(student.keys.email);
   student.push(student.keys.fname);
   student.push(student.keys.lname);
   student.push(student.keys.subject);
   console.log(JSON.stringify(student))
}
let student = []