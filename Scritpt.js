// Obtener referencias a elementos HTML
const ERROR = document.getElementById("error");
const IMC = document.getElementById("imc");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INPUT = document.getElementById("peso");
const BUTTON = document.getElementById("calcular");
const BUTTONIMC = document.getElementById("calcular_imc");
const form = document.getElementById('calculadora');
const TITLE1 = document.getElementById('title1');
const TITLE2 = document.getElementById('title2');
const FLU2 = document.getElementById("flu2");
const MAN2 = document.getElementById("man2");


// Evento click para el botón IMC
BUTTONIMC.addEventListener("click", () => {
    // Limpiar el contenido actual de IMC
    IMC.innerHTML = "";
    // Mostrar el elemento IMC
    IMC.style.display = "block";
    // Ocultar resultados de la hidratación basal
    FLU.style.display = "none";
    FLU2.style.display = "none";
    MAN.style.display = "none";
    MAN2.style.display = "none";
    TITLE1.style.display = "none";
    TITLE2.style.display = "none";

    // Declarar una variable para el IMC y obtener el peso y la altura del paciente
    let imc = 0;
    let peso = parseInt(INPUT.value);
    let altura = parseFloat(prompt('Ingrese la altura (metros) del paciente *EJ: 1.82'));

    // Verificar que el peso y la altura sean válidos y mayores que cero
    if (peso > 0 && !isNaN(peso) && altura > 0 && !isNaN(altura)) {
        // Calcular el IMC si los datos son válidos
        imc = peso / (altura * altura);
        // Mostrar el resultado del IMC con dos decimales
        IMC.innerHTML = "IMC: " + imc.toFixed(2);
    } else {
        // Mostrar un mensaje de error si los datos no son válidos
        IMC.innerHTML = "No se pudo calcular.";
    }
});

// Evento click para el botón Calcular hidratación basal
BUTTON.addEventListener("click", () => {
    // Ocultar el elemento IMC
    IMC.style.display = "none";
    // Obtener el peso del usuario
    let peso = parseInt(INPUT.value);

    if (peso > 0) {
        // Ocultar mensaje de error
        ERROR.style.display = "none";
        // Ocultar elementos del segundo cálculo de hidratación basal
        FLU2.style.display = "none";
        MAN2.style.display = "none";
        TITLE1.style.display = "none";
        TITLE2.style.display = "none";

        // Declarar variables para almacenar resultados y cálculos
        let res,res2, vd, mant;

        if (peso <= 30) {
            // Llamar a la función hollyday si el peso es menor o igual a 30
            res = hollyday(peso);
        } else {
            // Realizar el cálculo según la fórmula especificada
            res = (((peso * 4) + 7) / (peso + 90)) * 1500;
            res2 = (((peso * 4) + 7) / (peso + 90)) * 2000;
            // Mostrar elementos del segundo cálculo
            FLU.style.display = "block";
            MAN.style.display = "block";
            FLU2.style.display = "block";
            MAN2.style.display = "block";
            TITLE1.style.display = "block";
            TITLE2.style.display = "block";
        }
        
        // Calcular valores adicionales
        vd = (res / 24).toFixed(0);
        mant = (vd * 1.5).toFixed(0);

        // Mostrar los resultados en la página
        FLU.innerHTML = vd + "cc/h";
        MAN.innerHTML = "m+m/2 : " + mant + "cc/h";

        if (res2) {
            vd = (res2 / 24).toFixed(0);
            mant = (vd * 1.5).toFixed(0);
            FLU2.innerHTML = vd + "cc/h";
            MAN2.innerHTML = "m+m/2 : " + mant + "cc/h";
        }

        console.log(res);
        console.log(res2);
    } else {
        // Mostrar mensaje de error si el peso no es válido
        console.log("error");
        ERROR.style.display = "block";
    }
});