let parent = document.getElementById("parent")
let de = document.getElementById("de")
let mr = document.getElementById("mp")
let open = document.getElementById("open")
let close = document.getElementById("remove")
let slider = document.getElementById("slider")
let detailed = JSON.parse(localStorage.getItem("details"))

open.addEventListener("click", function () {
    slider.style.display = "block"
})

close.addEventListener("click", function () {
    slider.style.display = "none"
})

function renderDOM(detailed) {

    let div = document.createElement("div")
    let img = document.createElement("img")
    let heading = document.createElement("h1")
    let para = document.createElement("p")

    img.src = detailed.img
    heading.innerText = detailed.heading
    para.innerText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tempora distinctio incidunt enim sequi quaerat delectus dolore, dicta eligendi, animi ad quibusdam maiores ex nulla soluta architecto at, aliquam ab
    Id magni dolorum dolorem sint molestiae adipisci inventore deleniti laboriosam error qui veniam, earum eveniet dicta obcaecati, vero eaque quae alias velit aperiam voluptatibus quidem eius. Ratione sapiente qui repudiandae?
    Sit cum ea possimus optio tempora animi nulla, sed, incidunt adipisci iste maiores, ad repellendus? Quasi, mollitia id. Vitae, quisquam distinctio! Explicabo molestiae sed ipsam dolore eos fugit ipsa soluta?
    Nihil cupiditate possimus provident ipsam, vero asperiores consectetur, excepturi temporibus id maiores qui quos corrupti aperiam dolore repellat pariatur iusto optio. Amet, repellat. In, neque. Totam fugiat temporibus explicabo animi.
    Accusamus, odio commodi cupiditate voluptatibus nesciunt inventore animi facere praesentium est eum accusantium repellat tempora consequatur libero nihil temporibus. Ullam harum nemo sunt voluptates odit voluptatum dolore mollitia odio incidunt.
    Ratione inventore suscipit ipsam quas facilis sit tempore dolores maxime. Debitis tempora maxime minima, laborum itaque, beatae laudantium error repellendus sapiente dolorum consectetur dicta totam, optio recusandae tenetur ducimus sunt!
    Numquam quas voluptates eius. Ipsum omnis cumque aut eius officia aspernatur, optio ducimus consequuntur sequi laborum nostrum quidem natus modi ad libero iusto asperiores? Excepturi eligendi enim quaerat nobis natus.
    Optio dolore quibusdam eius ducimus omnis quis eaque ipsum, eligendi sapiente dolorem laudantium est impedit doloribus ullam! Amet corrupti quidem aliquid sit ipsam repellat sequi. Molestias ratione mollitia aut ab!
    Dolorum vel nemo, sed odio eveniet magni, perspiciatis saepe odit optio officia fuga, praesentium dicta doloribus facilis rem deleniti nobis minus ipsa accusantium? Laborum est nihil tempore explicabo voluptates repudiandae!
    Delectus eius, error dignissimos perspiciatis explicabo corporis cumque hic rerum quibusdam adipisci ratione, quo facere odio incidunt exercitationem perferendis repudiandae. Doloribus porro odio velit pariatur, fuga sequi reprehenderit officiis ipsa?`

    para.style.fontSize = "1rem"
    para.style.marginTop = "2rem"
    para.style.fontWeight = "100"
    img.style.marginTop = "2rem"
    img.style.width = "90%"

    div.append(heading, img, para)
    de.append(div)
}

function display(data) {
    data.forEach(function (ele) {
        let big = document.createElement("div")
        let img = document.createElement("img")
        let heading = document.createElement("h4")

        img.src = ele.img
        heading.innerText = ele.heading

        img.addEventListener("click", function () {
            Func(ele)
        })

        big.style.backgroundColor = "#f6f6f6"
        heading.style.marginLeft = "1em"
        console.log(mr);

        big.append(img, heading)
        mr.append(big)
    })
}

function Func(ele) {
    localStorage.setItem("details", JSON.stringify(ele))
    window.location.href = "./detailed.html"
}

display(morePicks)
renderDOM(detailed)