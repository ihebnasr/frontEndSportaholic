import {StadeModule} from '../stade/Stade.module';

export class BlocModel{
  id:any;
  nom:string;
  nbr_place:number;
  stade=new StadeModule();
  constructor(){}
}
