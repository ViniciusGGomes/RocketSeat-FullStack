class Animal{
    constructor(name){
        this.name = name 
    }

    makeNoise(){
       console.log("barulho aleatorio") 
    }
}

class Dog extends Animal{
    makeNoise(){
        console.log("ruf ruf")
    }
}

const dog = new Dog("huck")
console.log(dog.name)
dog.makeNoise()

class Cat extends Animal{
    makeNoise(){
        console.log("Miau Miau")
    }

    sleep(){
        console.log("Dormindo poha!")
    }
}

const cat = new Cat("john john")
console.log(cat.name)
cat.makeNoise()
cat.sleep()