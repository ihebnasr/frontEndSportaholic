import {CategorieModele} from './categorie.modele';
import {EquipeModel} from './Equipe.model';
import {stadeModel} from './Stade.model';
import {BlocModel} from './bloc.model';

export class PartieModele{
  id:any;
  date:any;
  nbr_place:any;
  categroie=new CategorieModele();
  equipeLocaux=new EquipeModel();
  equipeVisiteur=new EquipeModel();
  stade=new stadeModel();

  constructor(){}
}
