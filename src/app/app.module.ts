import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent },

  { path: "", redirectTo: "admin", pathMatch: "full" }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    EcommerceComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
