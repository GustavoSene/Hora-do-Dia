

function carregar(){
    var msg = document.getElementById("horas")
    var img = document.getElementById("img1")
    var data = new Date()
    var horas = data.getHours();
    msg.innerHTML = `Agora são ${horas} horas`
    var corpo = document.getElementById("body")


    if (horas >= 12 && horas < 18 ) {

        img.src = "./assets/sun.png" 

        corpo.style.backgroundImage = "url(./assets/tarde.jpg"
        corpo.style.backgroundSize = "cover"

    }

   else if (horas >= 18 && horas < 19 ) {

    img.src = "./assets/sun.png"

    corpo.style.backgroundImage = "url(./assets/boatarde.jpg"
        corpo.style.backgroundSize = "cover"


   } 
   else if (horas >=19 || horas < 6 ) {

   img.src = "./assets/moon.png"

   corpo.style.backgroundImage = "url(./assets/noite.jpg)"
   corpo.style.backgroundSize = "cover"

    }

   else if (horas >= 6)  {

    img.src = "./assets/sun.png"

    corpo.style.backgroundImage = "url(./assets/sunny.jpg)"
    corpo.style.backgroundSize = "cover"

   }

   if (horas == 0) {

    msg.innerHTML = `Agora é meia-noite`

}

if (horas==1) {

    msg.innerHTML = `Agora é ${horas} hora da manhã`

}

if (horas >1 && horas <= 11) {

    msg.innerHTML = `Agora são ${horas} horas da manhã`


}

if (horas == 12) {

    msg.innerHTML = `Agora é meio-dia`

}


}