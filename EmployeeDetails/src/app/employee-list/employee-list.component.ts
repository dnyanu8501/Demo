import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataPassingService } from '../data-passing.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  endPoint='user'
  userListData:any=[]
  searchValue:any
  currentPage=1
   constructor(public dataPassingService:DataPassingService,public router:Router,public dialog: MatDialog){}
   ngOnInit(){
     this.getData()
   }
  //  ngAfterViewChecked(){
  //   this.getData()
  //  }
// ngAfterViewInit(){
//   this.getData()
// }

   getData() {
   this.dataPassingService.getApiCall(this.endPoint).subscribe((res:any)=>{
 console.log(res);
 this.userListData=res
 
   })
   }

   openDialog(){
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.getData()
      
    });
    
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
 
   const dialogRef = this.dialog.open(AddEmployeeComponent, {
    data: {},
  });

  dialogRef.afterClosed().subscribe((result:any) => {
    console.log('The dialog was closed');
    this.getData()
    
  });
  //   this.router.navigateByUrl('/userForm')
     
   }
   delete(id:any){
     this.dataPassingService.deleteApiCall(this.endPoint,id).subscribe((res:any)=>{
       alert("Data Deleted Successfully! . . .")
       this.getData()
     })
   }

}
