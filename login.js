// CAPTURANDO DADOS DO FORM DE LOGIN
let loginForm = document.getElementById('loginForm')
function login() {
    let checkUser = {
        username: loginForm.emailLogin.value,
        password: loginForm.loginPass.value,
    }
    //VERIFICA DADOS NULOS OU INVÁLIDOS
   if (checkUser.username.length == 0 || checkUser.password.length == 0){
       alert('Ops! Parece que os dados estão incorretos. Verifique e tente novamente :)')
   }
     // TESTANDO DADOS RETORNADOS DO FORM    
        console.log(checkUser.username)
        console.log(checkUser.password)
        //CAPTURANDO OS DADOS DO LOCALSTORAGE
        let userJSON = localStorage.getItem(checkUser.username);
        let userData = JSON.parse(userJSON);
        let userPass = userData.password;
        let userName = userData.username;    
    //TESTANDO DADOS RETORNADOS PARA VERIFICAR LOGIN
    console.log(userData)
    //FORMATANDO VARIÁVEIS DINAMICAS DO LOGIN
    let userLocalStorage = userName;
    let passLocalStorage = userPass;
    let userTyped = checkUser.username;
    let passTyped = checkUser.password;
    //VERIFICANDO OS DADOS MAIS UMA VEZ
    console.log(userLocalStorage, userTyped, passLocalStorage, passTyped)
    console.log(`A senha do usuário ${userName} gravada no Localstorage é ${userPass}.`) 
    console.log(`O usuário digitado foi ${checkUser.username}, e a senha informada foi ${checkUser.password}.`)
    console.log(`Será que vai logar certinho?`)    
    //FAZ A VALIDAÇÃO DOS DADOS CAPTURADOS. SE OK, VAI PRO HOME, SENÃO DÁ UM ALERT
    if (userTyped == userLocalStorage && passTyped == passLocalStorage){
        sessionStorage.setItem('activeUser', userLocalStorage)
        location.replace('recados.html')
    } else {
        alert('Ops! Parece que os dados estão incorretos. Verifique e tente novamente :)')
    }

}