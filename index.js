
class Hero{
    constructor(HeroName, HeroAge){
        this.name = HeroName
        this.age = HeroAge 
    }
    atacar(HeroType){
        this.type = HeroType
        let ataque = ""
        if (HeroType === "mago"){
            ataque = "magia"
            console.log("O " + HeroType + " atacou usando " + ataque)
        } else if (HeroType === "guerreiro"){
            ataque = "espada"
            console.log("O " + HeroType + " atacou usando " + ataque)
        } else if (HeroType === "monge"){
            ataque = "artes maciais"
            console.log("O " + HeroType + " atacou usando " + ataque)
        } else if (HeroType === "ninja"){
            ataque = "shuriken"
            console.log("O " + HeroType + " atacou usando " + ataque)
        }
    }
} 

let HeroiEscolhido = new Hero("Super Herói", 25)
console.log(HeroiEscolhido)
HeroiEscolhido.atacar("mago")
HeroiEscolhido.atacar("guerreiro")
HeroiEscolhido.atacar("monge")
HeroiEscolhido.atacar("ninja")