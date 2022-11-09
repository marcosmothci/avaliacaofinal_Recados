//CAPTURANDO ELEMENTOS DOS RECADOS
let noteForm = document.getElementById('noteForm');
let getActiveUser = sessionStorage.getItem('activeUser');
let userDataJSON = localStorage.getItem(getActiveUser);
let actualUser = JSON.parse(userDataJSON)
//console.log(`O nome do usuário ativo no momento é ${actualUser.username}`)
//console.log(`A senha do usuário ativo no momento é ${actualUser.password}`)
//console.log(`Os recados do usuário ativo no momento são ${(typeof actualUser.messages)}`) 
let actualName = actualUser.username;
let actualPass = actualUser.password;
let actualNotes = actualUser.messages;
//console.log(actualName)
//console.log(actualPass)
//console.log(actualNotes)
function saveNote() {
    let newNote = {
        noteId: Math.floor((Math.random() * 1004.75) + 7),
        noteTitle: noteForm.noteTitle.value,
        noteText: noteForm.noteText.value
    }
    actualNotes.push(newNote)
    let updatedUser = {
        username: actualName,
        password: actualPass,
        messages: actualNotes
    }
    let actualJSON = JSON.stringify(updatedUser)
    localStorage.setItem(actualName, actualJSON)
    location.reload()
}
//CAPTURANDO TABLE
let noteTable = document.getElementById('noteTable')
//MONTANDO NOVA LINHA NA TABLE
function mountTable() {
    actualNotes.forEach(note => {
        let newTR = document.createElement('tr')
        newTR.setAttribute("overflow-wrap", "break-word")
        let newIdTd = document.createElement('td');
        newIdTd.innerHTML = note.noteId;
        newIdTd.classList.add("p-1")
        let newTitleTd = document.createElement('td');
        newTitleTd.innerHTML = note.noteTitle;
        newTitleTd.classList.add("p-1")
        let newTextTd = document.createElement('td');
        newTextTd.innerHTML = note.noteText;
        newTextTd.classList.add("p-1")
        let newBtnsTd = document.createElement('td');
        let newDeleteBtn = document.createElement('button');
        newDeleteBtn.setAttribute('id', 'deleteBtn');
        newDeleteBtn.setAttribute('onclick', 'deleteNote(this)');
        newDeleteBtn.className = "btn btn-danger m-2"
        newDeleteBtn.innerText = 'Apagar';
        let newUpdateBtn = document.createElement('button');
        newUpdateBtn.setAttribute('id', 'updateBtn');
        newUpdateBtn.setAttribute('onclick', 'updateNote(this)');
        newUpdateBtn.className = "btn btn-success m-2"
        newUpdateBtn.innerText = 'Atualizar';
        newBtnsTd.appendChild(newDeleteBtn);
        newBtnsTd.appendChild(newUpdateBtn);
        newTR.appendChild(newIdTd);
        newTR.appendChild(newTitleTd);
        newTR.appendChild(newTextTd);
        newTR.appendChild(newBtnsTd);
        newTR.setAttribute('id', `${note.noteId}`);
        noteTable.appendChild(newTR);
    })
};
window.addEventListener('DOMContentLoaded', (event) => {
    mountTable()
});
function deleteNote(row) {
    let idDelete = parseInt(row.parentNode.parentNode.children[0].textContent);
    let fromStorage = JSON.parse(localStorage.getItem(actualName));

    let a = fromStorage.messages;
    let deletado = a.splice(a.findIndex(
        message => message.noteId == idDelete)
        , 1);

    localStorage.setItem(actualName, JSON.stringify(fromStorage))
    location.reload();
}
function logout() {
    sessionStorage.clear()
    location.replace('login.html')
}

function updateNote(row) {
    
    console.log(row.parentNode.parentNode)
    
    let idUpdate = parseInt(row.parentNode.parentNode.children[0].textContent);
    let fromStorage = JSON.parse(localStorage.getItem(actualName));
    let a = fromStorage.messages;
    let alterado = a.findIndex(message => message.noteId == idUpdate);
    
    noteForm.noteTitle.value = a[alterado].noteTitle;
    noteForm.noteText.value = a[alterado].noteText;
  
    changeButton();
    
    let botaoQueAgoraAtualiza = document.querySelector("#saveNotes");
    
    botaoQueAgoraAtualiza.onclick = function () {
  
        a[alterado].noteTitle = noteForm.noteTitle.value;
        a[alterado].noteText = noteForm.noteText.value;
        
        localStorage.setItem(actualName, JSON.stringify(fromStorage));
        location.reload();
    }
}

function changeButton() {
    document.getElementById('saveNotes').innerText = 'Confirmar';    
}