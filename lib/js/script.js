$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    datThing(data);
  }
});

datThing = data =>{
var datPic = (data.results[0].picture.large)
var datFirstName = (data.results[0].name.first)
var datLastName = (data.results[0].name.last)
var datFullName = datFirstName + " " + datLastName 

$(".card").prepend('<img class="card-img-top" src="' + datPic + '" alt="Card image cap">') 
$(".card-title").prepend(datFullName)
}


var compliment = {
  
    1: "This site is great for getting the latest news on games.",
    2: "Game Central provides a great way to get insight on new games.",
    3: "This website is basuda. I'm going back to Wolf's Gaming Blog.",
    4: "I don't really like how everything is laid out :/",
    5: "The site isn't the best and could use some touch-ups but overall it's a good site and still has good info."
}

var randomnumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

$(".card-text").prepend(compliment[randomnumber])