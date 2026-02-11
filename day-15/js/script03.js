//splice, funcao mais versatil dos arrays.
//Adiciona, remove e substitui o elemento em qualquer posicao

const names = ["Ana", "Bruno", "Carlos", "Daniel"];
console.log("Lista inicial: ", names);

names.splice(1, 2); //Remove 2(dois) nomes apartir do indice 1
console.log("Remove 2 elementos apartir da posicao 1 ", names);

//Adiciona elemento na posicao 1 sem remover
names.splice(1, 0, "Eduardo");
console.log("Adiciona elemento na posicao 1 sem remover ", names);

//Substitui elemento
names.splice(2, 1, "Pascual");
console.log("Substitui elemento na posicao 2", names);

console.log("Copia Array");
const usuarios = names.slice();
console.log("Copia ", usuarios);

//Exemplo real
console.log("EXEMPLO REAL \n");

class Ecomerce {
  constructor() {
    this.itens = [];
  }

  addProduto(id, nome, preco, quantidade) {
    const produto = {
      id,
      nome,
      preco,
      quantidade,
      total: quantidade * preco,
    };
    this.itens.push(produto);
  }

  removeProduto(produtoId) {
    const indexProduto = this.itens.findIndex((item) => item.id === produtoId);
    if (indexProduto !== -1) {
      this.itens.splice(indexProduto, 1);
      return true;
    }
    return false;
  }
  updateQuantit(produtoId, newQuantit) {
    const index = this.itens.findIndex((item) => item.id === produtoId);
    if (index !== -1) {
      this.itens[index].quantit = newQuantit;
    }
  }
}

const listProduto = new Ecomerce();
listProduto.addProduto(1, "Arroz", 1200, 2);
listProduto.addProduto(2, "Massa", 325, 3);
listProduto.removeProduto(1);
listProduto.updateQuantit(2, 10);
console.log("\n Carrinho \n", listProduto);
