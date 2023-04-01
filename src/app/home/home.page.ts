import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Contacts } from './../model/model';
import { DataService } from '../services/data.service';

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
    { id: 1, img: this.assets + '1.jpeg', name: 'Caroline Souza', email: 'carol@gmail.com', fone: '(14)99999-9999' },
    { id: 2, img: this.assets + '2.jpeg', name: 'Aghata Domeni', email: 'aghata@gmail.com', fone: '(14)88888-8888' },
    { id: 3, img: this.assets + '3.jpeg', name: 'Yuri Onorio', email: 'yuri@gmail.com', fone: '(14)77777-7777' },
    { id: 4, img: this.assets + '4.jpeg', name: 'João Bispo', email: 'joao@gmail.com', fone: '(14)66666-6666' },
    { id: 5, img: this.assets + '5.jpeg', name: 'Lucas Vieira', email: 'lucas@gmail.com', fone: '(14)555555-5555' },
  ]

  public results = [...this.list];
  public ordered = [];

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  navigatePage() {
    this.router.navigate(['/contact']);
  }

  showInfoModal(contact: Contacts) {
    this.dataService.setData('contact', contact);
    this.router.navigateByUrl('/contact');
  }

  resortList() {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.ordered.forEach((letter: string) => {

    })
  }

  ngOnInit(): void {
    this.resortList();
  }

}
