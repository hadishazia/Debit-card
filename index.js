const card = document.getElementById('debitCard');

card.addEventListener ('click', function() {
  card.classList.toggle('rotated');
});

// Store card values in JavaScript
const cardDetails = {
  cardNumber: "0000 0000 0000 0000",
  expiryDate: "01/30",
  cardholderName: "Cardholder Name",
  cvv: "123"
};

console.log(cardDetails); 
