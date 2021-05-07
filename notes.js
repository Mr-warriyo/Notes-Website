const addBtn = document.getElementById('addbtn')
addBtn.addEventListener('click', function(e) {

    let addTxt = document.getElementById('addtxt')
    let notes = localStorage.getItem('notes')    




    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes)
    }


    notesObj.push(addTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))

    addTxt.value = ""
    showNotes()
})

function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        let notesObj = []
    } else {
        let notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> Note ${index + 1} → </h5>
   <p class="card-text"> ${element} </p>
    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary"> Delete Note </button>
  </div>
  </div>`
    })
    let notesElm = document.getElementById('notes')

  

    if (notes.length != 0) {
     notesElm.innerHTML = html;
    } else if (notes.length == 0)  {
        notesElm.innerHTML = html;
    }


}

function deleteNote(index) {
     let notes = localStorage.getItem('notes')
    if (notes == null) {
        let notesObj = [];
    } else {
        let notesObj = JSON.parse(notes);
    }
   notesObj.splice(index, 1)
     localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes();
}

let search = document.getElementById('searchTxt')


search.addEventListener('input', function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;

    if (cardTxt.includes(inputVal)) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }    
    })
})

function load(url) {
    // display loading image here...
    document.getElementById('loadingImg').visible = true;
    // request your data...
    var req = new XMLHttpRequest();
    req.open("POST", url, true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            // content is loaded...hide the gif and display the content...
            if (req.responseText) {
                document.getElementById('Loading X-Notes').innerHTML = req.responseText;
                document.getElementById('https://media.tenor.com/images/a6cb27de58231496ce0c63b83c5dd652/tenor.gif').visible = false;
            }
        }
    };
    request.send(vars);
}

