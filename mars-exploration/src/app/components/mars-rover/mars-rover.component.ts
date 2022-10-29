import { Component, OnInit } from '@angular/core';
interface ISelect {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-mars-rover',
  templateUrl: './mars-rover.component.html',
  styleUrls: ['./mars-rover.component.scss']
})
export class MarsRoverComponent implements OnInit {
  sol: number= 0;
  rovers: ISelect[] = [
    {value: 'curiosity', viewValue: 'Curiosity'},
    {value: 'opportunity', viewValue: 'Opportunity'},
    {value: 'spirit', viewValue: 'Spirit'},
  ];
  cameras: ISelect[] = [
    {value: 'FHAZ', viewValue: 'Front Hazard Avoidance Camera'},
    {value: 'RHAZ', viewValue: 'Rear Hazard Avoidance Camera'},
    {value: 'MAST', viewValue: 'Mast Camera'},
    {value: 'CHEMCAM', viewValue: 'Chemistry and Camera Complex'},
    {value: 'MAHLI', viewValue: 'Mars Hand Lens Imager'},
    {value: 'MARDI', viewValue: 'Mars Descent Imager'},
    {value: 'NAVCAM', viewValue: 'Navigation Camera'},
    {value: 'PANCAM', viewValue: 'Panoramic Camera'},
    {value: 'MINITES', viewValue: 'Miniature Thermal Emission Spectrometer (Mini-TES)'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
