

let yourName = localStorage.getItem("yName")
let yourCollege = localStorage.getItem("yCollege")
let yourProgram = localStorage.getItem("yProgram")
let textArea = document.getElementById('txtArea');

//functions to generate messages ----------------------------------------------------------------
//function to generate message for recruiter
function f1(){
  let yourName = localStorage.getItem("yName")
let yourCollege = localStorage.getItem("yCollege")
let yourProgram = localStorage.getItem("yProgram")
  let R_companyName_value=R_companyName.value;
   let R_jobRole_value = R_jobRole.value;
       message = `I landed on your LinkedIn profile while looking for internship opportunities at ${R_companyName_value}, and wanted to know if your team is in charge of the ${R_jobRole_value} position that is posted on LinkedIn. If you are part of the hiring team for this role, I would love to discuss more with you.`
       textArea.value =message;
  }

  //function to generate message for second college advice
  function f2(){
    let yourName = localStorage.getItem("yName")
let yourCollege = localStorage.getItem("yCollege")
let yourProgram = localStorage.getItem("yProgram")
  let C_collegeName_value=C_collegeName.value;
   let C_progName_value = C_progName.value;
   
       message = `Hi, I hope all is well. I’m currently pursuing ${yourProgram} program at  ${yourCollege}. I saw that you pursued ${C_progName_value} at ${C_collegeName_value}. I wish to take this course next year. I can learn from your experiences. Thanks.`
       textArea.value =message;
  }

  //function to generate message for follow up queries
  function f3(){
    let yourName = localStorage.getItem("yName")
let yourCollege = localStorage.getItem("yCollege")
let yourProgram = localStorage.getItem("yProgram")
     
         message = `Hey, Thanks for the quick reply. I was wondering if you can please help me with some of my queries below.`
         textArea.value = message;
    }
 //function to generate message for normal connection 
    function f4(){
      let yourName = localStorage.getItem("yName")
let yourCollege = localStorage.getItem("yCollege")
let yourProgram = localStorage.getItem("yProgram")
    
  let CF_companyName_value;
  if(CF_companyName.value!== ''){
    CF_companyName_value="at " + CF_companyName.value
  }else{
    CF_companyName_value= CF_companyName.value 
  }
  if(CF_sameCollegeSelect.checked){
    sameCollege = "I saw that you also pursued the same course. "
  }else{
    sameCollege = ''  
  }
   let CF_jobRole_value = CF_jobRole.value;
   
       message = `Hi, I hope all is well. I’m currently pursuing ${yourProgram} at ${yourCollege}.${sameCollege}I wish to become a ${CF_jobRole_value} like you and would love to talk about and learn from your experiences ${CF_companyName_value}. Thank you!`
       textArea.value =message;
  }
//function to generate message to reach out to a senior person
   function f5(){
    let yourName = localStorage.getItem("yName")
let yourCollege = localStorage.getItem("yCollege")
let yourProgram = localStorage.getItem("yProgram")

    SP_fieldName_value= SP_fieldName.value 

  

       message = `Hi, I hope all is well. I’m currently pursuing ${yourProgram} at ${yourCollege}.I saw that you have immense experience working in the field of ${SP_fieldName_value} and I would love to talk about and learn from your experiences.  Thank you!`

   
       textArea.value =message;
  }

//text handling functions----------------------------------------------------------------------------------
  function txtClear(){
    
    textArea.value = "";
    }
//
function txtCopy(){
    let text = textArea.value;
    navigator.clipboard.writeText(text);
}

function txtTrim(){
  const trimmedText = (textArea.value).replace(/\s+/g, ' ')
  
  textArea.value =  trimmedText
   
}


let sameCollege
let normalConnection = document.getElementById("normalConnection")
let CF_companyNameSelect = document.getElementById("CF_companyNameSelect")
let CF_jobRoleSelect = document.getElementById("CF_jobRoleSelect")
let CF_sameCollegeSelect = document.getElementById("CF_sameCollegeSelect")


let Senior_person = document.getElementById("Senior_person")
let recruiter = document.getElementById("recruiter")
let courseSelect = document.getElementById("courseSelect")
let followUp = document.getElementById("followUp")


let SP_form= document.getElementById("SP_form")
let recruiter_form = document.getElementById("recruiter_form")
let college_form = document.getElementById("college_form")
let follow_form = document.getElementById("follow_form")
let connection_form = document.getElementById("connection_form")
let CF_companyName = document.getElementById("CF_companyName")
let CF_jobRole = document.getElementById("CF_jobRole")


let R_companyName = document.getElementById("R_companyName")
let R_jobRole = document.getElementById("R_jobRole")
 ;
 let C_collegeName = document.getElementById("C_collegeName")
 let C_progName = document.getElementById("C_progName")



var message = "";

  /*----------------------------------------------------------------------------------------------------*/ 
//hover functions 

$('label[for="normalConnection"]').hover(function(){
      $(this).attr('title','A normal connection request based on Company and Job role')
},function(){
  $(this).attr('title','');
})

$('label[for="Senior_person"]').hover(function(){
  $(this).attr('title','For reaching out to an experienced professional based on area of expertise')
},function(){
$(this).attr('title','');
})

$('label[for="recruiter"]').hover(function(){
  
    $(this).attr('title','For reaching out to a recruiter for internship')
},function(){
  $(this).attr('title','');
 })


$('label[for="courseSelect"]').hover(function(){
  
    $(this).attr('title','For reaching out to a person to enquire about a program at his college')
},function(){
  $(this).attr('title','');
 })



$('label[for="followUp"]').hover(function(){
  
  $(this).attr('title','For follow up questions after connecting with the person.')
},function(){
  $(this).attr('title','');
  })


  /*--------------------------------------------------------------------------------------------*/ 
//Selection forms 
//Normal Selection form
normalConnection.addEventListener("change", ()=>{
  if(normalConnection.checked){
    connection_form.style.display = "block";
    $('label[for="normalConnection"]').css({'color': 'white','background':'rebeccapurple'});

$('#containerOptions').find("input").prop('disabled',true)
$('#normalConnection').prop('disabled',false); 

$('label[for="normalConnection"]').hover(function(){},function(){})
   
  }else{
    connection_form.style.display = "none";
    $('#containerOptions').find("input").prop('disabled',false)
    $('label[for="normalConnection"]').css({'color': 'black','background':'white'});



  }
})


CF_companyNameSelect.addEventListener("change", ()=>{
  if(CF_companyNameSelect.checked){
    CF_companyName.style.display = "inline-block";
   
  }else{
    CF_companyName.style.display = "none"
  }
})


//Senior Person form
Senior_person.addEventListener("change", ()=>{
  if(Senior_person.checked){
    SP_form.style.display = "block";
$('label[for="Senior_person"]').css({'color': 'white','background':'rebeccapurple'});

$('#containerOptions').find("input").prop('disabled',true)
$('#Senior_person').prop('disabled',false); 


  }else{
    SP_form.style.display = "none";
    $('#containerOptions').find("input").prop('disabled',false)
    $('label[for="Senior_person"]').css({'color': 'black','background':'white'});
  }
})


//recruiter form
recruiter.addEventListener("change", ()=>{
  if(recruiter.checked){
    recruiter_form.style.display = "block";
$('label[for="recruiter"]').css({'color': 'white','background':'rebeccapurple'});

$('#containerOptions').find("input").prop('disabled',true)
$('#recruiter').prop('disabled',false); 


  }else{
    recruiter_form.style.display = "none";
    $('#containerOptions').find("input").prop('disabled',false)
    $('label[for="recruiter"]').css({'color': 'black','background':'white'});
  }
})


//Course Select form
courseSelect.addEventListener("change", ()=>{
  if(courseSelect.checked){
 
    college_form.style.display = "block";
$('label[for="courseSelect"]').css({'color': 'white','background':'rebeccapurple'});

$('#containerOptions').find("input").prop('disabled',true)
$('#courseSelect').prop('disabled',false);

$('label[for="courseSelect"]').hover(function(){},function(){})
  }else{
    college_form.style.display = "none";
    $('#containerOptions').find("input").prop('disabled',false)
    $('label[for="courseSelect"]').css({'color': 'black','background':'white'});
  }
})

//Follow up Form
followUp.addEventListener("change", ()=>{
  if(followUp.checked){
 
    follow_form.style.display = "block";
    $('label[for="followUp"]').css({'color': 'white','background':'rebeccapurple'});

$('#containerOptions').find("input").prop('disabled',true)
$('#followUp').prop('disabled',false);

$('label[for="followUp"]').hover(function(){},function(){})
  }else{
    follow_form.style.display = "none";
    $('#containerOptions').find("input").prop('disabled',false)
    $('label[for="followUp"]').css({'color': 'black','background':'white'});
  }
})





    let handleForm  = document.forms.userForm;
    let handleRecruiterForm  = document.forms.recruiter_form;
    let handleCollegeForm  = document.forms.college_form
    let handleSPForm  = document.forms.SP_form
    let handleConnectionForm  = document.forms.connection_form

const tuName = document.getElementById('tname');
const tcName = document.getElementById('tcname');
const tpName = document.getElementById('tpname');

const heading_name = document.getElementById('heading_name');
const heading_program = document.getElementById('heading_program');
const heading_college = document.getElementById('heading_college');
heading_name.innerHTML = localStorage.getItem("yName");
heading_college.innerHTML = localStorage.getItem("yCollege")
heading_program.innerHTML =localStorage.getItem("yProgram")

const uForm = document.getElementById('u_form');

let userName = handleForm.f_name;
let progName = handleForm.f_pname;
let collegeName = handleForm.f_cname;
let pOption = handleForm.f_pOption;
let scOption = handleForm.f_sCollege;
handleForm.onsubmit = processForm;
handleRecruiterForm.onsubmit = processRecruiterForm;
handleCollegeForm .onsubmit =processCollegeForm
handleSPForm.onsubmit =processSPForm
handleConnectionForm.onsubmit = processConnectionForm

//form handling functions -------------------------------------------------------------------------------

function processRecruiterForm(){
//alert('recruiter form');
f1();
return false;
} 

function processCollegeForm(){
//alert('college form');
f2();
return false;
} 

function processSPForm(){
//alert('college form');
f5();
return false;
}

function processConnectionForm(){
//alert('connection form');
f4();
if(CF_jobRole.value ===''){
  return false
}

return false;
}


function processForm(){
//alert('submitting form');

if(userName.value === '')	{
  userName.focus();
  return false;
}
if(collegeName.value === '')	{
  collegeName.focus();
  return false;
}
if(progName.value === '')	{
  progName.focus();
  return false;
}

localStorage.setItem("yName",userName.value)
localStorage.setItem("yCollege",collegeName.value);
localStorage.setItem("yProgram",progName.value);

heading_name.innerHTML = localStorage.getItem("yName");
heading_college.innerHTML = localStorage.getItem("yCollege")
heading_program.innerHTML =localStorage.getItem("yProgram")

 return false;   
}















