 
const elInput = document.querySelector('.input');
const elBtnAdd = document.querySelector('.btn-add');
const elUl = document.querySelector('ul');
const elEmpty = document.querySelector('empty');

elBtnAdd.addEventListener("click", (e) => {
   e.preventDefault();
   
   const text = elInput.value;
   const li = document.createElement("li");
   const p = document.createElement("p");

   p.textContent = text;

   li.appendChild(p);
   li.appendChild(addDeleteBtn());
   elUl.appendChild(li);

   elInput.value = "";
   
});

function addDeleteBtn(){
   const deleteBtn = document.createElement("button");

   deleteBtn.textContent = "x";
   deleteBtn.className = "btn-delete";

   deleteBtn.style.backgroundColor = "red";
   deleteBtn.style.border = "none";
   deleteBtn.style.width = "20px";
   deleteBtn.style.height = "26px";
   deleteBtn.style.color = "#fff";

   
   deleteBtn.addEventListener("click", (e) =>{
      const item = e.target.parentElement;
      elUl.removeChild(item);
   });
   return deleteBtn;
}