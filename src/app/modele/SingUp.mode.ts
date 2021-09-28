import { EquipeModel } from "./Equipe.model";

export class SignUpModel{
    cin:any;
    nom:any;
    prenom:any;
    username:any;
    password:any; 
    confirmPassword:any;
    phoneNumber:any;
    birthday:any;
    email:any;
    address:any;
    type:any;
    equipe:EquipeModel;
    constructor(){}


    registerValidation(SignUpModel){
        if(SignUpModel.cin=""){return {isValid:false,raison:"cin obligatoire"}}
        if(SignUpModel.nom=""){return {isValid:false,raison:"name obligatoire"}}
        if(SignUpModel.prenom=""){return {isValid:false,raison:"lastname obligatoire"}}
        if(SignUpModel.username=""){return {isValid:false,raison:"username obligatoire"}}
        if(SignUpModel.password=""){return {isValid:false,raison:"password obligatoire"}}
        if(SignUpModel.confirmPassword=""){return {isValid:false,raison:"confirmPassword obligatoire"}}
        if(SignUpModel.phoneNumber=""){return {isValid:false,raison:"phonenumber obligatoire"}}
        if(SignUpModel.birthday=""){return {isValid:false,raison:"birthday obligatoire"}}
        if(SignUpModel.email=""){return {isValid:false,raison:"email obligatoire"}}
        if(SignUpModel.address=""){return {isValid:false,raison:"address obligatoire"}}
        if(SignUpModel.type=""){return {isValid:false,raison:"type obligatoire"}}
        if(SignUpModel.equipe=""){return {isValid:false,raison:"equipe obligatoire"}}


    }


}