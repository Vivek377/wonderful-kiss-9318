let open = document.getElementById("open")
let close = document.getElementById("remove")
let slider = document.getElementById("slider")

open.addEventListener("click", function () {
	slider.style.display = "block"
})

close.addEventListener("click", function () {
	slider.style.display = "none"
})