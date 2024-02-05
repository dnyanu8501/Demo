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
  address1!:FormGroup
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
  name:[this.editData?this.editData[0]?.name: '',[Validators.required]],
  username:[this.editData?this.editData[0]?.username:'',[Validators.required]],
  email:[this.editData?this.editData[0]?.email:'',[Validators.required]],
  // address:[this.editData?this.editData[0]?.address.street+","+this.editData[0]?.address.suite+","+this.editData[0]?.address.city+","+this.editData[0]?.address.zipcode:'',[Validators.required]],
  address: this.fb.group({
    street: [this.editData?this.editData[0]?.address.street:''],
    suite: [this.editData?this.editData[0]?.address.suite:''],
    city: [this.editData?this.editData[0]?.address.city:''],
    zipcode: [this.editData?this.editData[0]?.address.zipcode:''],
    // geo: this.fb.group({
    //   lat: ['', Validators.required],
    //   lng: ['', Validators.required]
    // })
})
  }
)}

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
    this.dataPassingService.submitBtn=true
    this.dataPassingService.editData=[]
    this.dataPassingService.id=''
    // this.editId=[]
  }

}
