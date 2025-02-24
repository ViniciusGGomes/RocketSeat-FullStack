function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var hora = new Date()
    var horario = hora.getHours()


    msg.innerHTML = `Agora são ${horario} horas`

    if(horario >= 0 && horario < 12){
        img.src = "../img/morning.jpg"
        document.body.style.background = "#e2cd9f"
    }
    else if(horario >= 12 && horario <= 18){
        img.src = "../img/afternoon.jpg"
        document.body.style.background = "red"
    }
    else{
        img.src = "../img/night.jpg"
        document.body.style.background = "blue"
    }


}


