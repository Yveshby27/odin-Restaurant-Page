import {buildHomePage} from './homepage.js';
import {buildHomeSection,homeSection} from './home.js';
import {buildMenuSection,menuSection} from './menu.js';
import {buildContactSection,contactSection} from './contact.js';
buildHomePage();
const homeButton=document.getElementById('home');
const menuButton=document.getElementById('menu');
const contactButton=document.getElementById('contact');


homeButton.addEventListener('click',()=>{
 buildHomeSection();
 homeButton.disabled=true;
 menuButton.disabled=false;
 contactButton.disabled=false;
 homeSection.style.display='block';
 menuSection.style.display='none';
 contactSection.style.display='none';
 menuSection.textContent='';
 contactSection.textContent='';
});
menuButton.addEventListener('click',()=>{
        buildMenuSection();
        menuButton.disabled=true;
        homeButton.disabled=false;
        contactButton.disabled=false;
        menuSection.style.display='flex';
        homeSection.style.display='none';
        contactSection.style.display='none';
        homeSection.textContent='';
        contactSection.textContent='';
    })
contactButton.addEventListener('click',()=>{
    buildContactSection();
    contactButton.disabled=true;
    homeButton.disabled=false;
    menuButton.disabled=false;
    contactSection.style.display='block';
    homeSection.style.display='none';
    menuSection.style.display='none';
    homeSection.textContent='';
    menuSection.textContent='';
})
    
