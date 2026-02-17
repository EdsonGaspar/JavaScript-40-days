//Exercicio feito mais sem seguir o que foi pedido
//Gestor de Historico
class HistoricoNavegacao {
  constructor() {
    this.historico = [];
    this.posicaoActual = -1;
  }

  //Visitar nova pagina (adicionar ao historico)
  //Se estiver no meio do historico, deve remover tudo apos posicao atual
  //Exemplo: se historico ]e [A,B,C] e posicao actual ]e B,
  //ao visitar D, historico fica [A,B,D]
  visitar(url) {
    //TODO: Implementar (imutavel)
    const adicionarHistorico = {
      url,
    };
    this.historico.push(adicionarHistorico);
    if (this.posicaoActual != -1) {
      this.historico.toSpliced(this.posicaoActual, 2);
    }
    this.posicaoActual += 1;
  }
  voltar() {
    const removeLast = this.historico.pop();
    return removeLast;
  }

  avancar() {
    return null;
  }

  limpar() {
    return (this.historico.length = 0);
  }

  obterHistorico() {
    return this.historico;
  }
}

const nav = new HistoricoNavegacao();
nav.visitar("google.com");
nav.visitar("facebook.com");
nav.limpar();
console.log(nav.obterHistorico());
