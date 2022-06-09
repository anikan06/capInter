import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  dataArr: Array<any> = [];

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.getData.getuser().subscribe(res => {
      this.dataArr = res;
    })
  }

}
