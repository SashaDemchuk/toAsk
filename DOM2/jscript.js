const bodyTextChange = `
    <main>
        <header class="header"><h1>This is completely new cite!</h1></header>
        <nav>
            <ul style = "display: flex; border: 1px; borderColor: black; list-style-type: none;">
                <li><a href="#">Top</a></li>
                <li><a href="#">Midle top</a></li>
                <li><a href="#">Midle</a></li>
                <li><a href="#">Midle bottom</a></li>
                <li><a class="bottom" href="#">Bottom</a></li>            
            </ul>
        </nav>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore quod aperiam delectus nostrum? Ea, cumque neque. Labore, necessitatibus non? Vero illo consectetur quaerat? Explicabo molestias recusandae cumque corporis ex.
        </p>
    </main>
`
// document.body.innerHTML = bodyTextChange; альтернативний запис 19 і 20 рядків
const locationInHTML = document.body
locationInHTML.innerHTML = bodyTextChange
//додавання елементу. 22-26 рядок - ми типу створюємо елемент, але не вставляємо його, так?
const newElement = document.createElement ("img")
newElement.classList.add("hotImage")
newElement.setAttribute("src", "fire.png")
newElement.setAttribute("alt", "pshhhh")
newElement.setAttribute("title", "hot")
newElement.setAttribute("height", "100px")
newElement.setAttribute("width", "100px")
newElement.innerHTML = bodyTextChange 
// чого newElement після 27 рядка не вставляється на місце body (по аналогії з 19-20 рядками)?
locationInHTML.append(newElement)