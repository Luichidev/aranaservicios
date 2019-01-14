import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  show: boolean = false
  src: string = null

  constructor() { }

  ngOnInit() {
  }

  toogleModal(event) {
    this.show = !this.show
    this.src = event.target.src
  }

  closeModal() {
    this.show = false
  }
}
