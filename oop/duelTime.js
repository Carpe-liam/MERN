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
        console.log("==========================================")
        console.log(this.name + " attacks for " + this.power + " damage.")
        console.log("==========================================")
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
            target[this.stat] += this.magnitude
        } else {
            throw new Error ("Target Must Be Unit!")
        }
    }

}

// ==== Units =====
const redNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackNinja = new Unit("Black Belt Ninja", 4, 5, 4)

// ==== Effects =====
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target resilience by 3", "resilience", 3)
const promiseReject = new Effect("Unhandled Promise Rejection", 1, "Reduce target resilience by 2", "resilience", -2)
const pairProgramming = new Effect("Pair Programming", 3, "Increases targets power by 2", "power", 2)

// turn 1
console.log(redNinja)
console.log(hardAlgo)
hardAlgo.play(redNinja)
console.log(redNinja)

console.log("++++++++++++++++++++++++++++++++++")
// turn 2
console.log(blackNinja)
console.log(promiseReject)
promiseReject.play(redNinja)
console.log(redNinja)

// turn 3
pairProgramming.play(redNinja)
redNinja.attack(blackNinja)
console.log(redNinja)
console.log(blackNinja)


