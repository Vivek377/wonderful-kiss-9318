let open = document.getElementById("open")
let close = document.getElementById("remove")
let slider = document.getElementById("slider")
let container = document.getElementById("container")
let search = document.getElementById("search")

open.addEventListener("click", function () {
	slider.style.display = "block"
})

close.addEventListener("click", function () {
	slider.style.display = "none"
})

function renderDOM(data) {
	container.innerHTML = null

	data.forEach(function (ele) {
		let div = document.createElement("div")
		let img = document.createElement("img")
		let heading = document.createElement("h4")

		img.src = ele.img
		heading.innerText = ele.heading

		img.addEventListener("click", function () {
			Func(ele)
		})

		div.style.backgroundColor = "#f6f6f6"
		heading.style.marginLeft = "1em"

		div.append(img, heading)
		container.append(div)
	})
}

renderDOM(dataArr)

function Func(ele) {
	localStorage.setItem("details", JSON.stringify(ele))
	window.location.href = "./detailed.html"
}

let data = dataArr

search.addEventListener("input", function () {
	if (search.value === "") {
		data = dataArr
		renderDOM(data)
	} else {
		data = data.filter(function (ele) {
			return ele.category.toLowerCase().includes(search.value.toLowerCase())
		})
		renderDOM(data)
		console.log(data)
	}
})