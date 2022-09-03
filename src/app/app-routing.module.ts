import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiIntComponent } from './components/api-int/api-int.component';
import { GoogleComponent } from './components/google/google.component';
import { MoedaComponent } from './components/moeda/moeda.component';
import { TelaComponent } from './components/tela/tela.component';
const routes: Routes = [
  {path:'apiInt',component:ApiIntComponent},
  {path:'Tela',component:TelaComponent},
  {path:'Google',component:GoogleComponent},
  {path:'Moeda',component:MoedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
