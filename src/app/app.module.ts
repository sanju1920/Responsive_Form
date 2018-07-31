import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { RouterModule , Routes} from '@angular/router'


const routes :Routes= [
{
  path:'',redirectTo:'/register' ,pathMatch:'full'
},
{
path:'register',
component:RegisterComponent
},
{
  path:'view',
  component:ViewComponent
},
{
  path:'edit',
  component:EditFormComponent
}
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewComponent,
    EditFormComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
