import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { DashboardService } from '../../Service/dashboard.service';
import { EquipeService } from '../../Service/equipe.service';
import { StadeService } from '../../Service/stade.service';
import { Router } from '@angular/router';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  templateUrl: 'dashboard.component.html',
  encapsulation: ViewEncapsulation.Emulated,

})
export class DashboardComponent implements OnInit {

  nbrUserEnabled: any;
  nbrUserNotEnabled: any;
  nbrEquipe: any;
  nbrStade: any;
  stat: string [];
  nbrUserEquipe: Array<number> = [];


  public type: ChartType = 'bar';

  public labels: Label[]  ;

  public datasets: ChartDataSets[] = [
    {
      label: '# of Votes',
      data: this.nbrUserEquipe,

      borderWidth: 1
    }];

  public options: ChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true

        },
      }]
    }
  };

  startDateArry: any[] = [];
  blinkArry: any[] = [];

  constructor(private stadeService: StadeService, private dashboard: DashboardService , private equipeService: EquipeService, private router: Router) {}
  ngOnInit(): void {

    this.getNbrUserEnable();
    this.getNbrUserNotEnabled();
    this.getnbrEquipe();
    this.getNbrStade();
    this.getStatistique();
    this.getNbrUserEquipe();


    // generate random values for mainChart

    this.labels = this.startDateArry;
    this.datasets = [{ data: this.blinkArry, label: 'equipe' }];

  }
  getNbrUserEquipe() {
    return this.dashboard.getStatNbrUser().subscribe(
      (res: any ) => {
        console.log(res);
        this.nbrUserEquipe = res;
        for(var value of this.nbrUserEquipe){
          this.blinkArry.push(value)
        }
        console.log(this.blinkArry)
          })


  }
  /*getnbrEquipe() {
  return this.equipeService.getNbrEquipe().subscribe(
    (res: any) => {
    console.log(res);
    this.nbrEquipe = res;
    }
  );
  }*/
  getnbrEquipe() {
    return this.equipeService.getNbrEquipe().subscribe(
      (res: any) => {
        console.log(res);
        this.nbrEquipe = res;
      }
    );
  }


  getStatistique() {
    return this.dashboard.getStat().subscribe(
      (res: any) => {
        console.log(res);
        this.stat = res;
        for(var value of this.stat){
          this.startDateArry.push(value)
        }
        console.log(this.startDateArry)

        });
  }

  getNbrStade () {
    return this.stadeService.getNbrStade ().subscribe (
      (res: any) => {
        this.nbrStade = res;
      }
    );
  }

  getNbrUserEnable(){
    return this.dashboard.getNbrUser().subscribe(
      (res:any)=>{
        console.log(res);
        this.nbrUserEnabled=res;
      },error => console.log(error),() =>
      {

      }
    )
  }
  getNbrUserNotEnabled() {
    return this.dashboard.getNbrUserNotEnabled().subscribe(
      (result: any) => {
        console.log(result);
        this.nbrUserNotEnabled = result;
      }
    )
  }

  
  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


}
