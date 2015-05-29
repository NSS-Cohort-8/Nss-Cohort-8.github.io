angular
.module('ch8App')
.factory('StudentsFactory', function () {
  //student data should go here. return an array of objects

  var students = [
    {
      name: 'Wiggles',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/wiggles',
      twitter: 'http://twitter.com/wiggles',
      summary: 'As a dog, I learned so much about coding and coders at Nashville Software School. I am basically a node ninja. My capstone project is a snack tracker. I record the eating behavior of the programmers, and estimate when is the most likely time they will feed me.',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Biddy',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/biddy',
      twitter: 'http://twitter.com/biddy',
      summary: 'I am super into my couch at home. When I have to be away from it, I like to code. The technology I liked learning most at NSS is bower. Not only is is crazy useful, but it sounds like a dog word.',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    }
  ]

  return students
})
