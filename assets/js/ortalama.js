let ogrenciForm = document.querySelector(".ogrenciForm");
let midterm1 = document.querySelector(".midterm1");
let midterm2 = document.querySelector(".midterm2");
let final = document.querySelector(".final");
let students = document.querySelector(".students");
let total = 0;
let student = [];
let grade = [];

let studentList = [
  // {
  //   id: 1,
  //   name: "Nihat",
  //   lastname: "Duysak",
  //   section: "Frontend",
  //   midterm1: "Buraya inputtan alınan vize notu eklenecek",
  //   midterm2: "Buraya inputtan alınan vize notu eklenecek",
  //   final: "Buraya inputtan alınan final notu eklenecek",
  //   grade: "Buraya 3 sınav puanının ortalaması eklenecek",
  // },
];

// if(typeof localStorage.student !== 'undefined') {
//   student = JSON.parse(localStorage.student);
//   renderStudents();
// }


function handleTotal() {
  let ortmidterm1 = Number(midterm1.value) * 0.3;
  let ortmidterm2 = Number(midterm2.value) * 0.3;
  let ortfinal = Number(final.value) * 0.4;
  total = ortmidterm1 + ortmidterm2 + ortfinal;
  console.log(total);
  grade.push(total);
}

function handleFormSubmit(e) {
  e.preventDefault();
  let formData = new FormData(ogrenciForm);
  let formObj = Object.fromEntries(formData);
  student.push(formObj);
  handleTotal();

  studentList.push({
    id: studentList.length + 1,
    name: formObj.name,
    lastname: formObj.lname,
    section: formObj.section,
    midterm1: Number(formObj.vize1) * 0.3,
    midterm2: Number(formObj.vize2) * 0.3,
    final: Number(formObj.final) * 0.4,
    grade: total,
  });
  save();
  renderStudents();
}

ogrenciForm.addEventListener("submit", handleFormSubmit);

function save() {
  localStorage.student = JSON.stringify(student);
}

function renderStudents() {
  for (let i = 0; i < student.length; i++) {

    if (total >= 90) {

      students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].section} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Tebrikler, notunuz: ${total} Harf notunuz:AA </h3>`;

    } else if (total >= 85) {
    
      students.innerHTML += `
      <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
      <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
      <p> <strong>Bölümü :</strong> ${student[i].section} </p>
      <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
      <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
      <p> <strong>Final :</strong>${student[i].final} </p>
     <h3>Tebrikler, notunuz: ${total} Harf notunuz:BA </h3>`;

    }else if (total >= 80) {
    
      students.innerHTML += `
      <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
      <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
      <p> <strong>Bölümü :</strong> ${student[i].section} </p>
      <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
      <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
      <p> <strong>Final :</strong>${student[i].final} </p>
     <h3>Tebrikler, notunuz: ${total} Harf notunuz:BB </h3>`;

    } 
    else if (total >= 75) {


          students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].section} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Tebrikler,Geçer notunuz: ${total} Harf notunuz:CB </h3>`;


    } else if (total >= 70) {

          students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].section} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Tebrikler,Geçer notunuz: ${total} Harf notunuz:CC </h3>`;


    } else if (total >= 65) {


      students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].section} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Koşullu Geçer notunuz: ${total} Harf notunuz:DC </h3>`;


    } else if (total >= 60) {

      students.innerHTML += `
      <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
      <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
      <p> <strong>Bölümü :</strong> ${student[i].section} </p>
      <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
      <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
      <p> <strong>Final :</strong>${student[i].final} </p>
     <h3>Koşullu Geçer notunuz: ${total} Harf notunuz:DD </h3>`;


    } else if (total >= 50) {


     students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].section} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Geçemediniz notunuz: ${total} Harf notunuz:FD </h3>`;


    } else {
           students.innerHTML += `
         <p> <strong>Öğrenci Adı :</strong> ${student[i].name} </p>
         <p> <strong>Öğrenci Soyadı :</strong> ${student[i].lname} </p>
         <p> <strong>Bölümü :</strong> ${student[i].section} </p>
         <p> <strong>Vize 1 :</strong>${student[i].vize1} </p>
         <p> <strong>Vize 2 :</strong>${student[i].vize2} </p>
         <p> <strong>Final :</strong>${student[i].final} </p>
        <h3>Geçemediniz, notunuz: ${total} Harf notunuz:FF </h3>`;
    }
  }
}
