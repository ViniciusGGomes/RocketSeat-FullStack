//1.
class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }


    sendEmail(){
        console.log("E-mail enviado para", this.name, "no endereço eletrônico", this.email)
    }
}

const user = new User("Vinicius", "vinicius@gmail.com")
user.sendEmail()

//2.Método static
class Person{
    static showMenssage(){
        console.log("2. Não preciso instanciar a classe para usar esse método")
    }
}

Person.showMenssage()