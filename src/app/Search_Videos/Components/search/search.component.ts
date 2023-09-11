import { Component } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { Response_Video_Data } from 'src/app/Models/response_video_data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css', './search.component.two.css', './search.component.input.css'],
})
export class SearchComponent {
  topic!: string;
  box: Response_Video_Data[] = [];

  // Pagination Variable
  public page!: number;

  // br spaces check
  brCheck: boolean = true;

  constructor(private _ApiService: ApiServiceService) {}

  EnviarRequest() {
    if(this.topic == undefined || this.topic == '' || this.topic === ' ' || this.topic.length == 0){
      throw alert("The box should'nt be Emplty");
    }

    this._ApiService.GetVideosByPromt(this.topic).subscribe((resp) => {
      if (Array.isArray(resp)) {
        this.box = resp; // Asignamos el arreglo directamente si es un arreglo
      } else {
        this.box = [resp]; // Si no es un arreglo, lo convertimos en un arreglo con un solo elemento
      }
    });

    this.brCheck = false;
  }
  
}
