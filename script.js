const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MANTENIMIENTO = document.getElementById('man'); // Corregido el nombre de la variable

CALCULAR.addEventListener('click', () => {
    const PESO = parseFloat(document.getElementById('peso').value); // Convertido a número y corregido el nombre de la variable
    console.log(PESO)
    if (PESO > 0) {
        if(PESO < 30) {
            ERROR.style.display = 'none';

        let flujo = holliday(PESO); // Corregido el nombre de la función
        console.log(flujo)
        MANTENIMIENTO.innerHTML = (flujo / 24 ).toFixed (2)+ "cc/hr"; // Corregido el nombre de la propiedad
        MANTENIMIENTO.style.display = 'block';
        FLU.innerHTML = flujo + "cc/hr" ; // Corregido el nombre de la propiedad
        FLU.style.display = 'block';

        console.log('Vol.diario =', flujo.volumen1500);
        console.log('Mantenimiento =', flujo.volumen1500 / 24, 'cc/hr'); // Corregido el paréntesis y la coma
        console.log('Mantenimiento m+m/2 =', flujo.volumen1500 * 1.5 / 24, 'cc/hr'); // Corregido el paréntesis y la coma
        }
        else{ERROR.style.display = 'none';

        let flujo = calcularVolumenDiario(PESO); // Corregido el nombre de la función
        MANTENIMIENTO.innerHTML = flujo.volumen1500.toFixed (2) // Corregido el nombre de la propiedad
        MANTENIMIENTO.style.display = 'block';
        FLU.innerHTML = flujo.volumen1500.toFixed (2); // Corregido el nombre de la propiedad
        FLU.style.display = 'block';

        console.log('Vol.diario =', flujo.volumen1500);
        console.log('Mantenimiento =', flujo.volumen1500 / 24, 'cc/h'); // Corregido el paréntesis y la coma
        console.log('Mantenimiento m+m/2 =', flujo.volumen1500 * 1.5 / 24, 'cc/h'); // Corregido el paréntesis y la coma
        }
    } else {
        console.log('Superficie Corporal 1=', (calcularVolumenDiario(PESO).volumen1500), 'cc/h');
        console.log('Superficie Corporal 2 =', (calcularVolumenDiario(PESO).volumen2000), 'cc/h');
    }

})
function holliday(peso) {
    if(peso>20){
        return 1500 + (peso-20)*20;
    }else if (peso<20 && peso>10){
        return 1000 + (peso-10)*50;
    }else{
        return peso*100;
    }
}
function calcularVolumenDiario(peso) {
    const superficieCorporal = ((peso * 4) + 7) / (peso + 90);

    const volumen1500 = superficieCorporal * 1500;
    const volumen2000 = superficieCorporal * 2000;

    return {
        volumen1500: volumen1500,
        volumen2000: volumen2000
    };
}