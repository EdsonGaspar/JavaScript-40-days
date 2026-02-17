class FilaAtendimento {
  constructor() {
    this.fila = [];
    this.proximoNumero = 1;
  }

  // 1. Adicionar cliente à fila (retorna número da senha)
  adicionarCliente(client) {
    const cliente = {
      id: this.proximoNumero,
      client,
    };
    this.fila.push(cliente);
    this.proximoNumero++;
    return cliente.id;
  }

  // 2. Chamar próximo cliente (remove e retorna o primeiro da fila)
  chamarProximo() {
    if (this.fila.length === 0) {
      return null;
    }
    return this.fila.shift();
  }

  // 3. Remover cliente específico da fila por número de senha
  // Retornar true se removeu, false se não encontrou
  cancelarSenha(senha) {
    const index = this.fila.findIndex((client) => client.id === senha);
    if (index !== -1) {
      return this.fila.splice(index, 1);
    }
    return false;
  }
  //4. Inserir cliente prioritário no início da fila
  //Se ja ouveer um prioritario o asseguir fica atras dele
  adicionarPrioritario(client) {
    const clint = {
      id: this.proximoNumero,
      client,
      prioritario: true,
    };
    const index = this.fila.findIndex(
      (cliente) => cliente.prioritario === true,
    );
    if (index !== -1) {
      this.fila.splice(index + 1, 0, clint);
      this.proximoNumero++;
      return clint.id;
    }
    this.fila.unshift(clint);
    this.proximoNumero++;
    return clint.id;
  }

  showLista() {
    return this.fila;
  }
}

const clientes = new FilaAtendimento();
console.log(clientes.adicionarCliente("Mario")); //1
console.log(clientes.adicionarCliente("Jose")); //2
console.log(clientes.adicionarCliente("Fernandes")); //3
console.log(clientes.chamarProximo()); //Mario
console.log(clientes.cancelarSenha(2)); //Jose
console.log(clientes.adicionarPrioritario("Manuel"));
console.log(clientes.adicionarPrioritario("Jeovani"));
console.log(clientes.adicionarPrioritario("Pauleta"));
console.log(clientes.showLista());
