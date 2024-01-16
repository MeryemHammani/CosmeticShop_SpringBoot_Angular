import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../Authentication/services/auth-service.service';
import { inject } from '@angular/core';

export const authGardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);

  const router = inject(Router);

  const role = route.data['role'];
  authService.isExpired();

  if (!authService.isAuthenticated(role)) {
    alert("You are not allowed to access this page, sign in first");
    router.navigate(['user/login']);
    return false;
  }
  else {
    return true;
  }

};