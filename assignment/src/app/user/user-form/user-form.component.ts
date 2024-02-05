import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataPassingService } from 'src/app/services/data-passing.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  endPoint='user'
  userFormData!:FormGroup
  editId:any
  editData:any
  updateBtn:boolean=false
constructor(private fb:FormBuilder ,public dataPassingService:DataPassingService,public router:Router){}
  ngOnInit(){
    this.editData=this.dataPassingService.editData
    this.editId=this.dataPassingService.id
    if(this.dataPassingService.editData){
      this.updateBtn=true
    }
    this.getData()
  }
  getData(){
this.userFormData=this.fb.group({
  firstName:[this.editData?this.editData[0]?.firstName: '',[Validators.required]],
  lastName:[this.editData?this.editData[0]?.lastName:'',[Validators.required]],
  email:[this.editData?this.editData[0]?.email:'',[Validators.required]],
  address:[this.editData?this.editData[0]?.address.street+","+this.editData[0]?.address.suite+","+this.editData[0]?.address.city+","+this.editData[0]?.address.zipcode:'',[Validators.required]],

})
  }
  submit(){
    this.dataPassingService.postApiCall(this.endPoint,this.userFormData.value).subscribe(res=>{
      alert('Data Submitted Successfully')
    })
   
    // console.log(this.userFormData.value);
    
  }
  update(){
    this.dataPassingService.patchApiCall(this.endPoint,this.editId,this.userFormData.value).subscribe(res=>{
      alert('update Successfully')
       this.router.navigateByUrl('/usersList')
    })
  }
  ngOnDestroy(){
    this.dataPassingService.updateBtn=false
    this.dataPassingService.editData=[]
    // this.editId=[]
  }

}
