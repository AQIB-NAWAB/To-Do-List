let addBtn=document.getElementById("addBtn");
let inputField=document.getElementById("inputField");
let paragraph_container=document.getElementById("list_Container");
let list=document.querySelector("ul");


addBtn.addEventListener("click",function valueReturn(){
    let paragraph=document.createElement('li');
    paragraph.innerHTML=inputField.value;
    paragraph_container.appendChild(paragraph);
    paragraph.classList.add("paragraph");
    inputField.value="";    
    paragraph.addEventListener("click",()=>{
        paragraph.style.textDecoration="line-through";
        paragraph.style.color="red"
    });
    paragraph.addEventListener("dblclick",()=>{
        paragraph.remove()
    });
});
inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("addBtn").click();
    }
  });
  