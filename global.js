/* ===== Dados do formulário ===== */
// Array
const products =
  localStorage && localStorage.produtos
    ? JSON.parse(localStorage.produtos)
    : [];
console.log(products);
function adicionar() {
  // Object
  const produto = {};
  produto.nome = document.getElementById("nome").value;
  produto.preco = Number(document.getElementById("preco").value);
  produto.id = products.length + 1;
  console.log("Nome: " + produto.nome + "\nPreço: " + produto.preco);
  if (produto.nome != "" && produto.preco != "") {
    // Push no array
    products.push(produto);
    const jsonProducts = JSON.stringify(products);
    /* Enviando dados para o localstorage */
    localStorage.setItem("produtos", jsonProducts);
  } else {
    alert("Preencha todos os campos");
  }
  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
}
