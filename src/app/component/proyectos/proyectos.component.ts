import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  imagenes = ['../../../assets/img-proyectos/120009005_2078306378967889_3067092256257908880_n.png','../../../assets/img-proyectos/120047296_766472494144795_3805154796059537073_n.png',''];

  constructor() { }

  ngOnInit(): void {
  }

}
