
let elShowModal = document.querySelector(".show-modal");
let elModal = document.querySelector(".modal");
let elCloseBtn = document.querySelector(".close-modal");
let elOverlay = document.querySelector(".overlay");


elShowModal.addEventListener("click" , ()=>{
   elModal.classList.remove("hidden");
   elShowModal.classList.add("hidden")
});

elCloseBtn.addEventListener("click" , ()=>{
   elModal.classList.add("hidden");
   elOverlay.classList.add("hidden");
   elShowModal.classList.remove("hidden");
});

elShowModal.addEventListener("click" , ()=>{
   elOverlay.classList.remove("hidden");
});

elOverlay.addEventListener("click" , ()=>{
   elModal.classList.add("hidden");
   elShowModal.classList.remove("hidden");
   elOverlay.classList.add("hidden");
})