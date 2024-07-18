export default class Cl_vehiculo{
    constructor(p, tV){
        this.placa = p;
        this.tipoVehiculo = +tV;
    }

    set placa(p){
        this._placa = p;
    }

    set tipoVehiculo(tV){
        this._tipoVehiculo = +tV;
    }

    get placa(){
        return this._placa;
    }

    get tipoVehiculo(){
        return this._tipoVehiculo;
    }

    calcTarifa(){
        switch (this.tipoVehiculo) {
            case 1: 
                return 10; 
                break;
            case 2:
                return 20;
                break;
            case 3:
                return 50; 
                break;
            default:
                return 0;
        }
    }
}