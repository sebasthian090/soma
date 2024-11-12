let peso = parseFloat(prompt("informe o peso: "));

let altura = parseFloat(prompt("informe a altura: "));

let imc = (peso/(altura*altura)).toFixed(2);

   document.write("o imc é igual a: ",imc)

if((imc >=18.5 && imc <= 24.9 )){
   document.write("o peso está normal!!: ")

}
else if((imc >= 25 && imc <= 29.9 )){
   document.write("voce esta com sobrepeso!!: ")

}
else if((imc >= 30 && imc <= 34.9 )){
   document.write("voce esta na obesidade grau 1!!: ")

}
else{
   document.write("voce esta abaixo do peso da obesidade 2!!: ")
}