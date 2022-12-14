document.querySelector(".errorName").style.display= "none"
document.querySelector(".correctName").style.display= "none"
document.querySelector(".correctEmail").style.display= "none"
document.querySelector('.errorEmail').style.display = 'none';
document.querySelector(".correctClave").style.display= "none"
document.querySelector('.errorClave').style.display = 'none';
document.querySelector(".correctConfirmClave").style.display= "none"
document.querySelector('.errorConfirmClave').style.display = 'none';
function validateName() {
    let name = document.querySelector('input[name="name"]').value;
    let inputName = document.querySelector('.name')
    if (name==""){
        document.querySelector(".rellenarN").style.display= "inline"
        document.querySelector(".errorName").style.display= "inline"
        document.querySelector(".rellenarN").innerHTML= "Rellene este campo"
        inputName.style.border= "2px solid red"
        document.querySelector(".correctName").style.display= "none"
        return false;
    } else {
        if(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(name)){
        inputName.style.border= "2px solid green"
        document.querySelector(".rellenarN").style.display= "none"
        document.querySelector(".errorName").style.display= "none"
        document.querySelector(".correctName").style.display= "inline"
        return true;
        }
        else {
            document.querySelector(".rellenarN").style.display= "inline"
            document.querySelector(".errorName").style.display= "inline"
            document.querySelector(".rellenarN").innerHTML= "Solo admite texto, no números"
            inputName.style.border= "2px solid red"
            document.querySelector(".correctName").style.display= "none"
            return false;
            }
        }            
}
function validateEmail(){       
    let email = document.querySelector('input[name="email"]').value;
    let inputEmail = document.querySelector('.email')
    if (email ==""){
        document.querySelector(".rellenarE").innerHTML= "Rellene este campo"
        inputEmail.style.border= "2px solid red"
        document.querySelector(".correctEmail").style.display= "none"
        document.querySelector('.errorEmail').style.display = 'inline';
        return false;
    } else {
        if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
            inputEmail.style.border= "2px solid green"
            document.querySelector(".rellenarE").style.display= "none"
            document.querySelector('.errorEmail').style.display = 'none';
            document.querySelector(".correctEmail").style.display= "inline"
            return true;     
        }
        else {
            document.querySelector(".rellenarE").style.display= "inline"
            document.querySelector(".rellenarE").innerHTML= "Email inválido"
            document.querySelector(".correctEmail").style.display= "none"
            document.querySelector('.errorEmail').style.display = 'inline';
            inputEmail.style.border= "2px solid red"
            return false;
            }
        }   
    }
 
function validateClave() {
    let clave = document.querySelector('input[name=clave]').value;
    let inputClave = document.querySelector('.clave')
    if (clave==""){
            document.querySelector(".rellenarC").innerHTML= "Rellene este campo"
            inputClave.style.border= "2px solid red"
            document.querySelector(".correctClave").style.display= "none"
            document.querySelector('.errorClave').style.display = 'inline';
            return false;
    } else {
        if(clave.length >=9 ){
            document.querySelector(".rellenarC").style.display= "inline"
            document.querySelector(".rellenarC").innerHTML= "No debe tener más de 8 carácteres"
            inputClave.style.border= "2px solid red"
            document.querySelector(".correctClave").style.display= "none"
            document.querySelector('.errorClave').style.display = 'inline';
            return false;
                }
        else {
            inputClave.style.border= "2px solid green"
            document.querySelector(".rellenarC").style.display= "none"
            document.querySelector('.errorClave').style.display = 'none';
            document.querySelector(".correctClave").style.display= "inline"
            return true;
            
        }
    }
} 
    
function validateConfirmClave() {
    let confirmClave = document.querySelector('input[name=confirmClave]').value;
    let inputConfirm = document.querySelector('.confirmClave')
    let clave = document.querySelector('input[name=clave]').value;
    if (confirmClave==""){
        document.querySelector(".rellenarCC").innerHTML= "Rellene este campo"
        inputConfirm.style.border= "2px solid red"
        document.querySelector(".correctConfirmClave").style.display= "none"
        document.querySelector('.errorConfirmClave').style.display = 'inline';
        return false;
    } else {
        if (confirmClave != clave){
            document.querySelector(".rellenarCC").style.display= "inline"
            document.querySelector(".rellenarCC").innerHTML= "Las contraseñas no coinciden"
            inputConfirm.style.border= "2px solid red"
            document.querySelector(".correctConfirmClave").style.display= "none"
            document.querySelector('.errorConfirmClave').style.display = 'inline';
            return false;
        }

        else if (confirmClave === clave) {
            inputConfirm.style.border= "2px solid green"
            document.querySelector(".rellenarCC").style.display= "none"
            document.querySelector(".correctConfirmClave").style.display= "inline"
            document.querySelector('.errorConfirmClave').style.display = 'none'
            return true;
        }
    }
} 


btnEnviar.addEventListener ("click", (e) => {
    if (e.target.matches("button")){
        if (validateName() === false & validateEmail()=== false & validateClave()===false & validateConfirmClave()===false){
            alert ("Rellena correctamente todos los campos");
        }
        else if(validateName() === true & validateEmail()=== true & validateClave()===true & validateConfirmClave()===true){
         alert ("La inscripción ha sido corrrecta");
        }
    }
});
