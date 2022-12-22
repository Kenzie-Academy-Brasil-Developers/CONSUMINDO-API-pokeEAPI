const render = arr => {
    const mainList = document.querySelector(".main__list")

    mainList.innerHTML = ""

    arr.forEach(element => {
        const card = createCard(element)

        mainList.appendChild(card)
    });
}

const createCard = ({ url, name }) => {
    const container = document.createElement("li")
    const image = document.createElement("img")
    const p = document.createElement("p")

    container.className = "pokemon"


    const pokedexNumber = url.slice(34, -1)

    image.className = "pokemon__url"
    image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedexNumber}.png`
    image.alt = name

    p.className = "pokemon__name"
    p.innerText = name

    container.append(image, p)

    return container
}

const createCardSearched = element => {
    const container = document.createElement("li")
    const image = document.createElement("img")
    const p = document.createElement("p")

    container.className = "pokemon"

    image.className = "pokemon__url"
    image.src = element.sprites.front_default
    image.alt = element.name

    p.className = "pokemon__name"
    p.innerText = element.name

    container.append(image, p)

    return container
}

const createLoading = () => {
    const span = document.createElement("span")

    span.className = "carregando"
    span.innerText = "Carregando..."

    return span
}