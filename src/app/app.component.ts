import { Component } from '@angular/core';
import { Empleado } from './models/empleado';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  arregloEmpleados: Empleado[] = [
    {
      id: 1,
      nombre: 'Angel Villafan',
      brm: 'BRS101353',
      puesto: 'Desarrollador FrontEnd',
    },
    {
      id: 2,
      nombre: 'Carlos Cuautle',
      brm: 'BRS101354',
      puesto: 'Desarrollador BackEnd',
    },
    {
      id: 3,
      nombre: 'Roberto Wong',
      brm: 'BRS101355',
      puesto: 'Desarrollador BackEnd',
    },
    {
      id: 4,
      nombre: 'Cesar Ramirez',
      brm: 'BRS101356',
      puesto: 'Desarrollador FullStack',
    },
  ];
  empleadoSeleccionado: Empleado = new Empleado();
  abrir(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
  }
  eliminar() {
    if (
      confirm(
        'Seguro que deseas eliminar a ' + this.empleadoSeleccionado.nombre
      )
    ) {
      this.arregloEmpleados = this.arregloEmpleados.filter(
        (x) => x != this.empleadoSeleccionado
      );
      this.empleadoSeleccionado = new Empleado();
    }
  }
  agregarEditar() {
    if (this.empleadoSeleccionado.id === 0) {
      this.empleadoSeleccionado.id = this.arregloEmpleados.length + 1;
      this.arregloEmpleados.push(this.empleadoSeleccionado);
    }

    this.empleadoSeleccionado = new Empleado();
  }
}
