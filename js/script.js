
//https://condescending-hoover-8028e1.netlify.app/

// var nova = 'https://ayoelutilo.github.io/nova-practice-website/';
// var dsbrnd = 'https://dsbrnd.com';
// var fbclone = 'https://fb-clone-78960.web.app/';

const techStack = document.querySelector('#tech-stack');
const frame = document.querySelector('iframe') ;

// Buttons
const dsbrndButton = document.querySelector('#dsbrnd');
const novaButton = document.querySelector('#nova');
const fbcloneButton = document.querySelector('#fb-clone');
const uecloneButton = document.querySelector('#ue-clone'); // ue stands for Uber Eats


const dsbrndStack = ["HTML", "CSS", "PHP", "Javascript", "WooCommerce"];
const novaStack = ["HTML", "CSS", "Javascript", "TailwindCSS"];
const fbcloneStack = ["React", "Material UI", "Firebase Firestore Realtime DB", "Firebase Hosting", "Firebase Google Authentication"];
const uecloneStack = ["React", "Bootstrap", "JSON", "Netlify"];


// Object declarations
function Project(name, link, button, desc,stack) {
    this.name = name;
    this.link = link;
    this.button = button;
    this.desc = desc;
    this.stack = stack;
}

var dsbrndObj = new Project(
    "DSBRND", 
    'https://dsbrnd.com',
    dsbrndButton,
     "", 
    dsbrndStack);
var novaObj = new Project(
    "NOVA", 
    'https://ayoelutilo.github.io/nova-practice-website/',
    novaButton, 
    "", 
    novaStack);
var fbcloneObj = new Project(
    "Facebook Clone", 
    'https://fb-clone-78960.web.app/',
    fbcloneButton, 
    "", 
    fbcloneStack);
var uecloneObj = new Project(
    "UberEats Clone", 
    "https://condescending-hoover-8028e1.netlify.app/",
    uecloneButton, 
    "", 
    uecloneStack);

dsbrndObj.desc = "The Don't Stop Brand is an e-commerce store started in 2019.  First version of the store was created on Shopify's platform but shortly after, the whole store was moved to custom servers setup by I."

novaObj.desc = "Nova is a modern website I created to explore and practice modern design and programming standards."

fbcloneObj.desc = "This is a clone of the homepage of Facebook's new redesign.  I built this from scratch as practice for REACT.js language framework and to master Google's Firestore Real-Time Database and Google Authentication.  You can proceed to sign in, as i can assure you, the Authentication is fully secure. After signing in you can checkout the Realtime Post feature which is the highlight of this build."

uecloneObj.desc = "This is a clone of UberEats UI replicated with REACT.js."


//Tech Stacks
function createList(e) {
    var listView =document.createElement('ol');
    listView.className = "" 
 

    for (var i=0; i<e.length; i++)
    {
        var listViewItem= document.createElement('li');
      
        listViewItem.appendChild(document.createTextNode(e[i]));
        listView.appendChild(listViewItem);
    }
    return listView;
}
techStack.appendChild(createList(dsbrndStack));


if ($(window).width() < 576) { // JS code to call function that would display the rotate screen ion if screen size is smaller
    frame.srcdoc = "<h3 style='color: white; text-align: center;padding: 10px;'>please rotate to landscape mode. </h3><img src='../img/rotate.png' width='120' style='display: flex;justify-content:center;text-align: center;margin: auto;margin-top: 15%;'>"
   
 }
 window.onorientationchange = function() { 
    var orientation = window.orientation; 
        switch(orientation) { 
            case 0:
            case 90: window.location.reload(); 
            case -90: window.location.reload(); 
            break; } 
}; 
const descCont = document.querySelector("#desc");
if ($(window).width() > 576) { 
dsbrndButton.addEventListener("click", (function(){    // Event listener
    frame.src =  dsbrndObj.link;
    techStack.replaceChild(createList(dsbrndStack), techStack.childNodes[2]); 
    descCont.innerText = dsbrndObj.desc;
    descCont.className = "animated puffIn " 
    descCont.setAttribute("data-appear-anim-style" , "puffIn")
    document.querySelector("#dsbrnd").setAttribute('class', 'active');
    document.querySelector('#nova').setAttribute('class', 'inactive');
    document.querySelector("#fb-clone").setAttribute('class', 'inactive');
}));
novaButton.addEventListener("click", (function(){
    frame.src = novaObj.link;
    techStack.replaceChild(createList(novaStack), techStack.childNodes[2]);
    descCont.innerText  = novaObj.desc;
    descCont.className = "animated puffIn " 
    descCont.setAttribute("data-appear-anim-style" , "puffIn")
    document.querySelector("#nova").setAttribute('class', 'active');
    document.querySelector('#dsbrnd').setAttribute('class', 'inactive');
    document.querySelector("#fb-clone").setAttribute('class', 'inactive');
}));
fbcloneButton.addEventListener("click", (function(){
    frame.src = fbcloneObj.link;
    techStack.replaceChild(createList(fbcloneStack), techStack.childNodes[2]);
    descCont.innerText  = fbcloneObj.desc;
    descCont.className = "animated puffIn " 
    descCont.setAttribute("data-appear-anim-style" , "puffIn")
    document.querySelector("#fb-clone").setAttribute('class', 'active');
    document.querySelector('#dsbrnd').setAttribute('class', 'inactive');
    document.querySelector('#nova').setAttribute('class', 'inactive');
}));
uecloneButton.addEventListener("click", (function(){
    frame.src = uecloneObj.link;
    techStack.replaceChild(createList(uecloneStack), techStack.childNodes[2]);
    descCont.innerText  = uecloneObj.desc;
    descCont.className = "animated puffIn " 
    descCont.setAttribute("data-appear-anim-style" , "puffIn")
    document.querySelector("#fb-clone").setAttribute('class', 'active');
    document.querySelector('#dsbrnd').setAttribute('class', 'inactive');
    document.querySelector('#nova').setAttribute('class', 'inactive');
}));
}

// Active state handler

// Get the container element
var btnContainer = document.querySelector(".nav-item");

// Get all buttons with class="nav-link" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");
