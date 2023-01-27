// signup js code
function home() {
    alert("Please Login!");
}
function signup() {
    alert("Please Login!");
}
function login(){
    alert("Please Register!!");
}

function register(e) {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    let phone= document.getElementById("userPhone").value;
    let password= document.getElementById("userPassword").value;


    let lowercaseLetter = /[a-z]/g;
    let uppercaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if(name.length == 0 ){
        alert('Please fill in name');
    }
    else if(email.length == 0){
        alert('Please fill in email');
    }
    else if(phone.length == 0){
        alert('Please fill in phone');
    }
    else if(password.length == 0){
        alert('Please fill in password');
    }
    else if(name.length == 0 &&email.length == 0 && phone.length == 0 && password.length == 0 ){
        alert('Please fill in the requiered Details');
    }
    else if(name.length < 3 ){
        alert('Name length should be greater than 3 characters')
    }
    else if (phone.length > 0 && phone.length < 10){
        alert('Phone number must be at least 10 characters')
    }
    else if (password.length < 8){
        alert('Password should be at least 8 characters')
    }
    else if(!password.match(numbers)){
        alert('please add one number');
    }
    else if(!password.match(uppercaseLetter)){
        alert('please add one uppercase letter');
    }
    else if(!password.match(lowercaseLetter)){
        alert('please add one lowercase letter');
    }
    else{   
        let user = JSON.parse(localStorage.getItem("users")) || [];

       let object = {
        name,
        email,
        phone,
        password
       }

       user.push(object);
       console.log(object);
       console.log(user);
       localStorage.setItem("users",JSON.stringify(user));
       alert('CONGRATULATIONS!! Your accoount is created. Now go to log in page to sign in.');

        name.value = null;
        email.value = null;
        phone.value = null;
        password.value = null;
       
    }

}


// login js code
function signIn(e){

    let data = JSON.parse(localStorage.getItem('users'));

    let userEmail = document.getElementById("uEmail").value;
    let userPassword= document.getElementById("uPassword").value;

    for(let i=0; i<data.length; i++){
        if((data[i].email == userEmail)&& (data[i].password == userPassword)) {
            alert("Congratulation!! you have successfully Logged In ");
            window.location.href = "index.html";
    
        }else{
            alert("Error in loggin. Invalid Credentials");
            console.log("local email", data[i].emial);
            console.log("stored", userEmail);
            console.log("local pass", data[i].password);
            console.log("stored", userPassword);
        }
    }
    userEmail.value = null;
    userPassword.value = null;

}