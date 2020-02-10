


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var direccion_x = 6;
var direccion_y = -6;
var radio_bola = 10;
var altura_plataforma = 10;
var ancho_plataforma = 75;
var plataforma_X = (canvas.width-ancho_plataforma)/2;
var plataforma_Y = (canvas.height-altura_plataforma)/2;
var tecla_flecha_abajo = false;
var tecla_flecha_arriba = false;
var tecla_w = false;
var tecla_s = false;
var puntuacion_jugador_rojo = 0;
var puntuacion_jugador_azul = 0;


// Para que el modal se lance al iniciar la aplicacion
$(document).ready(function()
{
    $("#exampleModalCenter").modal("show");
});





//Funcion general del juego
function Pong(tiempo) {
    var temporizador =  setInterval(Dibujar, tiempo);
   

    function DibujarBola() {
        ctx.beginPath();
        ctx.arc(x, y, radio_bola, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(17,0,8)";
        ctx.fill();
        ctx.closePath();

    }
    function DibujarPlataforma() {
        ctx.beginPath();
        ctx.rect(0, plataforma_Y, 10, 75);
        ctx.fillStyle = "#ff2a12";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(canvas.width - altura_plataforma, plataforma_X, 10, 75);
        ctx.fillStyle = "#2245ff";
        ctx.fill();
        ctx.closePath();


    }

    function Dibujar() {

        //Los movimientos de las plataformas
        if (tecla_flecha_abajo && plataforma_X < canvas.height - ancho_plataforma) {
            plataforma_X += 7;
        } else if (tecla_flecha_arriba && plataforma_X > 0) {
            plataforma_X -= 7;
        }
        if (tecla_s && plataforma_Y < canvas.height - ancho_plataforma) {
            plataforma_Y += 7;
        } else if (tecla_w && plataforma_Y > 0) {
            plataforma_Y -= 7;
        }

        // rebotes y sistema de puntuacion con la deteccion de rebote de las plataformas

        if (x + direccion_x > canvas.width - radio_bola) {
            if (y > plataforma_X && y < plataforma_X + 75) {
            //     rebota con la plataforma derecha


            } else {
                console.log("y=" + y + " plataforma_X=" + plataforma_X);
                puntuacion_jugador_rojo++;
                console.log(puntuacion_jugador_rojo);

                if(puntuacion_jugador_rojo == 5 ){
                    $(document).ready(function()
                    {
                        $("#JugadorRojo").modal("show");
                        
                        clearInterval(temporizador);
                    });
                }
            }
        }
       if (x + direccion_x < radio_bola) {
           if (y > plataforma_Y && y < plataforma_Y + 75) {
                //rebota con la plataforma izquierda

            } else {
                console.log("y=" + y + " plataforma_X=" + plataforma_Y);
                puntuacion_jugador_azul++;
                console.log(puntuacion_jugador_azul);
                 if (puntuacion_jugador_azul == 5){

                    $(document).ready(function()
                    {
                        $("#JugadorAzul").modal("show");
                        clearInterval(temporizador);
                    }); 
                }
            }

        } 

        if (x + direccion_x > canvas.width - radio_bola || x + direccion_x < radio_bola) {
            direccion_x = -direccion_x;
        }
        if (y + direccion_y > canvas.height - radio_bola || y + direccion_y < radio_bola) {
            direccion_y = -direccion_y;
        }
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        DibujarBola();
        DibujarPlataforma();
        x += direccion_x;
        y += direccion_y;
        document.getElementById("puntuacion-azul").innerHTML=puntuacion_jugador_azul;
        document.getElementById("puntuacion-rojo").innerHTML=puntuacion_jugador_rojo;

    }
   
}

  // Asignacion de teclas de movimiento con las plataformas
    document.addEventListener("keyup", keyUpHandler, false);

    function keyUpHandler(e) {
        if (e.keyCode == 40) {
            tecla_flecha_abajo = false;
        } else if (e.keyCode == 38) {
            tecla_flecha_arriba = false;
        }
    
    
    document.addEventListener("keydown", keyDownHandler, false);

    function keyDownHandler(e) {
        if (e.keyCode == 40) {
            tecla_flecha_abajo = true;
        } else if (e.keyCode == 38) {
            tecla_flecha_arriba = true;
        }
    
    
        document.addEventListener("keyup", keyUpHandler, false);

        function keyUpHandler(e) {
            if (e.keyCode == 87) {
                tecla_w = false;
            } else if (e.keyCode == 83) {
                tecla_s = false;
            }
        }

        document.addEventListener("keydown", keyDownHandler, false);

        function keyDownHandler(e) {
            if (e.keyCode == 87) {
                tecla_w = true;
            } else if (e.keyCode == 83) {
                tecla_s = true;
            }


        }
    }
    
}
    

    


