var listelement = document.querySelector("#app ul");
var inputelement = document.querySelector("#app input");
var buttonelement = document.querySelector("#app button");

var todos = ["café", "Estudar"];

function renderTodos() {
  listelement.innerHTML = "";

  for (todo of todos) {
    var todoelement = document.createElement("li");
    var todotext = document.createTextNode(todo);

    var linkelement = document.createElement("a");

    linkelement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkelement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    var linktext = document.createTextNode("Excluir");

    linkelement.appendChild(linktext);

    todoelement.appendChild(todotext);
    todoelement.appendChild(linkelement);

    listelement.appendChild(todoelement);
  }
}
renderTodos();

function addTodo() {
  var todotext = inputelement.value;

  todos.push(todotext);
  inputelement.value = "";
  renderTodos();
}

buttonelement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
}
