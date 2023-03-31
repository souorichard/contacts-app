import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { Contacts } from '../model/model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactPage {

  contact?: Contacts;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  goToRoute(route: string) {
    this.router.navigate([`../${route}`]);
  }

  ngAfterContentChecked() {
    this.contact = this.dataService.getData('contact');
  }

  navigatePage() {
    this.router.navigate(['/home'])
  }

}
