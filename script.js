const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const Peso = document.getElementById('peso').value
    if (PESO > 0){
        ERROR.style.display = 'none';

        let flujo = Holliday (PESO);
        MANTENIMIENTO.innerHTML= flujo /24
        MANTENIENTO.style.display = 'block' 
        MANTENIMIENTO2.innerHTML = (flujo/24) * 1.5
        MANTENIMIENTO2.style.display = 'block'
        FLUJO.innerHTML = flujo
        FLUJO.style.display = 'block' 
        console.log('Vol.diario =', Holliday(PESO));
        console.log('Mantenimiento =',((Holliday(PESO)/24), 'cc/h')
        console.log( 'Mantenimiento m+m/2 =', ((Holliday (PESO)/24)*1.5),'cc/h');
    } else{
        console.log('Superficie Corporal 1=',(superficie(PESO)*1500),'cc/h');
        console.log('Superficie Corporal 2 =', (superficie(PESO)*2000), 'cc/h');
    }
    
    function calcularVolumenDiario(peso) {
        const superficieCorporal = ((peso * 4) + 7) / (peso + 90);
    
        const volumen1500 = superficieCorporal * 1500;
        const volumen2000 = superficieCorporal * 2000;
    
        //  en este caso, devolvemos ambos resultados
        return {
            volumen1500: volumen1500,
            volumen2000: volumen2000
        };
    }