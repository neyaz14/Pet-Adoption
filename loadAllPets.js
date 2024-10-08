const loadAllPets = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res=> res.json())
    .then(data => showAllPets(data.pets))
    .catch(error => console.log(error));
}
loadAllPets();




// to make details 






const showAllPets = (petsCards) =>{
// add spinner function here 

    document.getElementById("spinner").style.display="none";
    document.getElementById('animal-show').style.display="grid";
    document.getElementById('wishlist-content').style.display="grid";
// spinner function deleted
    const animalContainer = document.getElementById('animal-show');
    // sothat when the button will be hitten sothat the whole section disappeared and then new data loaded
    animalContainer.innerHTML = "";
    if(petsCards.length==0){
        animalContainer.classList.remove('grid');
        const card = document.createElement('div');
        card.className ="bg-gray-200 px-20 py-10 flex flex-wrap flex-col justify-center items-center gap-4";
        card.innerHTML =` 
            <img src="images/error.webp">
            <p class='font-bold text-xl'> No Information Available</p>
            <p class="font-medium text-center"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that it has a. </p>
        `
        animalContainer.append(card);
    }else{
        animalContainer.classList.add('grid');
    }
// ---------------------------------------------- 
    petsCards.forEach(petCard => {
        // console.log(petCard.image);
        const card = document.createElement('div');
        card.className = " border w-[290px] h-[450px] flex flex-col gap-6 p-2";
        card.innerHTML = `
        <div class=" h-full w-full object-cover ">
            <img src="${petCard.image}">
        </div>
        <div class="">
            <h1 class="font-bold text-xl">${petCard.pet_name}</h1>
            <ul>
                <li>Breed: ${petCard.breed} </li>
                <li>Birth: ${petCard.date_of_birth} </li>
                <li>Gender: ${petCard.gender} </li>
                <li>Price: ${petCard.price} </li>
            </ul>
        </div>
        <hr>
        <div class="flex items-center justify-center gap-5">
                
            <button id="wishlist-${petCard.petId}"   onclick="loadWishlist(${petCard.petId})"  class="btn btn-outline btn-sm  font-semibold">
            <img src="https://img.icons8.com/?size=24&id=82788&format=png" alt="">
            </button>

            <button onclick="loadAdopt(${petCard.petId})" id="adopt-${petCard.petId}" class="btn btn-outline btn-sm   font-semibold">Adopt</button>

            <button id="details-${petCard.petId}" onclick="loadDetails(${petCard.petId})" class="btn btn-outline btn-sm  font-semibold">Details</button>

        </div>
        `
        animalContainer.append(card);
    });
}









/**
 {
      "petId": 2,
      "breed": "Siamese",
      "category": "Cat",
      "date_of_birth": "2022-09-05",
      "price": 800,
      "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
      "gender": "Female",
      "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
      "vaccinated_status": "Fully",
      "pet_name": "Mia"
    }
*/