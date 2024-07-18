/* 7. PPEAJE CARDENAL
|* El peaje cardenal cobra 3 tipos de tarifas (1, 2 ó 3) de vehículos: 1=bs.10 particulares, 2=bs.20
|* transporte, 3=bs.50 carga. Conociendo la placa y el tipo de vehículo se desea informar, por cada
|* vehículo: su tarifa a pagar y por el peaje: el porcentaje de cada tipo de vehículo y el monto total
|* para el municipio, sabiendo que es el 40% de todo lo cobrado.
|* Al ser consultada por la forma como desean que se presente la salida, el peaje cardenal
|* suministra el siguiente formato, sobre la base de los siguientes datos:
|* (placa, tipo vehículo)
|* (KBS11E, 1) (XXES12, 2) (YXZQE1, 3) (KBS23E, 1)
|* Vehículo con placa KBS11E su tarifa a pagar 10 Bs
|* Vehículo con placa XXES12 su tarifa a pagar 20 Bs
|* Vehículo con placa YXZQE1 su tarifa a pagar 50 Bs
|* Vehículo con placa KBS23E su tarifa a pagar 10 Bs
|* Porcentaje de vehículo tipo particular 50%
|* Porcentaje de vehículo tipo transporte 25%
|* Porcentaje de vehículo tipo carga 25%
|* Monto total para el municipio: 36 Bs
*/
import Cl_vehiculo from "./Cl_vehiculo.js";
import Cl_peaje from "./Cl_peaje.js";

let veh1 = new Cl_vehiculo("KBS11E", 1);
let veh2 = new Cl_vehiculo("XXES12", 2);
let veh3 = new Cl_vehiculo("YXZQE1", 3);
let veh4 = new Cl_vehiculo("KBS23E", 1);
//let veh5 = new Cl_vehiculo("HBD11R", 4);
let peaje = new Cl_peaje();

peaje.procesarVehiculo(veh1);
peaje.procesarVehiculo(veh2);
peaje.procesarVehiculo(veh3);
peaje.procesarVehiculo(veh4);
//peaje.procesarVehiculo(veh5);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Vehículo con placa ${veh1.placa} su tarifa a pagar es ${veh1.calcTarifa()} Bs.
<br>Vehículo con placa ${veh2.placa} su tarifa a pagar es ${veh2.calcTarifa()} Bs.
<br>Vehículo con placa ${veh3.placa} su tarifa a pagar es ${veh3.calcTarifa()} Bs.
<br>Vehículo con placa ${veh4.placa} su tarifa a pagar es ${veh4.calcTarifa()} Bs.
<br>
<br>Porcentaje de vehículo tipo particular: ${peaje.calcPorcTipo1()}%
<br>Porcentaje de vehículo tipo transporte: ${peaje.calcPorcTipo2()}%
<br>Porcentaje de vehículo tipo carga: ${peaje.calcPorcTipo3()}%
<br>Monto total para el municipio: ${peaje.calcMontoFinal()} Bs.
`;