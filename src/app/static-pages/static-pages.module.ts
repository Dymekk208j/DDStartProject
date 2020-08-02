import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetComponent],
  imports: [CommonModule, SharedModule],
})
export class StaticPagesModule {}
