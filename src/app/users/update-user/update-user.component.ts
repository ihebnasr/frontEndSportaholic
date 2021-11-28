import { Component, OnInit, ViewEncapsulation,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import {CarteService} from '../../Service/carte.service';
import {CarteModele} from '../../modele/Carte.modele';
import {jsPDF }from "jspdf";
import html2canvas from 'html2canvas';


@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],

})
export class UpdateUserComponent implements OnInit {

  constructor(private userService:UserService,private route: ActivatedRoute   ,private router:Router,private carteService:CarteService) { }
  user:any={};
  elementType:any;
  correctionLevel:any;
  qrCodeValue:any
  carte=new CarteModele();
  age:any;
  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.username)
    console.log("hello")


  }
  getCarte(id){
    return this.carteService.getCartByEquipe(id).subscribe(
      (res:any)=>{
        this.carte=res;
        console.log(this.carte);
        this.carte.modelCarte= atob(this.carte.modelCarte);

      }
    )
  }

  getUser(username){
    this.userService.getUser(username).subscribe(
      (res:any)=>{
        console.log(res);
        this.user = res;
        this.user.image = atob(this.user.image);
        this.user.equipe.logo = atob(this.user.equipe.logo);
        this.user.imageCIn = atob(this.user.imageCIn);


        var timeDiff = Math.abs(Date.now() - new Date(this.user.dateNais).getTime());
        this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      } ,
      error => {
        console.log(error);
      },() => {
        this.elementType = NgxQrcodeElementTypes.CANVAS;
        this.correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
        this.qrCodeValue =this.user.username;

        this.getCarte(this.user.equipe.id)
      }
      );

  }
  change(x) {
   if (x.target.checked === true) {
     this.user.situation='enabled'
   }else {
     this.user.situation='NotEnabel'
   }
   return this.userService.enabledUSer(this.user.username,x.target.checked,this.user).subscribe(
     (res :any)=>{
       console.log(this.user)
     } ,
     error => {
       if(this.user.situation==='enabled'){
         console.log(localStorage.getItem('token'))
        this.user.situation='NotEnabled'
     }else {
         this.user.situation='enabled'
         console.log(localStorage.getItem('token'))

       }
     }
  )
  }
  @ViewChild('content',{static: true})el!:ElementRef<HTMLImageElement>
 generatePDF(){
    html2canvas(this.el.nativeElement).then((canvas)=>{
          const imageData=canvas.toDataURL('image/jpeg', 1.0);
          const pdf= new jsPDF('p', 'mm');
          const imageProps=pdf.getImageProperties(imageData);
          const pdfw=pdf.internal.pageSize.getWidth();
          const pdfh=(imageProps.height* pdfw)/imageProps.width;
          pdf.addImage(imageData,'JPEGS', 0,0, 130, 80);
          pdf.save('carte.'+this.carte.nomCarte+".pdf")

    })

 }


}



