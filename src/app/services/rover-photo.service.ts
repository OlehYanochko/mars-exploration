import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFormValues, IResponce } from '../interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoverPhotoService {

  constructor(
    private http: HttpClient
  ) { }

  getPhotos(formValues: IFormValues, pageNumber: number = 1): Observable<IResponce> {
    const params: any = {
      sol: formValues.sol,
      api_key: 'onc6JTjIayEwptEJVaaahgxSlYiLL7pUcARcHgrp',
      page: pageNumber
    };
    if (formValues.camera) {
      params.camera = formValues.camera;
    }

    return this.http.get<IResponce>(`https://api.nasa.gov/mars-photos/api/v1/rovers/${formValues.rover}/photos`, {
      params: params
    });
  }
}
