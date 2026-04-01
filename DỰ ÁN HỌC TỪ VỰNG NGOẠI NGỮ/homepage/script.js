

let user =JSON.parse(localStorage.getItem("listperson")) || [];

let logOut =document.getElementById(`logout`)

let newLocal = JSON.parse(localStorage.getItem("currentUser"))

logOut.addEventListener("click",()=> {
    if(!newLocal){
        alert(`chưa có tài khoản.Vui lòng đăng nhập`)
        window.location.href ="../register and login/login.html";
    }else{
       let check = confirm(`bạn có muốn đăng xuất không?`)
        if(check){
            localStorage.removeItem("currentUser")
            alert("Đăng xuất thành công ")
            window.location.href ="../register and login/login.html";
        }
    }

})