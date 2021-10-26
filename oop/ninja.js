class Ninja{
    constructor(name, health=10){
        this.name = name
        this.health = health
        this.speed = 3;
        this.strength = 3
    }

    sayName() {
        console.log("My name is " + this.name)
    }

    showStats() {
        console.log(
            "Name: " + this.name + "\n",
            "Strength: " + this.strength + "\n",
            "Speed: " + this.speed + "\n",
            "Health: " + this.health
        )
    }

    drinkSake() {
        this.health += 10
        console.log("Drinking Sake!")
    }
}

// ===== Extend Ninja into Sensei
class Sensei extends Ninja {
    constructor(name, health=200) {
        super(name, health)
        this.name = name
        this.health = health
        this.wisdom = 10
        this.speed = 10
        this.strength = 10
    }

    speakWisdom() {
        this.drinkSake()
        console.log("1 in the hand is worth a fish")
    }

}

const ninja1 = new Ninja("Naruto")
ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()
console.log("======================")
const sensei1 = new Sensei("Kakashi")
sensei1.speakWisdom()
sensei1.showStats()