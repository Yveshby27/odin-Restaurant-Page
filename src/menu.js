
    const content=document.getElementById('content');
    const menuSection=document.createElement('div');
function buildMenuSection()
{
    menuSection.setAttribute('id','menu-section');

    const menuPart1=document.createElement('div');
    menuPart1.setAttribute('class','menu-part');
    const menuHeading1=document.createElement('h2');
    menuHeading1.setAttribute('class','menu-heading');
    menuHeading1.textContent='Sandwiches and Burgers'
    const menuItems1=document.createElement('ul');
    menuItems1.setAttribute('class','menu-items');
    const p1Item1=document.createElement('li');
    p1Item1.textContent='Chicken Honey Mustard Sandwich';
    const p1Item2=document.createElement('li');
    p1Item2.textContent='Boneless Chicken Wrap';
    const p1Item3=document.createElement('li');
    p1Item3.textContent='Swiss Mushroom Burger';
    const p1Item4=document.createElement('li');
    p1Item4.textContent='Cheese Burger';
    menuPart1.appendChild(menuHeading1);
    menuPart1.appendChild(p1Item1);
    menuPart1.appendChild(p1Item2);
    menuPart1.appendChild(p1Item3);
    menuPart1.appendChild(p1Item4);

    const menuPart2=document.createElement('div');
    menuPart2.setAttribute('class','menu-part');
    const menuHeading2=document.createElement('h2');
    menuHeading2.setAttribute('class','menu-heading');
    menuHeading2.textContent='Pizza and Pasta';
    const menuItems2=document.createElement('ul');
    menuItems2.setAttribute('class','menu-items');
    const p2Item1=document.createElement('li');
    p2Item1.textContent='Pepperoni Pizza';
    const p2Item2=document.createElement('li');
    p2Item2.textContent='Four Cheese Pizza';
    const p2Item3=document.createElement('li');
    p2Item3.textContent='Pasta Carbonara';
    const p2Item4=document.createElement('li');
    p2Item4.textContent='Spaghetti Bolognaise';
    menuPart2.appendChild(menuHeading2);
    menuPart2.appendChild(p2Item1);
    menuPart2.appendChild(p2Item2);
    menuPart2.appendChild(p2Item3);
    menuPart2.appendChild(p2Item4);
    
    const menuPart3=document.createElement('div');
    menuPart3.setAttribute('class','menu-part');
    const menuHeading3=document.createElement('h2');
    menuHeading3.setAttribute('class','menu-heading');
    menuHeading3.textContent='Desserts';
    const menuItems3=document.createElement('ul');
    menuItems3.setAttribute('class','menu-items');
    const p3Item1=document.createElement('li');
    p3Item1.textContent='Red Velvet Cake';
    const p3Item2=document.createElement('li');
    p3Item2.textContent='Cheesecake';
    const p3Item3=document.createElement('li');
    p3Item3.textContent='Brownies';
    const p3Item4=document.createElement('li');
    p3Item4.textContent='Creme Brulee';
    menuPart3.appendChild(menuHeading3);
    menuPart3.appendChild(p3Item1);
    menuPart3.appendChild(p3Item2);
    menuPart3.appendChild(p3Item3);
    menuPart3.appendChild(p3Item4);

    const menuPart4=document.createElement('div');
    menuPart4.setAttribute('class','menu-part');
    const menuHeading4=document.createElement('h2');
    menuHeading4.setAttribute('class','menu-heading');
    menuHeading4.textContent='Beverages';
    const menuItems4=document.createElement('ul');
    menuItems4.setAttribute('class','menu-items');
    const p4Item1=document.createElement('li');
    p4Item1.textContent='Water';
    const p4Item2=document.createElement('li');
    p4Item2.textContent='Beer';
    const p4Item3=document.createElement('li');
    p4Item3.textContent='Soft Drinks(Coke,Sprite)';
    const p4Item4=document.createElement('li');
    p4Item4.textContent='Juice';
    menuPart4.appendChild(menuHeading4);
    menuPart4.appendChild(p4Item1);
    menuPart4.appendChild(p4Item2);
    menuPart4.appendChild(p4Item3);
    menuPart4.appendChild(p4Item4);

    menuSection.appendChild(menuPart1);
    menuSection.appendChild(menuPart2);
    menuSection.appendChild(menuPart3);
    menuSection.appendChild(menuPart4);

    content.appendChild(menuSection);
}
export{buildMenuSection,menuSection};