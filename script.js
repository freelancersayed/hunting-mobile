const loadPhon = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)

}


const displayPhones = phones =>{
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';

    // display show all button if there are more than 6 phon
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 6){
      showAllContainer.classList.remove('hidden')
    }else{
      showAllContainer.classList.add('hidden')
    }
    phones = phones.slice(0,6)


    phones.forEach(phone =>{
        console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard)
    })
    toggleLoadingSpinner(false);
}



//handle search button
const handleSearch = ()=>{
    toggleLoadingSpinner(true);
    const searchFiled = document.getElementById('search-field');
    const searchText =  searchFiled.value;
    console.log(searchText);
    loadPhon(searchText);
    
}


const toggleLoadingSpinner = (isLoading) =>{
  const loaddingSpinner = document.getElementById('loader')
  if(isLoading){
    loaddingSpinner.classList.remove('hidden')
  }else{
    loaddingSpinner.classList.add('hidden')
  }
}

// loadPhon()