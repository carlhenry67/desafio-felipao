/*
 Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let personagem = ["Ryu","",15000];

if(personagem[2] <= 1000){
    personagem[1] = "Ferro";
}else if(personagem[2] >= 1001 && personagem[2] <= 2000){
    personagem[1] = "Bronze";
}else if(personagem[2] >= 2001 && personagem[2] <= 6000){
    personagem[1] = "Prata";
}else if(personagem[2] >= 6001 && personagem[2] <= 7000){
    personagem[1] = "Ouro";
}else if(personagem[2] >= 7001 && personagem[2] <= 8000){
    personagem[1] = "Platina";
}else if(personagem[2] >= 8001 && personagem[2] <= 9000){
    personagem[1] = "Ascendente";
}else if(personagem[2] >= 9001 && personagem[2] <= 10000){
    personagem[1] = "Imortal";
}else{
    personagem[1] = "Radiante";
}

console.log("O Herói de nome "+ personagem[0] + " está no nível de "+personagem[1]);
