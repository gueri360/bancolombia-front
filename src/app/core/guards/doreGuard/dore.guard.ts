import {CanActivateFn, CanMatchFn} from '@angular/router';
import {inject} from "@angular/core";
import {GuardService} from "../../services/guard/guard.service";

export const doreGuard: CanMatchFn = (route, state) => {
  const guardServices = inject(GuardService);
  return guardServices.getDoer();
};
