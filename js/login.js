//Datos anteriormente quemados con usuarios y contraseñas
const usuariosRegistrados = [
  {
    email: "juand.potes@gmail.com",
    password: "admin12345678901",
  },
  {
    email: "daniel.meza@gmail.com",
    password: "admin09876543212",
  },
  {
    email: "admin@gmail.com",
    password: "juandaniel1234567",
  },
];

const login = () => {
  //Obtenemos los objetos de html y los guardamo en variables
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  //Buscamos si el usuario ingresado esta en nuestro arreglo, si sí esta, lo redirigimos, de lo contrario, sacamos mensaje de error
  if (
    usuariosRegistrados.find(
      (usuario) => usuario.email === email && usuario.password === password
    )
  ) {
    window.location.href = "inicio.html";
  } else {
    
    alert("El mail o contraseña no existen");
  }
};
