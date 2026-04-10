import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {
  
  const router = inject(Router);
  if (!sessionStorage.getItem('token'))
    return router.navigate(["login"])

  return true;
};
