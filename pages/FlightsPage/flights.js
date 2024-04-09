document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtn = document.querySelectorAll('.dropbtn');
    var dropdownContent = document.querySelectorAll('.dropdown-content');
  
    dropdownBtn.forEach( x=>x.addEventListener('click', function(event) {
     
       event.currentTarget.nextElementSibling.classList.toggle('show');
      
    }));
  
    dropdownContent.forEach(x=>x.addEventListener('click', function(event) {
        var button =  event.target.parentElement.previousElementSibling
        var content =event.target.parentElement;
      var selectedOption = event.target.textContent;
      if(!content.classList.contains('filters')){
      button.textContent = selectedOption;
      content.classList.remove('show');
      }
    }));
  });

  const renderCards = (cards) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear previous content
    let cardElement="";
    const cardElements = cards.map((card) => {
        cardElement =`
      <div class="card">
      <div >
          <img src="${card.logoUrl}" alt="Logo" class="logo">
          <h2 class="name">${card.Name}</h2>
      </div>
      <div class="middle">
      <div class="hour">
      <p class="text">Take off</p>
      <p class="hours">${card.TakeOff}</p>
    </div>
    <div class="bar"></div>
    <div class="hour">
      <p class="text">Landing</p>
      <p class="hours">${card.Landing}</p>
    </div>
    <p class="totalhours"></p>
      </div>
      <div class="row">
          <span class="price">Price: ${card.Price}</span>
          <button class="details">View Deal</button>
      </div>
  </div>
              `;
              cardContainer.innerHTML+=cardElement;
    });
   ;
}
fetch("../.././data.json")
  .then((response) => response.json())
  .then((data) => {
    renderCards(data.FlightsCards);

  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
  