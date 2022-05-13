let item = document.querySelectorAll(".item")

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        this.classList.add("active")

        data(this)
    })
}
function data(el) {
    for (let k = 0; k < item.length; k++) {``
      if (el == item[k]) {
         continue 
      }else{
          item[k].classList.remove("active")
      }
        
    }
}