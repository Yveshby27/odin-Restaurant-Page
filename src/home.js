const content=document.getElementById('content');
const homeSection=document.createElement('div');

function buildHomeSection()
{

homeSection.setAttribute('id','home-section');

const firstTitle=document.createElement('h3');
firstTitle.setAttribute('class','para-title');
firstTitle.textContent='Our History';
homeSection.appendChild(firstTitle);

const firstPara=document.createElement('p');
firstPara.setAttribute('class','paragraph');
firstPara.textContent='This Restaurant began on 2nd April 2012 in a random place.Focusing on the goals "Quality,Healthy and diverse".We take pride in the faces of our satisfied customers leaving the restaurant after having taken respite from their busy lives to truly enjoy a delicious meal.'
homeSection.appendChild(firstPara);

const secondTitle=document.createElement('h3');
secondTitle.setAttribute('class','para-title');
secondTitle.textContent='Our Menu';
homeSection.appendChild(secondTitle);

const secondPara=document.createElement('p');
secondPara.setAttribute('class','paragraph');
secondPara.textContent=' Our menu has a simple style,but our few dishes are made with absolute care.'
homeSection.appendChild(secondPara);

const thirdTitle=document.createElement('h3');
thirdTitle.setAttribute('class','para-title');
thirdTitle.textContent='Locations and Opening Hours';
homeSection.appendChild(thirdTitle);

const thirdPara=document.createElement('ul');
thirdPara.setAttribute('class','paragraph');

const l1=document.createElement('li');
l1.textContent='Place1:Everyday 6:30 am to 4:00 pm'
thirdPara.appendChild(l1);

const l2=document.createElement('li');
l2.textContent='Place2:Everyday 6:30 am to 1:00 pm'
thirdPara.appendChild(l2);

const l3=document.createElement('li');
l3.textContent='Place3:Everyday 6:30 am to 3:00 pm'
thirdPara.appendChild(l3);

const l4=document.createElement('li');
l4.textContent='Place4:Everyday 6:30 am to 4:00 pm';
thirdPara.appendChild(l4)

homeSection.appendChild(thirdPara);

content.appendChild(homeSection);

}
export{buildHomeSection,homeSection};