import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatStepperModule,
    MatCheckboxModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatStepperModule,
    MatCheckboxModule,
  ],
})
export class MaterialModule {}
