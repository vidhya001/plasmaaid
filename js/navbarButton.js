window.onload = function() {panIndia_fun()};

function panIndia_fun(){
    console.log("pan India loading...")
    
    document.getElementById('panIndia').style.fontWeight ='bold';
    document.getElementById('panIndia').style.opacity = 1;
    document.getElementById('panIndia').style.fontSize = "11px";

    document.getElementById('regional').style.fontWeight ='bold';
    document.getElementById('regional').style.opacity = 0.5;
    document.getElementById('regional').style.fontSize = "10px";

    document.getElementById('contribute').style.fontWeight ='bold';
    document.getElementById('contribute').style.opacity = 0.5;
    document.getElementById('contribute').style.fontSize = "10px";

    document.getElementById('mission').style.fontWeight ='bold';
    document.getElementById('mission').style.opacity = 0.5;
    document.getElementById('mission').style.fontSize = "10px";

    document.getElementById('contact').style.fontWeight ='bold';
    document.getElementById('contact').style.opacity = 0.5;
    document.getElementById('contact').style.fontSize = "10px";
    
    document.getElementById('homeDivId').style.display= "block";
    document.getElementById('contributeUsDivId').style.display= "none";
    document.getElementById('missionDivId').style.display= "none";
    document.getElementById('contactUsDivId').style.display= "none";

    closeSlideDownByNav();
}


function regional_fun(){ 
    console.log("regional loading...")
    
    document.getElementById('panIndia').style.fontWeight ='bold';
    document.getElementById('panIndia').style.opacity = 0.5;
    document.getElementById('panIndia').style.fontSize = "10px";

    document.getElementById('regional').style.fontWeight ='bold';
    document.getElementById('regional').style.opacity = 1;
    document.getElementById('regional').style.fontSize = "11px";


    document.getElementById('contribute').style.fontWeight ='bold';
    document.getElementById('contribute').style.opacity = 0.5;
    document.getElementById('contribute').style.fontSize = "10px";

    document.getElementById('mission').style.fontWeight ='bold';
    document.getElementById('mission').style.opacity = 0.5;
    document.getElementById('mission').style.fontSize = "10px";

    document.getElementById('contact').style.fontWeight ='bold';
    document.getElementById('contact').style.opacity = 0.5;
    document.getElementById('contact').style.fontSize = "10px";

    
    document.getElementById('homeDivId').style.display= "block";
    document.getElementById('contributeUsDivId').style.display= "none";
    document.getElementById('missionDivId').style.display= "none";
    document.getElementById('contactUsDivId').style.display= "none";
    closeSlideDownByNav();
}

function contribute_fun(){ 
    console.log("Contribute loading...")
    
    document.getElementById('panIndia').style.fontWeight ='bold';
    document.getElementById('panIndia').style.opacity = 0.5;
    document.getElementById('panIndia').style.fontSize = "10px";

    document.getElementById('regional').style.fontWeight ='bold';
    document.getElementById('regional').style.opacity = 0.5;
    document.getElementById('regional').style.fontSize = "10px";


    document.getElementById('contribute').style.fontWeight ='bold';
    document.getElementById('contribute').style.opacity = 1;
    document.getElementById('contribute').style.fontSize = "11px";

    document.getElementById('mission').style.fontWeight ='bold';
    document.getElementById('mission').style.opacity = 0.5;
    document.getElementById('mission').style.fontSize = "10px";

    document.getElementById('contact').style.fontWeight ='bold';
    document.getElementById('contact').style.opacity = 0.5;
    document.getElementById('contact').style.fontSize = "10px";

    
    document.getElementById('homeDivId').style.display= "none";
    document.getElementById('contributeUsDivId').style.display= "block";
    document.getElementById('missionDivId').style.display= "none";
    document.getElementById('contactUsDivId').style.display= "none";
    closeSlideDownByNav();
}

function mission_fun(){ 
    console.log("mission loading...")
    
    document.getElementById('panIndia').style.fontWeight ='bold';
    document.getElementById('panIndia').style.opacity = 0.5;
    document.getElementById('panIndia').style.fontSize = "10px";

    document.getElementById('regional').style.fontWeight ='bold';
    document.getElementById('regional').style.opacity = 0.5;
    document.getElementById('regional').style.fontSize = "10px";


    document.getElementById('contribute').style.fontWeight ='bold';
    document.getElementById('contribute').style.opacity = 0.5;
    document.getElementById('contribute').style.fontSize = "10px";

    document.getElementById('mission').style.fontWeight ='bold';
    document.getElementById('mission').style.opacity = 1;
    document.getElementById('mission').style.fontSize = "10px";

    document.getElementById('contact').style.fontWeight ='bold';
    document.getElementById('contact').style.opacity = 0.5;
    document.getElementById('contact').style.fontSize = "11px";

    
    document.getElementById('homeDivId').style.display= "none";
    document.getElementById('contributeUsDivId').style.display= "none";
    document.getElementById('missionDivId').style.display= "block";
    document.getElementById('contactUsDivId').style.display= "none";
    closeSlideDownByNav();
}

function contact_fun(){ 
    console.log("contact loading...")
    
    document.getElementById('panIndia').style.fontWeight ='bold';
    document.getElementById('panIndia').style.opacity = 0.5;
    document.getElementById('panIndia').style.fontSize = "10px";

    document.getElementById('regional').style.fontWeight ='bold';
    document.getElementById('regional').style.opacity = 0.5;
    document.getElementById('regional').style.fontSize = "10px";

    document.getElementById('contribute').style.fontWeight ='bold';
    document.getElementById('contribute').style.opacity = 0.5;
    document.getElementById('contribute').style.fontSize = "10px";

    document.getElementById('mission').style.fontWeight ='bold';
    document.getElementById('mission').style.opacity = 0.5;
    document.getElementById('mission').style.fontSize = "10px";

    document.getElementById('contact').style.fontWeight ='bold';
    document.getElementById('contact').style.opacity = 1;
    document.getElementById('contact').style.fontSize = "11px";
    
    document.getElementById('homeDivId').style.display= "none";
    document.getElementById('contributeUsDivId').style.display= "none";
    document.getElementById('missionDivId').style.display= "none";
    document.getElementById('contactUsDivId').style.display= "block";
    closeSlideDownByNav();
}

var d1=0;
var d2=0;
var d3=0;
var d4=0;
var d5=0;

function openSlideDown() {
    console.log("opening sidenav")
    document.getElementById("slideDownId").style.right = "0px";
    document.getElementById("iconShare").style.display="block";    
    setTimeout(function(){
        document.getElementById("iconShare").style.display="none";
        document.getElementById("iconCancel").style.display="block";    
    },100);

    d1=0;
    d2=0;
    d3=0;
    d4=0;
    d5=0;

    if(document.getElementById('panIndia').style.opacity==1){
        document.getElementById('panIndia').style.opacity=0.75;
        d1=1;
    }
    if(document.getElementById('regional').style.opacity==1){
        document.getElementById('regional').style.opacity=0.75;
        d2=1;
    }
    if(document.getElementById('contribute').style.opacity==1){
        document.getElementById('contribute').style.opacity=0.75;
        d3=1;
    }
    if(document.getElementById('mission').style.opacity==1){
        document.getElementById('mission').style.opacity=0.75;
        d4=1;
    }
    if(document.getElementById('contact').style.opacity==1){
        document.getElementById('contact').style.opacity=0.75;
        d5=1;
    }
    
}

function closeSlideDownByNav(){
    document.getElementById("slideDownId").style.right = "-2000px";
    document.getElementById("iconCancel").style.display="none";
    document.getElementById("iconShare").style.display="block";
}

function closeSlideDown(){
    document.getElementById("slideDownId").style.right = "-2000px";
    document.getElementById("iconCancel").style.display="none";
    document.getElementById("iconShare").style.display="block";

    if(d1==1){
        document.getElementById('panIndia').style.opacity=1
    }

    if(d2==1){
        document.getElementById('regional').style.opacity=1
    }

    if(d3==1){
        document.getElementById('contribute').style.opacity=1
    }

    if(d4==1){
        document.getElementById('mission').style.opacity=1
    }

    if(d5==1){
        document.getElementById('contact').style.opacity=1
    }
}
  


// Contribute form submisiion function

document.getElementById('contributeForm_contactForm').addEventListener('submit', submitContributeForm);
  
  // Submit form
function submitContributeForm(e){
console.log("submit of the contact form has been clicked")
e.preventDefault();

// Get values
var name = getInputVal('nameContributeForm');
var email = getInputVal('emailContributeForm');
var phone = getInputVal('phoneContributeForm');
var message = getInputVal('messageContributeForm');
var subject="Contribute Form Submission";

// Save message
// Show alert

document.querySelector('.contributeformButtonClass').innerHTML="processing your request <i class='material-icons' style='font-size:17px'>loop</i>"
saveMessage(name, email, phone, message,subject);

// Hide alert after 5 seconds

setTimeout(function(){
    console.log("contribution hola");
    document.querySelector('.contributeForm_alert').style.display = 'block';
    document.getElementById('contributeForm_contactForm').style.display='none';
    // document.querySelector('.contactForm_alert').innerHTML="Your message has been sent";
},3000);

// Clear form

}

// Contact form submission function ------------------------
document.getElementById('contactForm_contactForm').addEventListener('submit', submitForm);
  
  // Submit form
function submitForm(e){
console.log("submit of the contact form has been clicked")
e.preventDefault();

// Get values
var name = getInputVal('nameContactForm');
var email = getInputVal('emailContactForm');
var phone = getInputVal('phoneContactForm');
var message = getInputVal('messageContactForm');
var subject="Contact Form Submission"
// Save message
// Show alert
document.querySelector('.contactformButtonClass').innerHTML="processing your request <i class='material-icons' style='font-size:17px'>loop</i>"
saveMessage(name, email, phone, message,subject);

// Hide alert after 5 seconds

setTimeout(function(){
    console.log("holaa");
    document.querySelector('.contactForm_alert').style.display = 'block';
    document.getElementById('contactForm_contactForm').style.display='none';
    // document.querySelector('.contactForm_alert').innerHTML="Your message has been sent";
},3000);

}

// Function to get get form values by id -------------------------------------
function getInputVal(id){
return document.getElementById(id).value;
}


// sending mail function -------------------------------------------------------
// Save message to and sending to mail
function saveMessage(name, email, phone, message,subject){
var contactform_msg="<p>Name :"+name +"</p><br><p>Phone: "+ phone +"</p><br><p>Email :" + email +"</p><br><p>Messae :"+ message+"</p>";
console.log(contactform_msg);
var msg=contactform_msg;
sendMailFunction(msg,subject);
}

const sm="notifications.plasmaaid@gmail.com";
const rm="notifications.plasmaaid@gmail.com";
const pw="plasmaaidsr@12";

function sendMailFunction(msg,subject) {
console.log("mailing"); 
Email.send({ 
    Host: "smtp.gmail.com", 
    Username: sm, 
    Password: pw, 
    To: rm, 
    From: sm, 
    Subject: subject, 
    Body: msg, 
}) 
    .then(function (message) { 
        console.log("mail sent successfully"); 
    }); 
} 

function CopyClassText(){
    //select the element with ID = "CopyMeID", can be a div, p, or a span, possibly others
    var textToCopy = document.getElementById("CopyMeID");

    //you can target the same element using querySelector() as well
    //example below:
    //var textToCopy = document.querySelector('.CopyMeClass');

    //check and see if the user had a text selection range
    var currentRange;
    if(document.getSelection().rangeCount > 0)
    {
         //the user has a text selection range, store it
         currentRange = document.getSelection().getRangeAt(0);
         //remove the current selection
         window.getSelection().removeRange(currentRange);
    }
    else
    {
         //they didn't have anything selected
         currentRange = false;
    }

    //create a selection range
    var CopyRange = document.createRange();
    //choose the element we want to select the text of
    CopyRange.selectNode(textToCopy);
    //select the text inside the range
    window.getSelection().addRange(CopyRange);
    //copy the text to the clipboard
    document.execCommand("copy");

    //remove our selection range
    window.getSelection().removeRange(CopyRange);

    //return the old selection range
    if(currentRange)
    {
         window.getSelection().addRange(currentRange);
    }

    document.getElementById("clipboardCopyId").innerHTML="Copied succesfully";

    setTimeout(function(){
        document.getElementById("clipboardCopyId").innerHTML="Copy to clipboard";
        // document.querySelector('.contactForm_alert').innerHTML="Your message has been sent";
    },2000);
}