import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  allConverters:Array<object> = [
    {
      name : 'Format Converter',
      link : '/converter',
      desc : 'Convert your Image from JPG,JPEG,PNG to JPG,JPEG,PNG'
    },
    {
      name : 'Image Compresser',
      link : '/compresser',
      desc : 'Compress your Images with High Quality'
    },
    {
      name : 'Image Tone Modifier',
      link : '/tone',
      desc : 'Change Image\'s Brightness, Contrast, Sharpness, ...'
    },
  ]    
}
