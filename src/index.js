console.log("Missões do Héroi")

let nickName = "Talon";
let vida ;
let mana;

console.log(nickName+ " Qual Classe você deseja Utilizar?")
console.log("Mago ou Guerreiro")
console.log()
let classeHeroi = "mago"

switch(classeHeroi){

    case "mago":

    vida = 200;
    mana = 200
   
    console.log("Classe "+classeHeroi)
    console.log("Vida :"+vida)
    console.log("mana :"+mana)
    console.log()
    break;

    case "Guerreiro ":

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


