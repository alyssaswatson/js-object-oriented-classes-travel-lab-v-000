class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }
 
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}