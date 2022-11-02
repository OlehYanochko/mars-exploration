import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { RoverPhotoService } from '../../services/rover-photo.service';
import { IFormValues, ISelect, IResponce } from '../../interfaces';

@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {
  settingsForm = new FormGroup({
    rover: new FormControl('', Validators.required),
    camera: new FormControl(''),
    sol: new FormControl(0, Validators.required)
  });
  rovers: ISelect[] = [
    { value: 'curiosity', viewValue: 'Curiosity' },
    { value: 'opportunity', viewValue: 'Opportunity' },
    { value: 'spirit', viewValue: 'Spirit' },
  ];
  cameras: ISelect[] = [];
  curiosityCameras: ISelect[] = [
    { viewValue: 'Front Hazard Avoidance Camera', value: 'FHAZ' },
    { viewValue: 'Rear Hazard Avoidance Camera', value: 'RHAZ' },
    { viewValue: 'Mast Camera', value: 'MAST' },
    { viewValue: 'Chemistry and Camera Complex', value: 'CHEMCAM' },
    { viewValue: 'Mars Hand Lens Imager', value: 'MAHLI' },
    { viewValue: 'Mars Descent Imager', value: 'MARDI' },
    { viewValue: 'Navigation Camera', value: 'NAVCAM' },
  ];
  opportunityAndSpiritCameras: ISelect[] = [
    { viewValue: 'Front Hazard Avoidance Camera', value: 'FHAZ' },
    { viewValue: 'Rear Hazard Avoidance Camera', value: 'RHAZ' },
    { viewValue: 'Navigation Camera', value: 'NAVCAM' },
    { viewValue: 'Panoramic Camera', value: 'PANCAM' },
    { viewValue: 'Miniature Thermal Emission Spectrometer (Mini-TES)', value: 'MINITES' }
  ];
  pageNumber: number = 1;
  photosSrc: string[] = [];
  noMoreItems = true;
  noPhotosExist = false;
  constructor(
    private roverPhotoService: RoverPhotoService
  ) { }

  ngOnInit(): void {
    this.settingsForm.get('rover')?.valueChanges.subscribe(val => {
      if (val === 'curiosity') {
        this.cameras = this.curiosityCameras;
      } else if (val === "opportunity" || val === "spirit") {
        this.cameras = this.opportunityAndSpiritCameras;
      } else {
        this.cameras = [];
      }
    });
  }


  onSubmit() {
    this.pageNumber = 0;
    this.roverPhotoService.getPhotos(this.settingsForm.value as IFormValues, this.pageNumber).subscribe(
      (data: IResponce) => {
        this.photosSrc = data.photos.map(elem => {
          return elem.img_src;
        })
        if (this.photosSrc.length === 25) {
          this.noMoreItems = false;
        } else {
          this.noMoreItems = true;
        }
        this.noPhotosExist = !this.photosSrc.length;
      }
    )
  }

  loadMore() {
    this.pageNumber++;
    this.roverPhotoService.getPhotos(this.settingsForm.value as IFormValues, this.pageNumber).subscribe(
      (data: IResponce) => {
        const newPhotos = data.photos.map(elem => {
          return elem.img_src;
        })
        this.photosSrc = this.photosSrc.concat(newPhotos);

        if (newPhotos.length === 25) {
          this.noMoreItems = false;
        } else {
          this.noMoreItems = true;
        }
      }
    )
  }

}
