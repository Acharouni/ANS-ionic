import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AnnoncePageRoutingModule } from './annonce-routing.module';

import { AnnoncePage } from './annonce.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AnnoncePageRoutingModule,RouterModule.forChild([{ path: '', component: AnnoncePage }])
  ],
  declarations: [AnnoncePage]
})
export class AnnoncePageModule {}
