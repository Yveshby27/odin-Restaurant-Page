const content=document.getElementById('content');
const contactSection=document.createElement('div');

function buildContactSection(){
    contactSection.setAttribute('id','contact-section');

    const contactHeading=document.createElement('h1');
    contactHeading.setAttribute('class','contact-heading');
    contactHeading.textContent='Contact Us';

    const contactDetail1=document.createElement('p');
    contactDetail1.setAttribute('class','contact-detail');
    contactDetail1.textContent='Email Address:Restaurant@gmail.com';

    const contactDetail2=document.createElement('p');
    contactDetail2.setAttribute('class','contact-detail');
    contactDetail2.textContent='Phone Number:012431342';

    const contactMessage=document.createElement('p');
    contactMessage.setAttribute('class','contact-message');
    contactMessage.textContent='Book a seat!!!We\'re waiting for you!'

    contactSection.appendChild(contactHeading);
    contactSection.appendChild(contactDetail1);
    contactSection.appendChild(contactDetail2);
    contactSection.appendChild(contactMessage);

    content.appendChild(contactSection);
}
export{buildContactSection,contactSection};