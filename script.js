let text = document.getElementById('input-text');
let submit = document.getElementById('input-submit');
let showedText = document.getElementById('showed-text');
let showedTodo = document.getElementById('showed-todo');
let gridContainer = document.getElementById('grid');
let deleteTxt = document.getElementById('delete');
showNotes();


submit.addEventListener('click', ()=>{
    let notes = localStorage.getItem('notes');
    console.log(notes)

    if (notes == null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    if(text.value != ""){
        localStorage.setItem('notes', JSON.stringify(notesObj));
        text.value = "";
        notesObj.push(text.value);
    }
    showNotes();

 })



// function to show notes from localstorage
function showNotes(){
    let notes = localStorage.getItem('notes');
    
    if (notes == null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = '';

        notesObj.forEach((elem, index)=>{
            html += `
            <div id="showed-todo" class="grid-item">
            <h3>Note ${index + 1}</h3>
            <div id="showed-text">${elem}
            </div>
            <button class="input-submit" id="${index}" onclick="deleteNote(this.id)">Delete</button>
          </div>
            `
        })

    if (notesObj.length != 0){
        gridContainer.innerHTML = html;

    }
    else{
        gridContainer.innerHTML =` Nothing to Show! Use Add note section to Add note`
    }
}

// function to delete a note
function deleteNote (index){
    let notes = localStorage.getItem('notes');
    
    if (notes == null){
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


