import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {
  
  const router = inject(Router);
  let logged = false;

  if (sessionStorage.getItem('token'))
    logged = true;

  if (route.path === "login") {
    if (logged) {
      return router.navigate(["/"])
    }
    else {
      return true
    }
  }
  
  return true
};
