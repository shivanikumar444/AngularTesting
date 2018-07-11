import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { InsertgameComponent } from './insertgame/insertgame.component';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'home/insert',
        component: InsertgameComponent
    },
    {
        path: 'home/gameslist',
        component: GamelistComponent
    }
];
