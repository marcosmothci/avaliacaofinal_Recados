// captura o formulário
let regForm = document.getElementById('registerForm')
//CAPTURA OS DADOS DO NOVO USUARIO 
let username = regForm.userID.value;
let password = regForm.pass.value;
let pass2 = regForm.passRepeat.value
let messages = [];

function register() { 
    let newUser = {
        username: regForm.userID.value,
        password: regForm.pass.value,        
        messages: [],
    }

    if (newUser.username.length == 0 || newUser.password.length == 0){
        alert('Ops! Parece que os dados estão incorretos. Verifique e tente novamente :)')
        return
    }

    // TESTANDO DADOS DO USUARIO SENDO ENVIADOS
  /*   console.log(newUser.username)
    console.log(newUser.password)
    console.log(newUser.messages) */

    let newUserJSON = JSON.stringify(newUser)
    let chaveJSON = newUser.username    // CAPTURA O USERNAME PRA USAR COMO KEY NA HORA DE SALVAR NO LOCALSTORAGE            

    function gravaLocalStorage() {
        if ((regForm.pass.value == regForm.passRepeat.value) && localStorage.getItem(chaveJSON) == null) {
            localStorage.setItem(chaveJSON, newUserJSON);
            alert('Cadastro efetuado com sucesso!');
            location.replace('login.html');
        } else {
            alert('Confirme os dados, a senha e tente novamente.');
            return
        }}        
    gravaLocalStorage();   
}