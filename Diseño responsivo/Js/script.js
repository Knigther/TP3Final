const titulo = document.getElementById("uno");
titulo.innerText=("Z-tech ") + (" Bienvenido al mundo Tech ")


 function caracter(){
  const firstname = document.getElementById("nombre");
  const lastname = document.getElementById("apellido");
  const address = document.getElementById("direccion");
  const telephone = document.getElementById("telefno");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
    if (nombre.value === "" ){
       alert("escribe tu nombre");
       usuario.focus();
       return false;
    } 
    
      if (apellido.value===""){
        alert("escribe tu apellido");
        apellido.focus();
        return false;
      }

      if (direccion.value===""){
        alert("escribe tu dirección");
        direccion.focus();
        return false;
      }

      if (telefono.value ===""){
        alert("escribe tu telefono");
        telefono.focus();
        return false;
      }
      if(email.value===""){
        alert("falta tu E-mail");
        email.focus();
        return false;
      }
      if(password.value===""){
        alert("ingresa tu password");
        email.focus();
        return false;
      } 
        
        
    
 }

 
  
 

 






