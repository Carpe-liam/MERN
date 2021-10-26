class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost)
        this.power = power
        this.resilience = resilience
    }

    attack(target) {
        target.resilience -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat 
        this.magnitude = magnitude
    }

    play(target) {
        if(target instanceof Unit){
            let targetStat = target.stat
            console.log(targetStat)
            let effect = this.magnitude
            console.log(effect)
        } else {
            throw new Error ("Target Must Be Unit!")
        }
    }

}

const redNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4)
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target resilience by 3", resilience, -3)

console.log(redNinja)
console.log(hardAlgo)
hardAlgo.play(redNinja)


// console.log(blackNinja)