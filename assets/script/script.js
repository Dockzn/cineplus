const apiKey =  'eb519aeb'
const frmPesquisa = document.querySelector("form")

frmPesquisa.onsubmit = (ev) =>{
    ev.preventDefault()

    const pesquisa = ev.target.pesquisa.value

    if(pesquisa == ""){
        alert("Preencha o campo nescessario!")
        return
    }
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
    .then(result => result.json())
    .then(json => carregaLista(json))
}

    const carregaLista = (json) => {
        const lista = document.querySelector('div.lista')
        lista.innerHTML = ''

        if (json.Response == "False"){
            alert("Nenhum titulo encontrado.\nObs: Procure pelo titulo em inglês!")
            return
        } 

        json.Search.forEach(element => {

            let item = document.createElement("div")
            item.classList.add("item")

            item.innerHTML =`<img src="${element.Poster}" /><h2>${element.Title}</h2> <h2>- ${element.Year} </h2>`

            lista.appendChild(item);
        })
}