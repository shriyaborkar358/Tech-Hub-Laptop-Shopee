document.getElementById('login-form').addEventListener('submit', function (event) {
   event.preventDefault();

   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;


   if (username === 'admin' && password === 'admin123') {

      window.location.href = 'sign-up.html';
   }
   else {

      document.getElementById('error-message').textContent = 'Invalid username or password. Please try again.';
   }
});

function imgChange() {
   const imageElement = document.getElementById("lappy-cards")
   const min = 1;
   const max = 5;
   const mathElement = Math.round(Math.random() * (max - min) + (min));

   console.log(mathElement)
   switch (mathElement) {
      case (1):
         imageElement.src = "./images/laptop-slider-1.jpg";
         break;

      case (2):
         imageElement.src = "./images/laptop-slider-2.jpg";
         break;

      case (3):
         imageElement.src = "./images/laptop-slider-3.jpg";
         break;

      case (4):
         imageElement.src = "./images/laptop-slider-4.jpg";
         break;

      case (5):
         imageElement.src = "./images/laptop-card-4.jpg";
         break;
   }
}

function imagesChange() {
   const imagesElement = document.getElementById("lappy-shop")
   const min = 1;
   const max = 4;
   const mathsElement = Math.round(Math.random() * (max - min) + (min));

   console.log(mathsElement)
   switch (mathsElement) {
      case (1):
         imagesElement.src = "./../images/laptop-store-img/laptop-store-1.jpg";
         break;

      case (2):
         imagesElement.src = "./../images/laptop-store-img/laptop-store-2.jpg";
         break;

      case (3):
         imagesElement.src = "./../images/laptop-store-img/laptop-store-3.jpg";
         break;

      case (4):
         imagesElement.src = "./../images/laptop-store-img/laptop-store-4.jpg";
         break;
   }
}
