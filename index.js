const noteInputTA = document.querySelector('#create-note')
const submitNoteBtn = document.querySelector('#submit-note-btn')
const pastNotesList = document.querySelector('#past-note-list')

const closeToast = document.querySelector('#close-toast')

const toast = document.querySelector('#toast')

const remove = document.querySelector('.remove')



submitNoteBtn.addEventListener('click', function(){

    if (noteInputTA.value === ""){
        showToast()
    } else{
        let pastNotes = document.createElement('li')
        pastNotes.textContent = noteInputTA.value
        pastNotesList.appendChild(pastNotes)

        let removeNote = document.createElement("button")
        removeNote.innerHTML = `<span class="material-symbols-outlined">delete</span>`
        pastNotes.appendChild(removeNote)

        noteInputTA.value = ""
        SaveLS()
    }

    
})

pastNotesList.addEventListener('click', function(e){
    let clickTarget = e.target

    if (clickTarget.tagName === "SPAN"){
        clickTarget.parentElement.parentElement.remove()
        SaveLS()
    }
})

function showToast(){
    toast.style.display = "block"
}

closeToast.addEventListener('click', function(){
    toast.style.display = "none"
})

function SaveLS(){
    localStorage.setItem('pastNotes', pastNotesList.innerHTML)
}

function RenderLS(){
    pastNotesList.innerHTML = localStorage.getItem('pastNotes')
}

RenderLS()