const itemCards = document.getElementById('item-cards');
const addProductBtn = document.getElementById('add-product-card-btn');

const fetchUserItem = async () => {
    const response = await fetch("https://65bb531552189914b5bbbe2d.mockapi.io/commerceSite");
    const items = await response.json();

    items.sort((a, b) => a.price - b.price);

    items.forEach((item) => {
        const itemCard = document.createElement("a");
        itemCard.setAttribute("class", "item-card");
        itemCard.href = './item page/itemPage.html'
        itemCard.addEventListener("click", () => {
        localStorage.setItem('listingId', item.id)
        })

        const addItemPicture = document.createElement('img');
        const addItemName = document.createElement('h3');
        const addItemPrice = document.createElement('p');

        addItemPicture.src = item.imageUrl;
        addItemName.innerText = item.itemName;
        addItemPrice.innerText = 'Kaina: ' + item.price + ' Eur.';

        itemCard.append(addItemPicture);
        itemCard.append(addItemName);
        itemCard.append(addItemPrice);

        itemCards.append(itemCard);
    })
    
}

fetchUserItem()