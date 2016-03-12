// Get Create button
var createButton = document.getElementById("create");
// Get Textarea 
var textArea1 = document.getElementById("info");
// Get cardArea div
var cardArea = document.getElementById("cardArea");
// Array of Delete Buttons
var delBtns;
// Number of Cards
var count = 1;

// Event Listener for Card-creating button
createButton.addEventListener("click", createCard);

function createCard(){
// HTML for creating Card
  cardArea.innerHTML += "<article class='card'> <header> <h3>Card #" + count + "</h3> </header><section><p>" + textArea1.value + "</p></section><footer><p>" +
                       "<button class='deleteButton'>Delete</button></p></footer></article>";

// increment count of cards  
  count++;

// Get array of cards
  delBtns = document.getElementsByClassName("card");

  for (var i=0; i<delBtns.length; i++){
    
// Add Event Listener to every card
    delBtns[i].addEventListener("click", function(e){
      
// checks if button was clicked and if so, remove itself
      if (e.target.localName === "button"){
        this.parentNode.removeChild(this);
      }
    });
  }
}
