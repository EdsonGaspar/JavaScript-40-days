/**
 * Tipos nao primitivos: Array, function and object;
 * Quando usamos uma funcao dentro de um objecto nos chamos esta funcao de metodo
 */
function createUser(nome, age) {
  return {
    nome,
    age,
    greetin() {
      console.log(`Ola, ${this.nome}`);
    },
  };
}

const person1 = createUser("Flavio", 21);
person1.greetin();

let profile = {
  nome: "Tapas",
  company: "CreoWis",
  message: function () {
    console.log(`${this.nome} trabalha no ${this.company}`);
  },
  address: {
    city: "Luanda",
    pin: "+244",
    country: "Angola",
    state: "None",
    showAddress: function () {
      console.log(
        `Pais ${this.country} city ${this.city} pin code ${this.pin} state ${this.state}`,
      );
    },
  },
  salary: undefined,
};

profile.message();

profile.address.showAddress();

//Como verificar se um objecto tem uma propriedade ou nao?
//A verificacao e simples e apenas o objecto . nome da propriedade(ex:profile.salary), se o resultado for underfine isso quer dizer a propriedade nao existe.

console.log(profile.salary); //undefined, isso quer dizer que a propriedade nao existe

//aplicando na programacao do dia a dia

if (!profile.salary) {
  console.log(`Salario nao existe!!!, Logica errada`);
}

//Estudando "in operator", verifica se uma propriedade existe dentro de um objecto com mair eficiencia do que o retorno "undefine"

if ("salary" in profile) {
  console.log(`Salario existe, pode nao estar definida mais esta la.`);
}

//For in, usado para interar objecto.

for (let key in profile) {
  //   console.log(key);
  console.log(profile[key]);
}
