import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  
details:any =[];


  constructor(private ds:DataServiceService, private router:Router) { 
    

  }
  
  ngOnInit() {
    let data:any = this.ds.getData("data");
    this.details = JSON.parse(data);
  }
  navigate(){
    this.router.navigateByUrl('/add')
  }

  edit(item:any){
this.router.navigate(['/edit',item.id])

  }
  delete(item:any){
    let index = this.details.findIndex((ele:any)=>ele.id === item.id);
    if(index > -1){
      this.details.splice(index,1);
      this.ds.setData('data',this.details)
    }

  }

}
