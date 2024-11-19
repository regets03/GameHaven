import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./framework/display/content/content.component').then((m) => m.ContentComponent)
        }
    },
    {
        path: ':category',
        loadComponent: () => {
            return import('./framework/display/gametable/gametable.component').then((m) => m.GametableComponent)
        }
    }
];
