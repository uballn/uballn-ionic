import { FirebaseService } from './../../providers/firebase-service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { ModalPage } from './modal-page';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-setup-profile',
  templateUrl: 'setup-profile-page.html',
})
export class SetupProfilePage {
  @ViewChild('fileInput') fileInput;
  isReadyToSave: boolean;
  nameForm: FormGroup;
  invitations: Observable<any[]>;
  profileData: any;
  currUserName: string;
  name: string;
  experience: string;
  gender: string;
  height: string;
  weight: string;
  birthday: string;
  uid: string;
  updateUserIMG: string;
  private imageSrc: string;

  constructor(
    public navCtrl: NavController,
    public firebaseService: FirebaseService,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public storage: Storage,
    public camera: Camera) {
      localStorage.setItem('img','https://firebasestorage.googleapis.com/v0/b/uballn-basketball-2f8d6.appspot.com/o/profileImage%2FB47978EC-4286-4179-AA88-116C362C9176?alt=media&token=30b65ab3-70ec-4426-9e5f-838be4f2602b');
      this.updateUserIMG = localStorage.getItem('img');
  }

  ionViewWillEnter() {
  }

  ionViewWillLeave(){
    this.uid = localStorage.getItem('uid');
    this.firebaseService.welcomeMessage(this.uid);
  }

  updateUser() {
    if (this.name === undefined || this.height === undefined || this.weight === undefined || this.experience === undefined || this.gender === undefined || this.birthday === undefined) {
      let toast = this.toastCtrl.create({
        message: 'Oops! All fields required.',
        duration: 2000,
        position: 'top'
      });
      toast.present();

  } else {
      localStorage.setItem('name',this.name);
      localStorage.setItem('height', this.height);
      localStorage.setItem('weight', this.weight);
      localStorage.setItem('experience', this.experience);
      localStorage.setItem('gender', this.gender);
      localStorage.setItem('birthday', this.birthday);
      localStorage.setItem('setupNeeded','false');

      this.firebaseService.updateUserProfile()
        .then(()=>{
          this.navCtrl.setRoot('TabsPage');
      })
    }
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: 100,
        targetWidth: 500,
        targetHeight: 500,
        encodingType: this.camera.EncodingType.JPEG,      
        correctOrientation: true
      }).then((data) => {
        this.storage.set('profilePic', data);
        localStorage.setItem('img', 'data:image/png;base64,'+data);
        this.updateUserIMG = 'data:image/png;base64,'+data;    
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.updateUserIMG = imageData;
      localStorage.setItem('img', imageData);
    };

    reader.readAsDataURL(event.target.files[0]);
  }

}