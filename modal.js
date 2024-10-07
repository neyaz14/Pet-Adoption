const loadDetails =  (petid) =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petid}`)
    .then(res=> res.json())
    .then(data => showDetails(data.petData))
    .catch(error => console.log(error));
}

const removeDetails = ()=>{
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML="";

}

const showDetails = (detail) =>{
    console.log(detail.vaccinated_status);
    removeDetails();
    const modalContent = document.getElementById('modal-content');
    const div = document.createElement('div');
    // div.innerHTML="";
    // modalContent.append(div);
    div.className = " px-0";
    div.innerHTML =`
    <div class="w-[460px]"> <img class="h-full w-full object-cover rounded-[10px]" src=${detail.image}> </div>
    <h1 class="font-bold text-xl">${detail.pet_name} </h1>
    <div class="flex gap-6 mb-1"> 
        <ul>
            <li>Breed:  ${detail.breed} </li>
            <li>Birth:  ${detail.date_of_birth} </li>
            <li>Gender: ${detail.gender} </li>
            <li>Vaccinated Status: ${detail.vaccinated_status} </li>
            
        </ul>
        <ul>
            <li>Price: ${detail.price} </li>
            <li>Birth: ${detail.date_of_birth} </li>
        </ul>
    </div>
    <hr>

    <div> 

        <p class="font-semibold "> Details Information </p>
        <p class="text-left"> ${detail.pet_details} </p>
    </div>
    

    
    `
    modalContent.append(div);

    document.getElementById('my_modal_5').showModal();
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