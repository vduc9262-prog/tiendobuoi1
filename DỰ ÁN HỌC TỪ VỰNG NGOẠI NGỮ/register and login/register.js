let Person = [
   {
    id:"1",
    firstName: "ad",
    lastName: "min",
    email: "admin@gmail.com",
    password: "Admin12345",
    confirmPass:"Admin12345",
},
];

const Savedata = () => {
    localStorage.setItem("listperson",JSON.stringify(Person));
}
Savedata();
const loadData = () => {
    const saved = localStorage.getItem("listperson");
    if (saved) {
        Person = JSON.parse(saved);
    }
};

loadData();

const firstName = document.getElementById("Onename");
const lastName  = document.getElementById("Twoname");
const email     = document.getElementById("email");
const password  = document.getElementById("pass");
const confirmPass = document.getElementById("againPass");
const buttonAdd = document.getElementById("btn-add");


const isEmailExist = (email) => {
    return Person.some(person => person.email.toLowerCase() === email.toLowerCase());
};

buttonAdd.addEventListener("click", (e) =>{
    e.preventDefault();

    const addPerson = () => {
    let NewPerson = {
        id: Date.now(),
        firstName:firstName.value.trim(),
        lastName:lastName.value.trim(),
        email:email.value.trim(),
        password:password.value.trim(),
        confirmPass:confirmPass.value.trim(),
    }


    if(firstName.value === ""){
        alert("Firstname không được để trống !");
        return;
    }

    if(lastName.value === ""){
        alert("Lastname không được để trống !");
        return;
    }

    if (email.value === "") {
        alert("Email không được để trống!");
        return;
    }

    if (isEmailExist(email.value)) {
        alert("Email này đã tồn tại! Vui lòng sử dụng email khác.");
        return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
        alert("emailError ! Email này đã được đăng ký");
        return;
    }

    if(password.value.trim().length < 8){
        alert("Password bắt buộc phải có 8 kí tự !")
        return;
    }
    
    let passwordValidate=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordValidate.test(password.value)) {
        errorPassword.innerText= 'Mật khẩu phải chứa in hoa, in thường, kí tự số';
        return;
    };

    if(confirmPass.value !== password.value ){
        alert("Password và confirmPass phải giống nhau !");
        return;
    }


    Person.push(NewPerson);
    Savedata();
    // Thông báo và chuyển hướng
    alert('Đăng ký thành công! Chuyển đến trang đăng nhập.');
    window.location.href = "login.html";

    firstName.value ="";
    lastName.value ="";
    email.value ="";
    password.value ="";
    confirmPass.value ="";
}
addPerson();

});


