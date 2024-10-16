import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "../overview/overview.component";
import {DetailComponent} from "../detail/detail.component";
import {FavoritesComponent} from "../favorites/favorites.component";

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: '**', redirectTo: '/overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
