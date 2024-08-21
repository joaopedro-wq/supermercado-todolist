import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SupermercadoListComponent } from './supermercado-list.component'; // Import the component
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
  declarations: [SupermercadoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
  ],
  exports: [SupermercadoListComponent],
})
export class SupermercadoListModule {}
