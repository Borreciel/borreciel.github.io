var arr = Array(8).fill(false);
var posicion = 1, valor = 0;

function aumentar() {
    if (arr[posicion-1] === false) {
        encender(posicion);
        arr[posicion-1] = true;
        posicion = 1;
        valor += 1;
    }
    else {
        apagar(posicion);
        arr[posicion-1] = false;
        posicion += 1;
        if (posicion === 9) {
            posicion = 1;
            valor = 0;
        }
        else {
            aumentar();
        }
    }

    document.getElementById("valor_decimal").innerHTML = valor;
}

function disminuir() {
    if (valor > 0) {
        if (arr[posicion-1] === false) {
            encender(posicion);
            arr[posicion-1] = true;
            posicion += 1;
            if (valor < 1) {
                
            }
            else {
                disminuir();
            }
        }
        else {
            apagar(posicion);
            arr[posicion-1] = false;
            posicion = 1;
            valor -= 1;
            document.getElementById("valor_decimal").innerHTML = valor;
        }
    }
    else {
        arr[0] = true;
        arr[1] = true;
        arr[2] = true;
        arr[3] = true;
        arr[4] = true;
        arr[5] = true;
        arr[6] = true;
        arr[7] = true;
        encender(1);
        encender(2);
        encender(3);
        encender(4);
        encender(5);
        encender(6);
        encender(7);
        encender(8);
        valor = 255;
        document.getElementById("valor_decimal").innerHTML = "255";
    }
}

function encender(lugar) {
    let padre = document.getElementById("no" + lugar);
    let apagado = padre.querySelector(".apagado");
    let encendido = padre.querySelector(".encendido");

    apagado.style.transform = "rotateX(180deg)";
    encendido.style.transform = "rotateX(360deg)";
}

function apagar(lugar) {
    let padre = document.getElementById("no" + lugar);
    let apagado = padre.querySelector(".apagado");
    let encendido = padre.querySelector(".encendido");

    encendido.style.transform = "rotateX(180deg)";
    apagado.style.transform = "rotateX(360deg)";
}
