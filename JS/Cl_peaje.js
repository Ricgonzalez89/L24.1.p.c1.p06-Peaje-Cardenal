export default class Cl_peaje{
    constructor(){
        this.contTipo1 = 0;
        this.contTipo2 = 0;
        this.contTipo3 = 0;
        this.contVehiculo = 0;
        this.acumMonto = 0;
    }

    procesarVehiculo(v){
        this.contVehiculo++;
        this.acumMonto += v.calcTarifa();
        if (v.tipoVehiculo === 1)
            this.contTipo1++;
        else if (v.tipoVehiculo === 2)
            this.contTipo2++;
        else if (v.tipoVehiculo === 3)
            this.contTipo3++;
    }

    calcMontoFinal(){
        return this.acumMonto * 0.40;
    }

    calcPorcTipo1(){
        return (this.contTipo1 / this.contVehiculo) * 100;
    }

    calcPorcTipo2(){
        return (this.contTipo2 / this.contVehiculo) * 100;
    }

    calcPorcTipo3(){
        return (this.contTipo3 / this.contVehiculo) * 100;
    }
}