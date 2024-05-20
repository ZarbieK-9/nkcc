
//Go Back
function OpenProduct(i){
  var i = $('.product-image[item-data="'+i+'"] img');
  var lbi = $('.lightbox-blanket .product-image img');
  console.log($(i).attr("src"));
  $(lbi).attr("src", $(i).attr("src"));  
  $(".lightbox-blanket").toggle();
    
  $("#product-quantity-input").val("0");
  CalcPrice (0);
  
}
function GoBack(){
  $(".lightbox-blanket").toggle();
}



document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.hero-img img');
  let index = 0;

  function showImage() {
    images.forEach(img => {
      img.style.display = 'none';
    });
    index = (index + 1) % images.length;
    images[index].style.display = 'block';
    setTimeout(showImage, 3000); // Change slide duration here (in milliseconds)
  }

  showImage();
});


// // JavaScript function to generate product items
// function generateProductItems(products) {
//   // Get the itemlist container
//   const itemlist = document.querySelector('.itemlist');

//   // Loop through the product data and generate product items
//   products.forEach((product, index) => {
//     const itemWrapper = document.createElement('div');
//     itemWrapper.classList.add('itemlist-item-wrapper');
//     // Set a unique onclick event for each product using its index
//     itemWrapper.setAttribute('onclick', `OpenProduct(${index + 1})`);

//     const productDetails = document.createElement('div');
//     productDetails.classList.add('product-details');

//     const productInfo = document.createElement('div');
//     productInfo.classList.add('product-info');

//     const productTitle = document.createElement('div');
//     productTitle.classList.add('product-title');
//     productTitle.textContent = product.title;

//     const productImage = document.createElement('div');
//     productImage.classList.add('product-image');
//     const img = document.createElement('img');
//     img.src = product.imageSrc;
//     productImage.appendChild(img);

//     productInfo.appendChild(productTitle);
//     productDetails.appendChild(productInfo);
//     productDetails.appendChild(productImage);
//     itemWrapper.appendChild(productDetails);

//     itemlist.appendChild(itemWrapper);
//   });
// }

// // Define product data array
// const products = [
//   { title: "Water Treatment Plant", imageSrc: "./pictures/250 lph RO.jpg", description: "" },
//   { title: "Water Treatment Plant", imageSrc: "./pictures/products.jpg", description: "" },
  
//   // Add more product data as needed
// ];

// // Call the function to generate product items with the products array
// generateProductItems(products);



// function OpenProduct(index) {
//   const product = products[index - 1]; // Adjust index to match array index

//   // Update product details in the popup
//   const productTitle = document.querySelector('.product-title');
//   const productImage = document.querySelector('.product-image img');
//   const productDescription = document.querySelector('.product-description');

//   productTitle.textContent = product.title;
//   productImage.src = product.imageSrc;
//   productDescription.textContent = product.description;

//   // Show the product popup
//   $(".lightbox-blanket").toggle();
// }

document.addEventListener("DOMContentLoaded", function () {
  const showProductCardLinks = document.querySelectorAll('.item[data-product-card]');
  const productCardContainer = document.getElementById('productCardContainer');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  // Function to load and display product card content
  function loadProductCardContent(event) {
    event.preventDefault();
    
    // Get the identifier of the product card to load (e.g., from a data attribute or other source)
    const productCardId = event.target.getAttribute('data-product-card');
    console.log(productCardId) // Adjust this based on your HTML structure
    
    const productCardUrl = `${productCardId}.html`;
    
    // Fetch the content from the constructed URL
    fetch(productCardUrl)
      .then(response => response.text())
      .then(data => {
        // Set the product card content
        productCardContainer.innerHTML = data;
        
        // Show the overlay and product card
        overlay.style.display = 'block';
        productCardContainer.style.display = 'block';

        body.classList.add('blur-background');
        
      
        
        // Disable scrolling on the page
        body.style.overflow = 'hidden';
      })
      .catch(error => {
        console.error("Error loading product card content:", error);
      });
  }

  // Add click event listeners to all items with data-product-card attribute
  showProductCardLinks.forEach(link => {
    link.addEventListener('click', loadProductCardContent);
  });

  // Function to close the product card and overlay when clicking outside of it
  function closeProductCard(event) {
    if (event.target === overlay || event.target === productCardContainer || event.target.id === 'closeButton') {
      // Hide the overlay and product card
      overlay.style.display = 'none';
      productCardContainer.style.display = 'none'; // Fix the property name
      
      // Restore the background color of the host file
      body.style.backgroundColor = ''; // Reset to default
      
      // Enable scrolling on the page
      body.style.overflow = 'auto';
    }
  }

  // Add click event listeners to the overlay and product card
  overlay.addEventListener('click', closeProductCard);
  productCardContainer.addEventListener('click', closeProductCard);
});

function closeProductCard(cardId) {
  // Assuming you want to hide the card, you can use the following code
  var card = document.getElementById(cardId);
  card.style.display = 'none';
  // You can adjust the closing logic according to your specific requirements
}
