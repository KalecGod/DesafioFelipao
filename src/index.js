console.log("Missões do Herói")

let nickName = "Talon";
let vida ;
let mana;
//let dano;

console.log(nickName+ " Qual Classe você deseja Utilizar?")
console.log("Mago ou Guerreiro")
console.log()
let classeHeroi = "Guerreiro"

switch(classeHeroi){

    case "Mago":

    vida = 200;
    mana = 200
   
    console.log("Classe "+classeHeroi)
    console.log("Vida :"+vida)
    console.log("mana :"+mana)
    console.log()
    break;

    case "Guerreiro":

    vida = 300;
    mana = 100;

    console.log("Classe "+classeHeroi)
    console.log("Vida :"+vida)
    console.log("mana :"+mana)
    console.log()
 
    break;

    default:
        console.log("Opção Invalida")

        break
}

let tutorial = false;

if(tutorial === true){

    let classe = "Guerreiro"

    if(classe === "Mago"){

        vida = 200;
        mana = 200

    console.log("Classe "+classe)
    console.log("Vida :"+vida)
    console.log("mana :"+mana)
    console.log()


    }else if(classe === "Guerreiro"){

        vida = 300;
        mana = 100;

    console.log("Classe "+classe)
    console.log("Vida :"+vida)
    console.log("mana :"+mana)
    console.log()
   
}

console.log("Monstros com Xps ")

console.log("EX: Monstro básicos : 500 XP")
console.log("EX: Monstro Boss : 1000 XP")
console.log()
console.log("Fim do Tutorial")

}else{

    console.log("Bem Vindo ao Game")

}

console.log("Missao Inicial ")
console.log();

console.log("Enfrente seus MEDOS :");

let monstro = 25;
let xp = 0;

for(let qat = 1;qat<=monstro;qat++){

 xp+=200;

console.log("Monstro "+qat+"/"+monstro+" restante")
console.log("Nível Obtido "+xp)
console.log()
}

console.log("Missão Concluida:")
console.log()

console.log("Missão Adicionada , Derrote os Fantasma")
console.log();
let desafio = true;

if(desafio === true){

    console.log("Derrote os Fantasma: ")

    console.log()
    let desafioFantasma = 7600

    while(xp<desafioFantasma){

        xp+=200;

        console.log("Fantasma Derrotado")
        console.log("Nível Obtido "+xp)
        console.log()
    }


}
console.log("Ultima missão, Desafie o BOSS'AAtrox' e seus Soldados")

if(desafio===true){

    let soldadosAatrox = 20

        for(let Soldados = 1;Soldados<=soldadosAatrox;Soldados++){

            xp+=100

            console.log("Soldado Derrotados "+Soldados+"/"+soldadosAatrox)
            console.log("Nível Obtido "+xp)
            console.log()

            if(Soldados === soldadosAatrox){

                xp+=500;
                console.log("Aatrox foi Derrotado e o nosso mundo esta livre do Mal")
                console.log("Nível Obtido até o final da História "+xp+" XP")
                console.log()

                   


            }
            

        }
        

}
if(xp <= 5000){

    console.log("Herói "+nickName +"\nRank Ouro"+"\nClasse "+classeHeroi)
    console.log()

}else if(xp <= 7600){

    console.log("Herói "+nickName +"\nRank Ascendente"+"\nClasse "+classeHeroi)
    console.log()


}else{
    console.log("Herói "+nickName +"\nRank Radiante"+"\nClasse "+classeHeroi)
    console.log()

}























































































































