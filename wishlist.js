const loadWishlist =  (wishlistid) =>{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${wishlistid}`)
    .then(res=> res.json())
    .then(data => showWishlist(data.petData))
    .catch(error => console.log(error));
}

const showWishlist= (wish)=>{
    console.log(wish);
    const wishdiv = document.getElementById('wishlist-content');
    const div = document.createElement('div');
    div.className = "rounded-sm m-2";
    div.innerHTML= `
    <img class="rounded-xl" src="${wish.image}">
    `
    wishdiv.append(div);
}