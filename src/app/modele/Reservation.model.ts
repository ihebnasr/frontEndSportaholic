import {CategorieModele} from './categorie.modele';
import {EquipeModel} from './Equipe.model';
import {stadeModel} from './Stade.model';
import {SignUpModel} from './SingUp.mode';
import {BlocModel} from './bloc.model';

export class ReservationModel{
  id:any;
  date:any;
  nbr_place:any;
  user=new SignUpModel();
  stade=new stadeModel();
  bloc=new BlocModel();
  constructor(){}
}
