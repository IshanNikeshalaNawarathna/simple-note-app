function saveNote() {
    var note = document.getElementById("note-text").value;

    if (note === "") {
        document.getElementById("error").innerText = 'Please Type note';
        document.getElementById("error").setAttribute("style", "color:red;");
    } else {
        const note_list = document.getElementById("note-list");
        const li = document.createElement("li");
        li.textContent = note;
        note_list.appendChild(li);
        document.getElementById("error").innerText = '';
        document.getElementById("note-text").value = '';
    }


}