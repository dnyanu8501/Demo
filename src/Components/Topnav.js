import React from 'react'
import { Link } from 'react-router-dom'

export default function Topnav() {
  return (
  
        <nav class="navbar navbar-expand-lg bg-secondary my-1">
  <div class="container-fluid">


    
  <span  href="#"  class="float-left margin-0 my-0">
      <img  class="float-left" src="https://cdn.pixabay.com/photo/2016/08/16/01/31/colors-1596915_640.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
      
    </span>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span> */}
    {/* </button> */}
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <Link class="nav-link text-light" aria-current="page" to=""><b>Weddings Photos</b></Link>
        <Link class="nav-link text-light" to="/weddingVedio"><b>Weddings Videos</b></Link>
        <Link class="nav-link text-light" ><b>Prewedding photos</b></Link>
      </div>


</div>

<button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Enquiry Here</button>


<div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog">
 
    <div class="modal-content">
      <div class="modal-header">
       
        <h4 class="modal-title"> <div class="card-header">Inquiry Form</div></h4>
      </div>
      <div class="modal-body">
  
    
  <div class="row justify-content-center">
    <div class="col">
      <div class="card">
       
        <div class="card-body">
         
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
          
        
        </div>
      </div>
    </div>
 
</div>
    </div>
      <div class="modal-footer bg-dark">
      <button type="button" class="btn btn-success" data-dismiss="modal">Submit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>


 
</div>

</div>
      </div>



    
  </div>
</nav>






  )
}
