function buildHomePage()
{
const content=document.getElementById('content');
const title=document.createElement('h1');
title.setAttribute('id','title');
title.textContent='WELCOME TO RESTAURANT';
content.appendChild(title);
const quote=document.createElement('p');
quote.setAttribute('id','quote');
quote.textContent='Random quote for a random restaurant';
content.appendChild(quote);
const tabs=document.createElement('div');
tabs.setAttribute('id','tabs');
const home=document.createElement('button');
home.setAttribute('id','home');
home.textContent='HOME';
const menu=document.createElement('button');
menu.setAttribute('id','menu');
menu.textContent='MENU';
const contact=document.createElement('button');
contact.setAttribute('id','contact');
contact.textContent='CONTACT';
tabs.appendChild(home);
tabs.appendChild(menu);
tabs.appendChild(contact);
content.appendChild(tabs);
}
export{buildHomePage};