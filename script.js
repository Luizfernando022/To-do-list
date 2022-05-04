let main = document.getElementById("main");
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
  howManyTasks()

}

function toggleAnimation() {
  if (this.style.backgroundColor != "lime") {
    this.style.backgroundColor = 'lime'
    this.children[0].style.animationName = "toggleOn";
  } else {
    this.style.backgroundColor = 'rgb(25,26,26)'
    this.children[0].style.animationName = "toggleOff";
  }
  saveTasks()
}

let btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", createTask);



function createTask() {

  let input = document.getElementsByTagName("input")[0];
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

  saveTasks()
  input.value = ""
  input.focus()
  howManyTasks()
  }
}

function howManyTasks(){
  let task = document.getElementById('task')
  task.innerHTML = `Tasks: ${main.children.length}`
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
  img.src = "./images/Recycle-Bin-30.png";
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
  let elemento = this.parentElement.parentElement
 effectBeforeRemoveChild(elemento)

 setTimeout(()=>{
  elemento.parentElement.removeChild(elemento)
  howManyTasks()
  saveTasks()
 },1000)
 
}
function saveTasks(){
  localStorage.setItem('tasks',main.innerHTML)
}

 function effectBeforeRemoveChild(element){
   element.style.animationDuration = '1000ms'
   element.style.animationFillMode = "forwards"
   element.style.animationTimingFunction = "cubic-bezier(0.075, 0.82, 0.165, 1)"
  element.style.animationName = "effectRemove"
}
