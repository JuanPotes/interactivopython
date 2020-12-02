
function validacion(){
var mail = document.querySelector("#email");
mail.addEventListener("keyup", function(){
    var u_times = document.querySelector(".u_times");
    var u_check = document.querySelector(".u_check");
    if(mail.value.length == "" || mail.value.length <=10){
        mail.style.border = "1px solid red";
        u_times.style.display = "block";
        u_check.style.display = "none";
        return false;
    }else{
        mail.style.border = "1px solid green";
        u_times.style.display = "none";
        u_check.style.display = "block";
    }
})
var pass = document.querySelector("#password");
pass.addEventListener("keyup", function(){
    var p_times = document.querySelector(".p_times");
    var p_check = document.querySelector(".p_check");
    if(pass.value.length == "" || pass.value.length <=10){
        pass.style.border = "1px solid red";
        p_times.style.display = "block";
        p_check.style.display = "none";
        return false;
    }else{
        pass.style.border = "1px solid green";
        p_times.style.display = "none";
        p_check.style.display = "block";
    }
})

var mailregister = document.querySelector("#emailregister");
mailregister.addEventListener("keyup", function(){
    var h_times = document.querySelector(".h_times");
    var h_check = document.querySelector(".h_check");
    if(mailregister.value.length == "" || mailregister.value.length <=10){
        mailregister.style.border = "1px solid red";
        h_times.style.display = "block";
        h_check.style.display = "none";
        return false;
    }else{
        mailregister.style.border = "1px solid green";
        h_times.style.display = "none";
        h_check.style.display = "block";
    }
})

var passregister = document.querySelector("#passwordregister");
passregister.addEventListener("keyup", function(){
    var n_times = document.querySelector(".n_times");
    var n_check = document.querySelector(".n_check");
    if(passregister.value.length == "" || passregister.value.length <=10){
        passregister.style.border = "1px solid red";
        n_times.style.display = "block";
        n_check.style.display = "none";
        return false;
    }else{
        passregister.style.border = "1px solid green";
        n_times.style.display = "none";
        n_check.style.display = "block";
    }
})

var passconfirm = document.querySelector("#confirmpassword");
passconfirm.addEventListener("keyup", function(){
    var d_times = document.querySelector(".d_times");
    var d_check = document.querySelector(".d_check");
    if(passregister.value!=passconfirm.value || passconfirm.value.length==""){
        passconfirm.style.border = "1px solid red";
        d_times.style.display = "block";
        d_check.style.display = "none";
        
        return false;
    }else{
        passconfirm.style.border = "1px solid green";
        d_times.style.display = "none";
        d_check.style.display = "block";
    }
})

}
    



 