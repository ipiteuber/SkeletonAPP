import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Modulos material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


// Componentes
import { NavbarComponent } from './navbar/navbar.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { DataFormComponent } from './data-form/data-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

// Pipe
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    UserDisplayComponent,
    DataFormComponent,
    LoginFormComponent,
    FormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    NavbarComponent,
    UserDisplayComponent,
    DataFormComponent,
    LoginFormComponent,
    FormatPipe
  ]
})
export class ComponentsModule {}
