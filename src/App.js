import React, { useState } from 'react';
import './App.css';
function Container2()
  {
    document.getElementById('container2').style.display='block'
    document.getElementById('container1').style.display='none'
    document.getElementById('imageContainer').style.display='none'
    document.getElementById('imagecontainer1').style.display='block'
    
  }

  function Container3()
  {
    document.getElementById('imagecontainer2').style.display='block'
    document.getElementById('container3').style.display='block'
    document.getElementById('container2').style.display='none'
    document.getElementById('container1').style.display='none'
    document.getElementById('imageContainer').style.display='none'
    document.getElementById('imagecontainer1').style.display='none'
  }

  function Container4()
  {
    document.getElementById('container4').style.display='block'
    document.getElementById('submitbut').style.display='block'
    document.getElementById('container3').style.display='none'
    document.getElementById('imagecontainer2').style.display='none'
    document.getElementById('container2').style.display='none'
    document.getElementById('container1').style.display='none'
    document.getElementById('imageContainer').style.display='none'
    document.getElementById('imagecontainer1').style.display='none'
    


  }
  
const TalentAcquisitionForm = () => {
  const [basicDetails, setBasicDetails] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
  });

  const [documentCollection, setDocumentCollection] = useState({
    class10Marksheet: '',
    class12Marksheet: '',
    graduationMarksheet: '',
    postGraduationMarksheet: '',
    resumeCV: '',
    recommendationLetter: '',
    salarySlips: '',
    others: '',
  });

  const [statementOfPurpose, setStatementOfPurpose] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const [interviewAvailability, setInterviewAvailability] = useState({
    interviewEmail: '',
    location: '',
    interviewDate: '',
    interviewTime: '',
    timeZone: '',
    interviewMedium: '',
  });

  const handleBasicDetailsChange = (e) => {
    setBasicDetails({ ...basicDetails, [e.target.name]: e.target.value });
  };

  const handleDocumentCollectionChange = (e) => {
    setDocumentCollection({ ...documentCollection, [e.target.name]: e.target.value });
  };

  const handleStatementOfPurposeChange = (e) => {
    setStatementOfPurpose({ ...statementOfPurpose, [e.target.name]: e.target.value });
  };

  const handleInterviewAvailabilityChange = (e) => {
    setInterviewAvailability({ ...interviewAvailability, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      basicDetails,
      documentCollection,
      statementOfPurpose,
      interviewAvailability,
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
<div className='mainContainer'>
  <div className='container1' id='container1'>
        <h2 className='basicText'>Basic Details</h2>
        <div>
          <input type="text" name="name" placeholder='Name' value={basicDetails.name} onChange={handleBasicDetailsChange} required className='inputName'/>

        
          <input type="email" name="email" placeholder='Email' value={basicDetails.email} onChange={handleBasicDetailsChange} required className='inputName'/>
        
          <input type="tel" name="mobileNumber" placeholder='Mobile Number' value={basicDetails.mobileNumber} onChange={handleBasicDetailsChange} className='inputName'/>
         <input type="date" name="dateOfBirth" placeholder='Date Of Birth' value={basicDetails.dateOfBirth} onChange={handleBasicDetailsChange} className='inputName'/>
       
        </div>
        
</div>
<div className='imageContainer'id='imageContainer'>
       <h4 className='image' onClick={Container2}>click</h4>
     </div>
<div className='container2' id='container2'>
        <h2 className='documentText'>Document Collection</h2>
        <label className='documentInputs'  id='documentInputs7'>
          Class 10 Marksheet*
          <input type="file" placeholder='Class 10 Marksheet' name="class10Marksheet" onChange={handleDocumentCollectionChange} required className='input1'/>
        </label><br/>
        <label className='documentInputs' id='documentInputs'>
          Class 12 Marksheet*
          <input type="file" name="class12Marksheet" onChange={handleDocumentCollectionChange} required className='input1'/>
        </label><br/>
        <label className='documentInputs' id='documentInputs1'>
          Graduation Marksheet*
          <input type="file" name="graduationMarksheet" onChange={handleDocumentCollectionChange} required className='input2' />
        </label><br/>
        <label className='documentInputs' id='documentInputs2'>
          Post Graduation Marksheet
          <input type="file" name="postGraduationMarksheet" onChange={handleDocumentCollectionChange} className='input3'/>
        </label><br/>
        <label className='documentInputs' id='documentInputs3'>
          Resume/CV*
          <input type="file" name="resumeCV" onChange={handleDocumentCollectionChange} required  className='input4'/>
        </label><br/>
        <label className='documentInputs' id='documentInputs4'>
          Recommendation Letter
          <input type="file" name="recommendationLetter" onChange={handleDocumentCollectionChange} className='input5'/>
        </label><br/>
        <label className='documentInputs' id='documentInputs5'>
          Salary Slips
          <input type="file" name="salarySlips" onChange={handleDocumentCollectionChange} className='input6'/>
        </label><br/>
        <label className='documentInputs'id='documentInputs6'>
          Others
          <input type="file" name="others" onChange={handleDocumentCollectionChange} className='input7' />
        </label>
</div>
<div className='imageContainer' id='imagecontainer1'>
    
       <h4 className='image1' onClick={Container3}>click</h4>
</div>
<div className='container3' id='container3'>
        <h2 className='statementText'>Statement of Purpose</h2>
        <label className='statement1'>
          a. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?*
          <textarea
            name="question1"
            value={statementOfPurpose.question1}
            onChange={handleStatementOfPurposeChange}
            required
            maxLength={300}
            cols={70}
            className='statementinputs'
          />
        </label><br/>

        <label className='statement1' id='statement2'>
          b. Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?*
          <textarea
            name="question2"
            value={statementOfPurpose.question2}
            onChange={handleStatementOfPurposeChange}
            required
            maxLength={300}
            cols={70}
            className='statementinputs'
          />
        </label><br/>

        <label className='statement1' id='statement3' >
          c. What are the three things that are most important to you in a job?*
          <textarea
            name="question3"
            value={statementOfPurpose.question3}
            onChange={handleStatementOfPurposeChange}
            required
            maxLength={300}
            cols={70}
            className='statementinputs'
          />
        </label>
</div>
<div className='imageContainer' id='imagecontainer2'>
       <h4 className='image2' onClick={Container4}>click</h4>
</div>
<div className='container4' id='container4'>
        <h2 className='interviewText'>Interview Availability</h2>
        <label className='interviewInputs'>
          a. Email*
          <input type="email" name="interviewEmail" value={interviewAvailability.interviewEmail} onChange={handleInterviewAvailabilityChange} required />
        </label><br/>
        <label className='interviewInputs'>
          b. Location*
          <input type="text" name="location" value={interviewAvailability.location} onChange={handleInterviewAvailabilityChange} required />
        </label><br/>
        <label className='interviewInputs'>
          c. Interview Date (Date)*
          <input type="date" name="interviewDate" value={interviewAvailability.interviewDate} onChange={handleInterviewAvailabilityChange} required />
        </label><br/>
        <label className='interviewInputs'>
          d. Interview Time (Time)*
          <input type="time" name="interviewTime" value={interviewAvailability.interviewTime} onChange={handleInterviewAvailabilityChange} required />
        </label><br/>
        <label className='interviewInputs'>
          e. Time Zone*
          <select name="timeZone" value={interviewAvailability.timeZone} onChange={handleInterviewAvailabilityChange} required>
            <option value="GMT">GMT</option>
            
          </select>
        </label><br/>
        <label className='interviewInputs'>
          f. Interview Medium*
          <select name="interviewMedium" value={interviewAvailability.interviewMedium} onChange={handleInterviewAvailabilityChange} required>
            <option value="In-Person">In-Person</option>
            <option value="Phone">Phone</option>
            <option value="Video">Video</option>
          </select>
        </label>
</div>


      </div>

      

      <button type="submit" id='submitbut'>Submit</button>
    </form>
  );
};

export default TalentAcquisitionForm;
