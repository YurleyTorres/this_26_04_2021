// const lista2 = new Object
//     lista2.nombre= "Marly";
//     lista2.apellido= "Torres";

const lista = {
    nombre: "Marly",
    apellido: "Torres",
    mostrar: p1 => `Hola ${p1} como estas`,
};


function saludar(Callback,p2){
    //console.log(this.mostrar(this.nombre));
    //return this.nombre;
    console.log(Callback(p2));
}
//saludar.call(lista, lista.mostrar, lista.nombre);
//saludar.apply(lista, [lista.mostrar, lista.nombre]);
const ejecutar = saludar.bind(lista, lista.mostrar, lista.nombre);
ejecutar();


    // function saludar(){
    //     return this.nombre;
    //     
    // }
    // console.log(saludar.call(lista));

    // function saludar(p1){
    //     this.nombre = p1;
    //     console.log(this.nombre);
    // }
    // saludar.call(lista);


// const inner = ( function (){
//     let num = 0;
//     return function (){
//         num++;
//         return num;
//     }
// })();
// console.log(inner());
// console.log(inner());


// function saludar(){
//     var apellido2 = "Torres Silva";
//     let apellido3 = "torres silva";
//     this.apellidos = "TORRES SILVA";
// }

// saludar();
// console.log(this.apellidos);
// console.log(apellido2);
// console.log(apellido3);

// //Maneras de crear un objeto
// const obj = new Object();
// const obj2 = {};
// const obj3 = Object.prototype.constructor();

// this.nombre = "Marly Torres";
// this.onabort = "hhh";
// console.log(window);
// console.log(nombre);
