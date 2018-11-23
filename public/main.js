var request = new XMLHttpRequest();
request.open('GET', 'https://api-wardrobe.herokuapp.com/api', true);

var app = new Vue({
    el: '#outfit',
    data: {
      head: 'hat.jpg',
      accessories: 'necklace.jpeg',
      dress: 'dress1.jpg',
      shoes: 'heels.jpg'
    }
  })