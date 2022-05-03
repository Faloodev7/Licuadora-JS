let estadoLicuadora = "off"
let laLicuadora = document.getElementById ("licuadora")
let sonidoLicuadora = document.getElementById ("sonido-licuadora")
let sonidoBoton = document.getElementById ("sonido-boton")

function prendeApaga () {
        if (estadoLicuadora == "off") {
            estadoLicuadora = "on"
            hacerRuido()
            laLicuadora.classList.add("activada")
            
            // console.log ("me encendiste");
        }
        else {
            estadoLicuadora = "off"
            hacerRuido()
            laLicuadora.classList.remove("activada");
            
            // console.log ("me apagaste");
        }
    }
    function hacerRuido () {
        if (sonidoLicuadora.paused){
            sonidoBoton.play()
            sonidoLicuadora.play()
        }
        else{
            sonidoBoton.play()
            sonidoLicuadora.pause()
            sonidoLicuadora.currentTime = 0;
        }
        }