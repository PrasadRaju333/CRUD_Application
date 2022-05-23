import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router, ActivatedRoute} from '@angular/router';
import {Product} from '../product';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {


  details:any=[];
  id:any;
    title:any
    description:any
    ImageURL:any
    isAvailable:any;
    product:Product = new Product;
  constructor(private ds:DataServiceService, private router:Router, private ar:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.ar.paramMap.subscribe(params => {
      let id:any = params.get('id');
      if(id){
        let item:any = this.ds.getData('data');
        this.details=JSON.parse(item);
        let index = this.details.findIndex((ele:any)=>ele.id === parseInt(id));
        this.title = this.details[index].title;
        this.description = this.details[index].description;
        this.ImageURL = this.details[index].imageUrl;
        this.isAvailable = this.details[index].isAvailable;
        this.id = this.details[index].id;
      }
      
      
    })
  }
  onSubmit(){
    if(this.title !=undefined || this.description !=undefined || this.ImageURL !=undefined){

    let data={
      id: this.id ? this.id : Math.floor(Math.random() * 100),
      title:this.title,
      description:this.description,
      imageUrl:this.ImageURL,
      isAvailable:this.isAvailable
    }
    
    let item:any = this.ds.getData('data');
    if(item){
      this.details=JSON.parse(item);
      let index = this.details.findIndex((ele:any)=>ele.id === parseInt(this.id));
      if(index > -1){
        let findItem = this.details[index];
         findItem.title = this.title;
        findItem.description = this.description;
        findItem.imageUrl = this.ImageURL;
        findItem.isAvailable = this.isAvailable;
      }else{
        this.details.push(data);
      }
      
    }else{
      this.details.push(data);
    }
    this.ds.setData('data',this.details);

   
    
    this.router.navigateByUrl('')
  }
  else{
    alert('fill all fields')
  }
  }
  
  

}
