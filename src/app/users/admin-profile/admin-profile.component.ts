import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../Service/user.service';
import {Router} from '@angular/router';
import {CarteService} from '../../Service/carte.service';
import {CarteModele} from '../../modele/Carte.modele';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';
import html2canvas from 'html2canvas';
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor(private userService:UserService   ,private route:Router,private carteService:CarteService) { }
  user:any={};
  elementType:any;
  correctionLevel:any;
  qrCodeValue:any
  carte=new CarteModele();
  age:any;
  ngOnInit(): void {
    this.User();
  }
  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);

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
  User(){
    return this.userService.getUserid(localStorage.getItem('id')).subscribe(
      (res:any)=>{
        this.user=res
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
