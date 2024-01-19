const elements = document.querySelectorAll(".faq");
elements.forEach(element =>{
     element.addEventListener("click", ()=>{
        element.classList.toggle("active");
     });
})