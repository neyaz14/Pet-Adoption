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









// modal for adopt button
// for count down
function countdown() {
    let num = 3; 
    const clockid = setInterval(() => {
        document.getElementById('countdown-display').innerText = num;
        if (num <= 0) { 
            clearInterval(clockid); 
            document.getElementById('adopt-btn-close').click(); 
        }
        else {
            num--; 
        }
    }, 1000); 
    return num; 
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
        <p id="countdown-display" class="text-4xl font-bold">${countdown()}</p>
        
    </div>
    `


    adoptContent.append(div);
    // document.getElementById('adoptModal').showModal();
    document.getElementById('showAdoptModal').click();
}
// <img src="${images/handshake.png}">