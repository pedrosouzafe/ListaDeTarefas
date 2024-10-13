let cont = 0;
let input = document.querySelector('#input');
let btnAdd = document.querySelector('#btnAdd');
let main = document.querySelector('#areaLista');

function addTarefa() {
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++cont;
        let novoItem = `<div id="${cont}" class="item">
            <div onclick="marcar(${cont})" class="itemIcone">
                <i id="icone_${cont}" class="material-icons-outlined">circle</i>
            </div>
            <div onclick="marcar(${cont})" class="itemNome">${valorInput}</div>
            <div class="itemBotao">
                <button onclick="deletar(${cont})" class="delete">Deletar</button>
            </div>
        </div>`;

        main.insertAdjacentHTML('beforeend', novoItem);
        input.value = '';
        input.focus();
    }
}

function deletar(id) {
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcar(id) {
    let item = document.getElementById(id);
    let classe = item.className;

    if (classe === "item") {
        item.classList.add("itemClicado");
        let icone = document.getElementById("icone_" + id);
        icone.innerHTML = "check_circle";
        icone.id = 'iconeClic';

        item.parentNode.appendChild(item)
    } else {
        item.classList.remove("itemClicado");
        let icone = document.getElementById("iconeClic");
        icone.innerHTML = "circle";

        icone.id = 'icone_' + id;
    }
}

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
