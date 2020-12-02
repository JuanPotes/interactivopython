const loginBtn = document.querySelectorAll(".login-btn"),
      registrarBtn = document.querySelectorAll(".registrarse-btn"),
      contraPerdidaBtn = document.querySelectorAll(".contraseña-olvidada-btn");
      box = document.querySelector(".box"),
      loginForm = document.querySelector(".login-form"),
      registerForm = document.querySelector(".register-form"),
      lostPasswordForm = document.querySelector(".forgot-form");


registrarBtn.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        box.classList.add("slide-active");
        registerForm.classList.remove("form-hidden");
        loginForm.classList.add("form-hidden");
        lostPasswordForm.classList.add("form-hidden");

    });
});

loginBtn.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        box.classList.remove("slide-active");
        registerForm.classList.add("form-hidden");
        loginForm.classList.remove("form-hidden");
        lostPasswordForm.classList.add("form-hidden");

    });
});

contraPerdidaBtn.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        registerForm.classList.add("form-hidden");
        loginForm.classList.add("form-hidden");
        lostPasswordForm.classList.remove("form-hidden");
    });
});