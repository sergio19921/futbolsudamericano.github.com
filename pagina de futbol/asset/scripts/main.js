let elementlist = document.querySelectorAll(".fa-star");

elementlist.forEach(function (element) {
    element.addEventListener('click',function() {
        alert("estrellita seleccionada");
        element.classList.remove("far");
        element.classList.add("fas");
    })
})