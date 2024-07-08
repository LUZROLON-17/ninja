const Salud=0
class Ninja{
 constructor(nombre){
    this.nombre=nombre;
   this.drinSake(Salud);
     this.velocidad=3;
     this.fuerza=3;
 }
sayName(){
console.log(this.nombre)
}
drinSake(salud){
   this.salud= salud+10;
}
showStarts(){
    console.log(this.nombre, this.fuerza, this.velocidad, this.salud)
}
}
// const naranja= new Ninja("José",13);
const ninja2= new Ninja("Luz")
// naranja.sayName()
//  naranja.showStarts()
// console.log(naranja)
 console.log(ninja2)

 class Seisei extends Ninja{
    constructor(nombre){
        super(nombre)
        this.sabiduria=10;
        this.salud=200;
        this.fuerza= this.fuerza+7;
        this.velocidad=this.velocidad+7;
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        super.drinSake(this.salud)
    }
 }
 const sensei1=new Seisei("Ninjaman")
 console.log(sensei1)
 sensei1.speakWisdom();
 console.log(sensei1);