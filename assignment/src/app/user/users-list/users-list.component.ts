import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataPassingService } from 'src/app/services/data-passing.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
 endPoint='user'
 userListData:any=[]
 searchValue:any
  constructor(public dataPassingService:DataPassingService,public router:Router){}
  ngOnInit(){
    this.getData()
  }
  getData() {
  this.dataPassingService.getApiCall(this.endPoint).subscribe(res=>{
console.log(res);
this.userListData=res

  })
  }
  edit(id:any){
    let editData:any=[]
   this.userListData.forEach((element:any) => {
    if(id==element.id){
      editData.push(element)
    }
   });
   console.log(editData);
  this.dataPassingService.editData=editData
  this.dataPassingService.id=id

   this.router.navigateByUrl('/userForm')
    
  }
}
