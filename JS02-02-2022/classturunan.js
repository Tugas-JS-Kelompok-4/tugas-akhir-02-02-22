class Person{
    constructor(nama, kelas, umur){
    this.nama=nama;
    this.kelas=kelas;
    this.umur=umur;
    }
  }
  class sal extends Person{
    constructor(nama, kelas, umur, hobi, favcolor){
    super(nama, kelas, umur);
    this.hobi=hobi;
    this.favcolor=favcolor;
  }
  greeting(){
    return `namaku ${this.nama} kelas ${this.kelas} umurku ${this.umur} hobiku ${this.hobi} favcolor ${this.favcolor}`
     }
  }
  const person2 = new sal("siti", 11, 17, "menggambar", "ungu,biru");
  console.log(person2.greeting());