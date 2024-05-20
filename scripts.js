
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


// JavaScript function to generate product items
function generateProductItems(products) {
  // Get the itemlist container
  const itemlist = document.querySelector('.itemlist');

  // Loop through the product data and generate product items
  products.forEach((product, index) => {
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('itemlist-item-wrapper');
    // Set a unique onclick event for each product using its index
    itemWrapper.setAttribute('onclick', `OpenProduct(${index + 1})`);

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productTitle = document.createElement('div');
    productTitle.classList.add('product-title');
    productTitle.textContent = product.title;

    const productImage = document.createElement('div');
    productImage.classList.add('product-image');
    const img = document.createElement('img');
    img.src = product.imageSrc;
    productImage.appendChild(img);

    productInfo.appendChild(productTitle);
    productDetails.appendChild(productInfo);
    productDetails.appendChild(productImage);
    itemWrapper.appendChild(productDetails);

    itemlist.appendChild(itemWrapper);
  });
}

// Define product data array
const products = [
  { title: "Water Treatment Plant", imageSrc: "./pictures/250 lph RO.jpg", description: "" },
  { title: "Water Treatment Plant", imageSrc: "./pictures/products.jpg", description: "" },
  
  // Add more product data as needed
];

// Call the function to generate product items with the products array
generateProductItems(products);



function OpenProduct(index) {
  const product = products[index - 1]; // Adjust index to match array index

  // Update product details in the popup
  const productTitle = document.querySelector('.product-title');
  const productImage = document.querySelector('.product-image img');
  const productDescription = document.querySelector('.product-description');

  productTitle.textContent = product.title;
  productImage.src = product.imageSrc;
  productDescription.textContent = product.description;

  // Show the product popup
  $(".lightbox-blanket").toggle();
}

