
console.log(calcularPotencias(5, 3));

function calcularPotencias(base, exponente) {
    if(exponente == 0) {
        return 1;
    } else if(exponente == 1) {
        return base;
    } else if (exponente > 1) {
        return calcularPotencias(base, exponente - 1)
    } else if(exponente < 0) {
        exponente = -exponente;
    }
    
}