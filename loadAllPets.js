const loadAllPets = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res=> res.json())
    .then(data => LoadPetsInfoForBtn(data.categories))
    .catch(error => console.log(error));
    
}