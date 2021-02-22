/* ======= LOCALSTORAGE ======= */
window.onload = function() {
    var produtosString = localStorage.getItem('produtos');
    var produtos =  JSON.parse(produtosString);
    console.log(produtos)
    // Tamanho de "produtos"
    var tamanhoProdutos = produtos.length;
    console.log(tamanhoProdutos)
    for(var i = 0; i < tamanhoProdutos; i++){
        // TBODY
        var tbody = document.getElementById('tbody');
        var tr = document.createElement('tr');
        tr.setAttribute('id', i);
        // TD "NOME"
        var tdNome = document.createElement('td');
        // TD "PREÇO"
        var tdPreco = document.createElement('td');
        // TD "EDITAR"
        var tdEditar = document.createElement('td');
        // TD "DELETAR"
        var tdDeletar = document.createElement('td');
        tbody.appendChild(tr);
        tr.appendChild(tdNome);
        tr.appendChild(tdPreco);
        tr.appendChild(tdEditar);
        tr.appendChild(tdDeletar);
        tdNome.innerHTML = produtos[i].nome;
        tdPreco.innerHTML = produtos[i].preco;
        tdEditar.classList.add('editar');
        tdEditar.setAttribute('id', i);
        tdEditar.onclick = function(){
            document.getElementById('modal-2').style.top = "0";
        };  
        tdDeletar.classList.add('deletar');
        tdDeletar.setAttribute('id', i);
        console.log(produtos[i]);
    }   
}
/* ======= DELETAR ======= */
// Fecha o modal "deletar"
function fecharDeletar(){
    document.getElementById('modal').style.top = "-200%";
}
/* ======= EDITAR =======  */
// Fecha o modal "editar"
function fecharEditar(){
    document.getElementById('modal-2').style.top = "-200%";
}
// confirma o modal "editar"
function confirmarEditar(){
    document.getElementById('modal-2').style.top = "-200%";
}
/* ======= NOVO PRODUTO ========= */
// Abre o modal do novo produto
function novoProduto(){
    document.getElementById('modal-3').style.top = "0";
}
// Fecha o modal do novo produto
function fecharNovoProduto(){
    document.getElementById('modal-3').style.top = "-220%";
}
// confirma o modal do novo produto
function confirmarNovoProduto(){
    document.getElementById('modal-3').style.top = "-220%";
}   