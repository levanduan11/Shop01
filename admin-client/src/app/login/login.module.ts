import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTE } from './login.router';



@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, RouterModule.forChild([LOGIN_ROUTE])],
})
export class LoginModule {}
