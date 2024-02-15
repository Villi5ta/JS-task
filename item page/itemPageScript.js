const listingId = localStorage.getItem("listingId")

const fetchedItemName = document.getElementById('item-name')
const fetchedItemImage = document.getElementById('item-image')
const fetchedItemPrice = document.getElementById('item-price')
const fetchedItemDescription = document.getElementById('item-description')
const fetchedItemLocation = document.getElementById('item-location')

const itemDeleteButton = document.getElementById('item-delete-button')
const itemDeleteMessage = document.getElementById('message')

const fetchListing = async () => {
    const response = await fetch(
        `https://65bb531552189914b5bbbe2d.mockapi.io/commerceSite/${listingId}`
        ) 
        const listing = await response.json()

        fetchedItemName.innerText = listing.itemName
        fetchedItemImage.src = listing.imageUrl
        fetchedItemPrice.innerText = 'Kaina: ' + listing.price + 'eur.'
        fetchedItemDescription.innerText = listing.description
        fetchedItemLocation.innerText = 'Pardavimo adresas: ' + listing.saleLoc
}

fetchListing()

itemDeleteButton.addEventListener("click", async () => {
    const response = await fetch (
      `https://65bb531552189914b5bbbe2d.mockapi.io/commerceSite/${listingId}`,
      {
        method: "DELETE",
      }
    )
    const item = await response.json()
  
      if(item) { 
        itemDeleteMessage.innerText = 'Skelbimas skėmigai pašalinas'

        setTimeout(() => {
            window.location.assign("../index.html");
          }, 2000);
      }
  
  })