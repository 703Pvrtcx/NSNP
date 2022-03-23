import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './Pages/dashboard/dashboard.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/home',
    pathMatch: 'full'
  }, 
  {
      path:'',
      component: DashboardPage,
      children:[
  
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          loadChildren: () => import('./Pages/Admin/home/home.module').then( m => m.HomePageModule)
        },
        {
          path:'admin',
          loadChildren:() => import('./Pages/Admin/admin/admin.module').then(m=>m.AdminPageModule)
        }, 
        {
          path: 'admin-modal',
          loadChildren: () => import('./Modals/admin-modal/admin-modal.module').then( m => m.AdminModalPageModule)
        },
        {
          path: 'user-details',
          loadChildren: () => import('./Pages/Admin/user-details/user-details.module').then( m => m.UserDetailsPageModule)
        },
        {
          path: 'settings',
          loadChildren: () => import('./Pages/Admin/settings/settings.module').then( m => m.SettingsPageModule)
        },
        {
          path: 'schools',
          loadChildren: () => import('./Pages/Admin/schools/schools.module').then( m => m.SchoolsPageModule)
        },
        {
          path: 'services',
          loadChildren: () => import('./Pages/Admin/services/services.module').then( m => m.ServicesPageModule)
        },
        {
          path: 'account',
          loadChildren: () => import('./Pages/Admin/account/account.module').then( m => m.AccountPageModule)
        },
      ]
   },
  {
    path: 'dashboard',
    loadChildren: () => import('./Pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/welcome/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./Pages/Account/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Pages/Account/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/Account/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./Pages/Account/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./Pages/Account/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'update-profile',
    loadChildren: () => import('./Pages/Account/update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./Pages/Admin/user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'admin-modal',
    loadChildren: () => import('./Modals/admin-modal/admin-modal.module').then( m => m.AdminModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
