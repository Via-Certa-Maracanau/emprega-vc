iconList = document.getElementsByClassName("iconList")

for(i = 0; i < iconList.length; i++) {
    iconList[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480-360 280-560h400L480-360Z"/></svg>`
}

function verificarLista(id, i) {
    lista = document.getElementById(id)

    if(lista.style.display == "unset") {
        fechar(lista)
        iconList[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="M480-360 280-560h400L480-360Z"/></svg>`
    }
    else {
        abri(lista)
        iconList[i].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#696969"><path d="m280-400 200-200 200 200H280Z"/></svg>`
    }
}

function abri(lista) {
    lista.style.display = "unset"
}

function fechar(lista) {
    lista.style.display = "none"
}