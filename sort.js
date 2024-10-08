
// loadAllPets();
const sortbtn = ()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res=> res.json())
    .then(data => Showsortbtn(data.pets))
    .catch(error => console.log(error));
}

const Showsortbtn =(sortid)=>{
    // const arr= [...sortid];
    const n = 17;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
        
            // If the current element is greater
            // than the next element
            if (sortid[j].price < sortid[j + 1].price) {
            
                // Swap the elements
                let temp = sortid[j];
                sortid[j] = sortid[j + 1];
                sortid[j + 1] = temp;
                swapped = true; 
            }
        }

        // If no two elements were swapped by inner loop,
        // then break the loop
        if (!swapped)
            break;
    }
    console.log(sortid);
    showAllPets(sortid)

}













