class person{
    constructor(nama, kelas, umur, makananfav){
        this.nama=nama;
        this.kelas=kelas;
        this.umur=umur;
        this.warnafav=this.warnafav;
    }
    greeeting(){
        return("namaku" + this.nama + "kelas" + this.kelas + "umurku" + this.umur + "warna favorit" + this.warnafav);
    }
}
const person1=new person ("siti munika", "XI RPL 2", "17", "ungu , biru");
console.log(person1.greeeting());