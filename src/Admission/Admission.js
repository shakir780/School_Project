import React from 'react'
 import './Admission.css'
const Admission = () => {

  const[formActive,setNextForm]=React.useState(false)
  
  return (
    <div className='Registration__section'>
    <div class="container">
        <header>Registration</header>

        <form className={ formActive ? "secActive" : " " } action="#">
            <div class="form first">
                <div class="details personal">
                    <span class="title">1.Personal Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name" required/>
                        </div>

                        <div class="input-field">
                            <label>Date of Birth</label>
                            <input type="date" placeholder="Enter birth date" required/>
                        </div>

                        <div class="input-field">
                            <label>Email</label>
                            <input type="text" placeholder="Enter your email" required/>
                        </div>

                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="number" placeholder="Enter mobile number" required/>
                        </div>

                        <div class="input-field">
                            <label>Gender</label>
                            <select required>
                                <option disabled selected>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>

                        <div class="input-field">
                            <label>Country</label>
                            <input type="text" placeholder="Enter your Country " required/>
                        </div>
                        <div class="input-field">
                            <label>Country of Citizenship</label>
                            <input type="text" placeholder="Enter your Country of Citizenship" required/>
                        </div>
                    </div>
                </div>

                <div class="details ID">
                    <span class="title">2.Identity Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>ID Type</label>
                            <input type="text" placeholder="Enter ID type" required/>
                        </div>

                        <div class="input-field">
                            <label>ID Number</label>
                            <input type="number" placeholder="Enter ID number" required/>
                        </div>

                        <div class="input-field">
                            <label>Issued Authority</label>
                            <input type="text" placeholder="Enter issued authority" required/>
                        </div>

                        <div class="input-field">
                            <label>Issued State</label>
                            <input type="text" placeholder="Enter issued state" required/>
                        </div>

                        <div class="input-field">
                            <label>Issued Date</label>
                            <input type="date" placeholder="Enter your issued date" required/>
                        </div>

                        <div class="input-field">
                            <label>Expiry Date</label>
                            <input type="date" placeholder="Enter expiry date" required/>
                        </div>
                    </div>
                    <div className="languages">
                  <span className='title'>3.Languages</span>
               
                <div className="fields">
                  <div className="input-field">
                    <label>First laguage</label>
                    <input type="text" placeholder='Enter your first language' />
                    </div>
                    
                    <div className="input-field">
                    <label>Second laguage</label>
                    <input type="text" placeholder='Enter your Second language' />
                  </div>
                </div>
                </div>
                </div> 
                    <button onClick={()=>setNextForm(true)} class="nextBtn">
                        <span class="btnText">Next</span>
                        <i class="uil uil-navigator"></i>
                    </button>
               
               
            </div>

            <div class="form second">
                <div class="details address">
                    <span class="title">4.Address Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Address Type</label>
                            <input type="text" placeholder="Permanent or Temporary" required/>
                        </div>

                        <div class="input-field">
                            <label>Nationality</label>
                            <input type="text" placeholder="Enter nationality" required/>
                        </div>

                        <div class="input-field">
                            <label>State</label>
                            <input type="text" placeholder="Enter your state" required/>
                        </div>

                        <div class="input-field">
                            <label>District</label>
                            <input type="text" placeholder="Enter your district" required/>
                        </div>

                        <div class="input-field">
                            <label>Block Number</label>
                            <input type="number" placeholder="Enter block number" required/>
                        </div>

                        <div class="input-field">
                            <label>Ward Number</label>
                            <input type="number" placeholder="Enter ward number" required/>
                        </div>
                    </div>
                </div>

                <div class="details family">
                    <span class="title">5.Family Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Father Name</label>
                            <input type="text" placeholder="Enter father name" required />
                        </div>

                        <div class="input-field">
                            <label>Mother Name</label>
                            <input type="text" placeholder="Enter mother name" required/>
                        </div>

                        <div class="input-field">
                            <label>Grandfather</label>
                            <input type="text" placeholder="Enter grandfther name" required/>
                        </div>

                      

                        

                       
                    </div>

                   
                </div> 
                <div className="Education">
                  <span className="title">6.Education</span>
                  <br/>
                  <span className='title'>HighSchool,MiddleSchool</span>
                  <div className="fields">
                    <div className="input-field">
                        <label>instituition name</label>
                        <input type="text" placeholder='instituition name' required />

                    </div>
                    <div className="input-field">
                        <label>level achieved</label>
                        <input type="number" placeholder='level achieved' required />

                    </div> 

                    <div className="input-field">
                        <label>last year of attendance</label>
                        <input type="date" placeholder='last year of attendance' required />

                    </div>
                  
                
                    
                    
                  </div>
                
                </div>
                <div className="Other">
               <span className="title">Other:</span>
               <div className="fields">
               <div className="input-field">
                        <label>instituition name</label>
                        <input type="text" placeholder='instituition name' required />

                    </div>
                    <div className="input-field">
                        <label>level achieved</label>
                        <input type="number" placeholder='level achieved' required />

                    </div> 
                    <div className="input-field">
                        <label>last year of attendance</label>
                        <input type="date" placeholder='last year of attendance' required />

                    </div>

               </div>
              
                  </div>
                  <div className="Accomodation">
                     <span className="title">7.Accomadation</span>
                     <div className="fields">
                       <div className="input-field">
                          <label>I am intrested in this following</label>
                          <select required>
                                <option disabled selected>College Residence</option>
                               
                                <option>Apartment</option>
                                <option>HomeStay</option>
                                <option>Not Required</option>
                                <option>Not Decided</option>
                            </select>
                       </div>
                     </div>
                  </div>
                  <div class="buttons">
                        <div onClick={()=>setNextForm(!true)} class="backBtn">
                            <i class="uil uil-navigator"></i>
                            <span class="btnText">Back</span>
                        </div>
                        

                        <button class="sumbit">
                            <span class="btnText">Submit</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    </div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Admission