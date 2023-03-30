import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Contacts } from './../model/model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  assets = 'assets/img';

  list: Contacts[] = [
    { img: this.assets + '1.jpeg', name: 'Caroline Souza', email: 'carol@gmail.com', id: 1 },
    { img: this.assets + '2.jpeg', name: 'Aghata Domeni', email: 'aghata@gmail.com', id: 2 },
    { img: this.assets + '3.jpeg', name: 'Yuri Onorio', email: 'yuri@gmail.com', id: 3 },
    { img: this.assets + '4.jpeg', name: 'João Bispo', email: 'joao@gmail.com', id: 4 },
    { img: this.assets + '5.jpeg', name: 'Lucas Vieira', email: 'lucas@gmail.com', id: 5 },
  ]

  constructor( private router: Router ) {}

  navigatePage() {
    this.router.navigate(['/contact']);
  }

}
