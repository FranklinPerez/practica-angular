import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
    { path: 'productos', component: ProductoComponent},
    { path: 'clientes', component: ClienteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}