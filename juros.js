import input from 'readline-sync';
console.log("");
console.log("----Aplicações de Juros----\n");

let valor = input.question("Informe o valor devido: R$");
console.log("")
let dias_atraso=-1;
let total_juros=0;



if(valor <= 0){
    
  console.log("O valor da dívida deve ser maior que zero!");
  
}else {

 dias_atraso = input.question("Informe quantos dias se passaram desde o vencimento do boleto:");
console.log("");

console.log("Valor da dívida:R$"+ valor);
console.log("Dias em atraso:"+ dias_atraso);
console.log("");
}

if(dias_atraso==0){
    console.log("Você está em dia, Parabéns!!!!");
    console.log("++++++")
}else 
if(dias_atraso > 15){
    console.log("Taxa de Juros: 10%");
     total_juros = Number(valor) + Number(valor)*0.10;
    console.log("Valor Total com Juros: R$" + total_juros);
}
else if((dias_atraso > 0)&&(dias_atraso<=15)){
    console.log("Taxa de Juros:5%");
     total_juros = Number(valor) + (valor)*0.05;
    console.log("Valor Total com Juros: R$" + total_juros);
}else{
console.log("++++++")
}

