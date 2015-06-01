angular
.module('ch8App')
.factory('StudentsFactory', function () {
  //student data should go here. return an array of objects

  var students = [
    {
      name: 'Allison Higgenbotham',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/higgintop',
      twitter: 'http://twitter.com/biddy',
      summary: 'Allison is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Andy Meagher',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/andymeagher',
      twitter: 'http://twitter.com/biddy',
      summary: 'Andy is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Austin Erlandson',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/erlandsona',
      twitter: 'http://twitter.com/biddy',
      summary: 'Austin is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Ayumi Bennett',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/ayumi-b',
      twitter: 'http://twitter.com/biddy',
      summary: 'Ayumi is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Brandon Howard',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/brayhoward',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Brandon is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Brandon Espinoza',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/bespinoza10',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Brandon is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Brennan Willingham',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/brenntron',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Brennan is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Bryan Finlayson',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/bdfinlayson',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Bryan is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'David Shoup',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/pjprogrammer1953',
      twitter: 'http://twitter.com/wiggles',
      summary: 'David is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Devin Readel',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/readeldj',
      twitter: 'http://twitter.com/biddy',
      summary: 'Devin is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Dotun Olusoga',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/dotunolusoga',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Dotun is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Ed Dean',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/edean11',
      twitter: 'http://twitter.com/biddy',
      summary: 'Ed is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Eric Brengle',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/ebrengle',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Eric is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Erin Page',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/erinpagemd',
      twitter: 'http://twitter.com/biddy',
      summary: 'Erin is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Jacob Lewis',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/jacobdlewis',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Jacob is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Katye Russell',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/complikatyed',
      twitter: 'http://twitter.com/biddy',
      summary: 'Katye is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Kyle McCormick',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/kylemcco',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Kyle is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Luke Lancaster',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/lukelancaster',
      twitter: 'http://twitter.com/biddy',
      summary: 'Luke is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Margaret Clinard',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/margaretclinard',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Margaret is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Matthew Reuther',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/matthewreuther',
      twitter: 'http://twitter.com/biddy',
      summary: 'Matthew is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Molly Black',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'http://linkedin.com/in/wiggles',
      github: 'http://github.com/mollytaryn',
      twitter: 'http://twitter.com/wiggles',
      summary: 'Molly is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Tyler Black',
      portfolio: 'https://www.youtube.com/watch?v=e3F2slF9pCw',
      linkedin: 'http://linkedin.com/in/biddy',
      github: 'http://github.com/blacktylera',
      twitter: 'http://twitter.com/biddy',
      summary: 'Tyler is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    }

  ]

  return students
})
