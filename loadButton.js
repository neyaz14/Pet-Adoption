const LoadButtonCategories = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res=> res.json())
    .then(data => LoadPetsInfoForBtn(data.categories))
    .catch(error => console.log(error));
    
}

LoadButtonCategories();


// to show pets by category
const loadbycategory=(id)=>{

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(res=> res.json())
    .then(data => showAllPets(data.data))
    .catch(error => console.log(error));
}



const LoadPetsInfoForBtn = (pets) =>{
    const btnContainer = document.getElementById('btn-container');
    // console.log(pets);
    pets.forEach(pet => {
        const div = document.createElement('div');
        // button onclick function --  
        div.innerHTML= `
        <button id="btn-${pet.category}" onclick="loadbycategory('${pet.category}')" class="active-btn-class btn btn-outline hover:rounded-full  text-black font-bold category-btn h-[69px] w-[139px]">
        <img src=${pet.category_icon}> ${pet.category}
        </button>
        `
       
        btnContainer.append(div);
    });
}
// LoadPetsInfo();