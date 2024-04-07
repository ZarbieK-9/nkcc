
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
  const images = document.querySelectorAll('.jumbo-image');
  let index = 0;

  function showImage() {
    images.forEach(image => {
      image.classList.remove('visible');
    });
    images[index].classList.add('visible');
    index = (index + 1) % images.length;
    setTimeout(showImage, 2000); // Change slide duration here (in milliseconds)
  }

  showImage();
});




// var container = document.getElementById("container");
// var left = document.getElementById("left");
// var right = document.getElementById("right");
// var items = Array.from(document.getElementsByClassName("item"));

// items.map((item, index) => {
// 	item.dataset.index = index;
// });

// var debounce = function (callback, time) {
// 	var timeout;
// 	return function (event) {
// 		clearTimeout(timeout);
// 		timeout = setTimeout(() => {
// 			callback.apply(this, arguments);
// 		}, time);
// 	};
// };

// container.addEventListener(
// 	"scroll",
// 	debounce(function (event) {
// 		console.log(event.target.scrollLeft);
// 	}, 300)
// );

// right.addEventListener("click", function (event) {
// 	handleScrolling(true);
// });

// left.addEventListener("click", function (event) {
// 	handleScrolling(false);
// });

// var handleScrolling = function (right = true) {
// 	// get current active element
// 	var active = document.getElementsByClassName("active")[0];

// 	if (active) {
// 		// find next scroll element
// 		var nextActive = right
// 			? active.nextElementSibling
// 			: active.previousElementSibling;

// 		// if there is next active sibling
// 		if (nextActive) {
// 			active.classList.remove("active");
// 			nextActive.classList.add("active");
// 			nextActive.scrollIntoView({
// 				behavior: "smooth",
// 				block: "start",
// 				inline: "start"
// 			});
// 		}
// 	}
// };
