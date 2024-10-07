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
    // console.log(detail.vaccinated_status);
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






// modal for adopt button

// for count down
function countdown(num = 3) {
    const clockid = setInterval(() => {
        // if(num)
        console.log(num);
        num = num - 1;
        if (num < 0) {
            clearInterval(clockid);
            document.getElementById('adopt-btn-close').click();
            // document.getElementById(`adopt-${petCard.petId}`).classList.add('');
            
        }
        // return num;
    }, 1000);
}



    



const removeAdopt = ()=>{
    const modalContent = document.getElementById('adopt-modal-content');
    modalContent.innerHTML="";
}

const loadAdopt =(adoptId)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${adoptId}`)
    .then(res=> res.json())
    .then(data => showAdoptModal(data.petData))
    .catch(error => console.log(error));
}

const showAdoptModal = (adopt)=>{
    // console.log(adopt);
    removeAdopt();
    const adoptContent = document.getElementById('adopt-modal-content');
    const div = document.createElement('div');
    div.innerHTML= `
    <div class="text-center">
        
        <h1 class="font-bold text-3xl"> Congrates </h1>
        <p class="text-xl">Adoption Process is Start For Your Pet</p>
        <p class="text-4xl font-bold">${countdown()}</p>
        
    </div>
    `


    adoptContent.append(div);
    // document.getElementById('adoptModal').showModal();
    document.getElementById('showAdoptModal').click();
}
// <img src="${images/handshake.png}">