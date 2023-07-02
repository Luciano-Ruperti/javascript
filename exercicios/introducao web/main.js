function addNewTask() {
    var list = document.getElementById('list');
    var text = document.getElementById('task_name').value;
    if(text.length == 0) {
        alert('Tarefa precisa ter ao menos 1 caracter');
        return;
    }
    var lisItem = document.createElement('li');
    var textElement = document.createTextNode(text);
    lisItem.className = 'list-item';
    lisItem.appendChild(textElement);
    list.appendChild(lisItem)
    
}
