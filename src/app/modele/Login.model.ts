import { ifStmt } from '@angular/compiler/src/output/output_ast';

export class LoginModel {

    username: any ;
    password: any ;

   constructor() {}
  userValidate(Login) {
    if (Login.username = ' ') {
      return {
        isValid: false, raison: 'username obligatoire'
      };
    }
    if (Login.password = '') {return {isValid: false, raison: 'password obligatoire'}; }
  }
}
