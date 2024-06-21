
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

function displayMenuItems(menu) {

    const menuContainer = document.getElementById('menu');
    
    for (const [category, items] of Object.entries(menu)) {

        const categoryHeader = document.createElement('h3');
        categoryHeader.textContent = category;

        menuContainer.appendChild(categoryHeader);

        const itemList = document.createElement('ul');
    
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listItem.addEventListener('click', () => addToOrder(item));
            itemList.appendChild(listItem);
        });
        
        menuContainer.appendChild(itemList);
        
    }
    
}

function addToOrder(itemName) {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    const orderListItem = document.createElement('li');
    orderListItem.textContent = itemName;

    orderItems.appendChild(orderListItem);

    const currentTotal = parseFloat(orderTotal.textContent);
    const newTotal = currentTotal + 10;

    orderTotal.textContent = newTotal.toFixed(2);
}


function initMenuSystem(menu) {
    displayMenuItems(menu);
}

initMenuSystem(menu);