import { Routes } from '@angular/router';

export const animalRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./animals-table.view/animals-table.view')
            .then(m => m.AnimalsTableView)
    },
    {
        path: 'register_animal',
        loadComponent: () => import('./register-form.view/register-form.view')
            .then(m => m.RegisterFormView)
    }
];
