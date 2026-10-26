let num1 = Number(prompt("Escribe un número"));
let num2 = Number(prompt("Escribe otro número"));
let num3 = Number(prompt("Escribe un último número"));

const numeros = [num1, num2, num3];

const numerosAsc = numeros.toSorted((a,b) => a-b);
for(let i=0; i<numerosAsc.length; i++) {console.log(numerosAsc[i])};

const numerosDesc = numeros.toSorted((a,b) => b-a);
for(let i=0; i<numerosDesc.length; i++) {console.log(numerosDesc[i])};

if ((num1 == num2) || (num1 == num3) || (num2 == num3)) {
    console.log("Insertaste números iguales");
} else {
    console.log("Orden ascendente y descendente de arrays existoso");
};


