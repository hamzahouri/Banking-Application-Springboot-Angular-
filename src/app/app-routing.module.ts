import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { MyTransactionsComponent } from './pages/my-transactions/my-transactions.component';
import { MyContactListComponent } from './pages/my-contact-list/my-contact-list.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MainAdminPageComponent } from './admin/main-admin-page/main-admin-page.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes : Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'user/dashboard', component:UserDashboardComponent
  },
  {
    path:'user/my-transactions', component:MyTransactionsComponent
  },
  {
    path:'user/my-ContactList', component:MyContactListComponent
  },
  {
    path:'user/new-Transaction', component:NewTransactionComponent
  },
  {
    path:'user/new-Contact', component:NewContactComponent
  },
  {
    path:'user/profile', component:ProfileComponent
  },
  {
    path:'admin',
    component:MainAdminPageComponent,
    children: [
      {
        path:'users',component:ManageUsersComponent 
      },
      {
        path:'dashboard',component:AdminDashboardComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
