const loadAllPets = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res=> res.json())
    .then(data => showAllPets(data.pets))
    .catch(error => console.log(error));
}
loadAllPets();

const showAllPets = (petsCards) =>{
    const animalContainer = document.getElementById('animal-show');
    petsCards.forEach(petCard => {
        // console.log(petCard.image);
        const card = document.createElement('div');
        card.className = " border w-[290px] h-[430px] flex flex-col gap-6 p-2";
        card.innerHTML = `
        <div class="border h-full w-full object-cover ">
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
                
            <button class="btn btn-outline btn-sm  font-semibold"><img src="https://img.icons8.com/?size=24&id=82788&format=png" alt=""></button>
            <button class="btn btn-outline btn-sm   font-semibold">Adopt</button>
            <button class="btn btn-outline btn-sm  font-semibold">Details</button>

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