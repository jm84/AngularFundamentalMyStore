const username: string | number = 'juanmolina';

const suma = (a: number, b: number) => {
  return a + b;
};

suma(1, 4);

class Persona {
  //  esto se puede sacar y dejar solo en el constructor
  // private age: number;
  // lastName: string;

  constructor(public age: number, public lastName: string) {
    // this.age = age;
    // this.lastName = lastName;
    // esto tambien se saca si se declara en el parametro del constructor
  }
}

const Juan = new Persona(35, 'molina');
// Juan.age; reclama que es privado se puede usar un get para obtenerlo
