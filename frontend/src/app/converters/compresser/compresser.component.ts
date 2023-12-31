import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AllImagesService } from 'src/app/services/all-images.service';
import { ImageCompresserService } from 'src/app/services/image-compress.service';

@Component({
  selector: 'app-compresser',
  templateUrl: './compresser.component.html',
  styleUrls: ['./compresser.component.css']
})
export class CompresserComponent {

  constructor (private imageCompresser:ImageCompresserService,private sanitizer:DomSanitizer,private allImagesService: AllImagesService){ }
  savedImage:any
  format:string = ''

  outImage:any
  inpImage:any
  imageName:string = ''
  imageFormat:string = ''
  name:string = `${this.imageName}.${this.imageFormat}`
  loading:boolean = false
  close(){
    this.savedImage=null
  }
  quality:string = ''
  qualityCont:number = 0
  inputVal(val:any){
    this.quality = val.target.value
    console.log(this.quality)
    this.qualityCont = Number(this.quality)*2
  }
loadImage(img:any){
  const file = img.target.files[0]
  this.inpImage = file
  this.imageName = file.name.split('.')[0]
  this.imageFormat = file.name.split('.')[file.name.split('.').length -1]

  console.log(this.format)
  const reader = new FileReader()
  reader.onload=()=>{
    this.savedImage = reader.result
  }
  if(file){
    reader.readAsDataURL(file)
  }

}
sendToServer(){
  this.loading = true
  if(this.format === 'jpg'){
    this.format = 'jpeg'
  }
  
  this.imageCompresser.uploadImage(this.inpImage,this.quality).subscribe(res=>{
    const imagetoblog = window.URL.createObjectURL(res)
    this.outImage = this.sanitizer.bypassSecurityTrustResourceUrl(imagetoblog)
    this.allImagesService.addConverts(this.outImage)
    this.loading =false
    
    })
 
}
convertNext(){
this.outImage = null
this.savedImage = null
this.quality = ""
this.inpImage = null
this.name = ""
}
}
