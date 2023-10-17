import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http:HttpClient) { }
  uploadImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post('http://localhost:5001/upload', formData,{ responseType: 'blob' });
  }
}