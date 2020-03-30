const data=[
  {
    "id": 1,
    "name": "Name Brand Shoes",
    "desc": "Product fashion, hot trend and very cheap",
    "image": "http://html.smartcmsmarket.net/product-listing/images/1.png",
    "rating": 4,
    "price": 600,
    "specialPrice": 500
  },
  {
    "id": 2,
    "name": "Name Brand Shoes",
    "desc": "Product fashion, hot trend and very cheap",
    "image": "http://html.smartcmsmarket.net/product-listing/images/2.png",
    "rating": 3,
    "price": 627,
    "specialPrice": 527
  },
  {
    "id": 3,
    "name": "Name Brand Shoes",
    "desc": "Product fashion, hot trend and very cheap",
    "image": "http://html.smartcmsmarket.net/product-listing/images/3.png",
    "rating": 2,
    "price": 786,
    "specialPrice": 400
  },
  {
    "id": 4,
    "name": "Name Brand Shoes",
    "desc": "Product fashion, hot trend and very cheap",
    "image": "http://html.smartcmsmarket.net/product-listing/images/4.png",
    "rating": 5,
    "price": 500,
    "specialPrice": 400
  },
  {
    "id": 5,
    "name": "Name Brand Shoes",
    "desc": "Product fashion, hot trend and very cheap",
    "image": "http://html.smartcmsmarket.net/product-listing/images/5.png",
    "rating": 4,
    "price": 890,
    "specialPrice": 580
  },
  {
    "id": 6,
    "name": "Name Brand Shoes",
    "desc": "Product fashion, hot trend and very cheap",
    "image": "http://html.smartcmsmarket.net/product-listing/images/6.png",
    "rating": 5,
    "price": 670,
    "specialPrice": 579
  },
  {
    "id": 7,
    "name": "Name Brand Shoes",
    "desc": "Product fashion, hot trend and very cheap",
    "image": "http://html.smartcmsmarket.net/product-listing/images/7.png",
    "rating": 3,
    "price": 600,
    "specialPrice": 500
  },
  {
    "id": 8,
    "name": "Name Brand Shoes",
    "desc": "Product fashion, hot trend and very cheap",
    "image": "http://html.smartcmsmarket.net/product-listing/images/8.png",
    "rating": 4,
    "price": 469,
    "specialPrice": 335
  }
];


//logic for ratings given below
function getStars(rating) {

  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // If there is a half a star, append it
  if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // Fill the empty stars
  for (let i = (5 - rating); i >= 1; i--)
    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  return output.join('');
}



//Main Program
document.getElementById("app").innerHTML = `
<h1 class='app-title'>Shopping website </h1>
<h6 align='center' >showing results : ${data.length}</h6>
	${data.map(function(shoes) {
		return `
		<div class='shoe'>
			<img class='shoe-image' src='${shoes.image}'>
			<div class='triangle-right'><h4 id='txt'>${Math.round(((shoes.price-shoes.specialPrice)/shoes.price)*100)}%  off </h4></div> 
			<br>
			<h2 class="shoe-name" align='center' style='style='font-size:15px ' ><strong>${shoes.name}</strong></h2>
			<h2 class="shoe-name" align='center'>${shoes.desc}</h2>
			<button class='btn' style='style="float: right;"'>    $  ${shoes.specialPrice}   $  <strike>${shoes.price}</strike> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<i class="fa fa-shopping-bag"></i></button>
			<div class='stars'><b style='font-family='cursive' margin-left:30px; '>Rating:</b> ${getStars(shoes.rating)}</div>
		</div> 
		
		`
	}).join('')}
`
