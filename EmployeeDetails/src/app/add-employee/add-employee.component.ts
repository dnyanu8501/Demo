import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataPassingService } from '../data-passing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
 
  endPoint='user'
  userFormData!:FormGroup
  // address1!:FormGroup
  editId:any
  editData:any
  submitBtn:any=true
constructor(private fb:FormBuilder ,public dataPassingService:DataPassingService,public router:Router){}
  ngOnInit(){
    this.editData=this.dataPassingService.editData
    this.editId=this.dataPassingService.id
    this.submitBtn=this.dataPassingService.submitBtn
    // if(this.dataPassingService.editData){
    //   this.submitBtn=false
    // }
    this.getData()
  }
  ngDoCheck(){
    console.log(".>>>",this.dataPassingService.id);
    if(this.dataPassingService.id){
     
      
      this.submitBtn=false
    }else{
      this.submitBtn=true
    }
  }
  getData(){
this.userFormData=this.fb.group({
  fname:[this.editData?this.editData[0]?.fname: '',[Validators.required]],
  lname:[this.editData?this.editData[0]?.lname:'',[Validators.required]],
  email:[this.editData?this.editData[0]?.email:'',[Validators.required]],
  dob:[this.editData?this.editData[0]?.dob:'',[]],
  gender:[this.editData?this.editData[0]?.gender:'',[]],
  education:[this.editData?this.editData[0]?.education:'',[Validators.required]],
  company:[this.editData?this.editData[0]?.company:'',[Validators.required]],
  exp:[this.editData?this.editData[0]?.exp:'',[Validators.required]],
  package:[this.editData?this.editData[0]?.package:'',[Validators.required]],
  }
)}
emptydata(){
  alert("Fill The Data")
}

reset(){
this.userFormData.reset()
}

  submit(){
    this.dataPassingService.postApiCall(this.endPoint,this.userFormData.value).subscribe(res=>{
      alert('Data Submitted Successfully')
    })
   this.userFormData.reset()
    // console.log(this.userFormData.value);
    
  }
  update(){
    this.dataPassingService.patchApiCall(this.endPoint,this.editId,this.userFormData.value).subscribe(res=>{
      alert('update Successfully')
       this.router.navigateByUrl('/usersList')
    
    })
  }
  ngOnDestroy(){
    this.dataPassingService.submitBtn=true
    this.dataPassingService.editData=[]
    this.dataPassingService.id=''

  }
}
