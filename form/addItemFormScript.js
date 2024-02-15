const addItemButton = document.getElementById('add-item-button')

const newItemName = document.getElementById('item-name')
const newItemPrice = document.getElementById('item-price')
const newItemImage = document.getElementById('item-image')
const newItemDescription = document.getElementById('item-description')
const newItemLocation = document.getElementById('item-location')

const listingUploadMessage = document.getElementById('listing-upload-message')

addItemButton.addEventListener('click', async () => {
    if(!newItemName.value || !newItemPrice.value || !newItemImage.value || !newItemDescription.value || !newItemLocation){
        alert("Prašom užpildyti visus įvesties laukelius")
        return;
      }

    const uploadItemListing = {
        itemName: newItemName.value,
        price: newItemPrice.value,
        imageUrl: newItemImage.value,
        description: newItemDescription.value,
        saleLoc: newItemLocation.value
    } 

    const response = await fetch("https://65bb531552189914b5bbbe2d.mockapi.io/commerceSite", 
    {
     method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadItemListing)
    })

    if(uploadItemListing) {
      listingUploadMessage.innerText = 'Jūsų skelbimas skėmingai įkletas'
    }

    console.log(uploadItemListing);

})