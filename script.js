let TaskCount = 0

onload = () =>{

  main.innerHTML = localStorage.getItem('tasks')
  if(main != ""){
    let imgs = document.querySelectorAll('img')

    imgs.forEach(element => { 
      element.addEventListener('click',clearTask)
      let toggle = document.querySelectorAll(".toggle");
    toggle.forEach((element) => {
      element.addEventListener("click", toggleAnimation);
    });
  });
  }

}

function toggleAnimation() {
  if (this.style.backgroundColor != "lime") {
    this.style.backgroundColor = 'lime'
    this.children[0].style.animationName = "toggleOn";
  } else {
    this.style.backgroundColor = 'red'
    this.children[0].style.animationName = "toggleOff";
  }
}

let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", createTask);



function createTask() {

  howManyTasks()

  let input = document.getElementsByTagName("input")[0];
  let main = document.getElementById("main");
  if (input.value == "") {
    alert("Informe uma tarefa");
  } else {
    createElement = (tipo) => {
      return document.createElement(tipo);
    };
    let content = createElement("div");
    content.classList.add("content");
    console.log(content);
    createContentOfContent(content, input)
    main.appendChild(content)

    let toggle = document.querySelectorAll(".toggle");

    toggle.forEach((element) => {
      element.addEventListener("click", toggleAnimation);
    });
    
 let imgs = document.querySelectorAll('img')

  imgs.forEach(element => { 
    element.addEventListener('click',clearTask)
});

  localStorage.setItem('tasks',main.innerHTML)
  input.value = ""
  input.focus()
  }
}
let tasks = document.getElementById('task')
function howManyTasks(){
  TaskCount++
  tasks.innerHTML = "Tasks: " + TaskCount
}

function createContentOfContent(content, input) {
  createPDiv(content, input);
  createDivOptions(content);
}

function createPDiv(content, input) {
  let divP = document.createElement('div')
  divP.classList.add('divP')
  let p = createElement("p");
  p.innerHTML = String(input.value).toLowerCase()
  divP.appendChild(p);
  content.appendChild(divP)
}

function createDivOptions(content) {
  let divOptions = document.createElement("div");
  divOptions.id = "options";
  createImg(divOptions);
  createToggle(divOptions);
  content.appendChild(divOptions);
}

function createImg(content) {
  let img = document.createElement("img");
  img.src = "/images/Recycle-Bin-30.png";
  img.id = "bin";
  content.appendChild(img);
}
function createToggle(content) {
  let toggle = document.createElement("span");
  toggle.classList.add("toggle");
  let icon = document.createElement("div");
  icon.classList.add("icon");
  toggle.appendChild(icon);
  content.appendChild(toggle);
}

function clearTask(){
  TaskCount--
  tasks.innerHTML = "Tasks: " + TaskCount
  let elemento = this.parentElement.parentElement
  elemento.parentElement.removeChild(elemento)
  localStorage.setItem('tasks',main.innerHTML)
}
