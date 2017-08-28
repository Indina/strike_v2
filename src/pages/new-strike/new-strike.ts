import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { StrikeType } from "../../model/strikeType";
import { StrikePoint } from "../../model/strikePoint";
import { Strike } from "../../model/strike";
import { DatabaseProvider } from "../../providers/database/database";
import { MyStrikesPage } from "../my-strikes/my-strikes";
import { ImageProvider } from "../../providers/image/image";
import { FileProvider } from "../../providers/file/file";
import { PreloaderProvider } from "../../providers/preloader/preloader";

/**
 * Generated class for the NewStrikePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-strike',
  templateUrl: 'new-strike.html',
})
export class NewStrikePage {

private _dummyImg :string =  'assets/icon/photo-camera.svg';
private _dummyImgUrl :string =  'https://firebasestorage.googleapis.com/v0/b/strike-43aa1.appspot.com/o/photo-camera.svg?alt=media&token=98751107-3e2d-4465-8ba5-357c88f0e21d';

strikeTypes:StrikeType[];
selectedStrikeType:StrikeType;

strikePoints:StrikePoint[];
selectedStrikePoint:StrikePoint;

title:string;
description:string;
img: string = this._dummyImg;
imageName:string;
points:number;
cordovaExists = false;
file:any;
newStrike:Strike;

constructor(public navCtrl: NavController,
  public db : DatabaseProvider,
  public imageProvider:ImageProvider,
  public platform:Platform,
  public fileProvider:FileProvider,
  private preLoader : PreloaderProvider
)
{

  if(this.platform.is('cordova')){
    this.cordovaExists = true;
  }

  this.strikeTypes = db.strikeTypes();
  this.selectedStrikeType = this.strikeTypes[0];

  this.strikePoints= db.strikePoints();
  this.selectedStrikePoint = this.strikePoints[0];
}



save(){

  this.preLoader.displayPreloader();

  this.newStrike = new Strike();
  this.newStrike.title  = this.title;
  this.newStrike.description = this.description;
  this.newStrike.img = this.img;
  this.newStrike.type = this.selectedStrikeType.name;
  this.newStrike.typeImgSrc = this.selectedStrikeType.imgSrc;
  this.newStrike.points = this.selectedStrikePoint.value;


  if(this.img!==this._dummyImg){

    this.db.uploadImage(this.img,this.imageName).
    then(snapshot=>{
        let uploadedImageUrl : any = snapshot.downloadURL;
        this.newStrike.img = uploadedImageUrl;
        this.db.saveNewStrike(this.newStrike).then(res=>{

            this.preLoader.hidePreloader();
            this.navCtrl.push(MyStrikesPage); // Gå til strikes listen

        });
    }).
    catch(err=>{
        this.preLoader.hidePreloader();
        console.log(err);
    });

  }
  else{
    this.newStrike.img = this._dummyImgUrl;
    this.db.saveNewStrike(this.newStrike).then(res=>{
          this.preLoader.hidePreloader();
          this.navCtrl.push(MyStrikesPage); // Gå til strikes listen
  }).
    catch(err=>{
        this.preLoader.hidePreloader();
        console.log(err);
    });;
  }




}

fileUpload(event){
  this.file = event;
  let file :File = event.srcElement.files[0] as File;
  this.imageName = file.name;
  this.fileProvider.readFile(file).then((imgData : string)=>{
    this.img = imgData;
  });
}

selectImage(){


  if(this.cordovaExists){
      this.imageProvider.selectImage().then(imageString=>{
     this.img = imageString;
  }).catch();
  }
  else{

  }


}


}

