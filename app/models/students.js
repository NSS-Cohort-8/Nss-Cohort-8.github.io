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
      linkedin: 'https://www.linkedin.com/profile/view?id=395753849&trk=hp-identity-photo',
      github: 'http://github.com/brayhoward',
      twitter: 'http://twitter.com/brandonrhoward1',
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
      portfolio: 'http://devinreadel.com',
      linkedin: 'https://www.linkedin.com/in/devinreadel',
      github: 'http://github.com/readeldj',
      twitter: 'http://twitter.com/nashsoftware',
      summary: 'Devin is a full-stack developer located in Nashville, TN',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Dotun Olusoga',
      portfolio: 'https://www.youtube.com/watch?v=cqxgnRjDB_w',
      linkedin: 'https://twitter.com/dotunolusoga',
      github: 'http://github.com/dotunolusoga',
      twitter: 'https://twitter.com/dotunolusoga',
      summary: 'Dotun is a full-stack developer located in Nashville, TN',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Ed Dean',
      portfolio: 'http://eddean.me',
      linkedin: 'https://www.linkedin.com/pub/ed-dean/ba/9a2/852',
      github: 'http://github.com/edean11',
      twitter: 'http://twitter.com/nashsoftware',
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
      portfolio: 'http://complikatyed.github.io/',
      linkedin: 'https://www.linkedin.com/in/katyerussell',
      github: 'http://github.com/complikatyed',
      twitter: 'http://twitter.com/complikatyed',
      summary: "In addition to being an aspiring developer, Katye is also a reader, knitter, carpenter, seamstress, polymer artist, ever hopeful guitar student, and mom of two teenagers.",
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Kyle McCormick',
      portfolio: 'http://kylemc.co',
      linkedin: 'https://www.linkedin.com/in/kylepmccormick',
      github: 'http://github.com/kylemcco',
      twitter: 'http://twitter.com/kylepmccormick',
      summary: 'Kyle is a tech-noir film enthusiast fueled by hot coffee and hotter chicken, turning the wheel of the quivering code conception.',
      pic1: '../images/wiggles1.jpg',
      pic2: '../images/wiggles2.jpg'
    },
    {
      name: 'Luke Lancaster',
      portfolio: 'http://luketlancaster.com',
      linkedin: 'http://linkedin.com/in/luketlancaster',
      github: 'http://github.com/luketlancaster',
      twitter: 'http://twitter.com/nashsoftware',
      summary: "Formerly a professional barista and coffee roaster, currently a future coder. Luke enjoys solving problems, be they on a computer screen or with a real life person. He is looking forward to more each and every day.",
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    },
    {
      name: 'Margaret Clinard',
      portfolio: 'http://margaretclinard.github.io',
      linkedin: 'https://www.linkedin.com/in/margaretclinard',
      github: 'http://github.com/margaretclinard',
      twitter: 'http://twitter.com/marrclina',
      summary: 'After working in the field of marketing technology, Margaret decided to take her passion for all things web to the next level by learning to code. With a background in SEO and analytics, she has taken to front-end web development, and hopes to work across disciplines to craft unique user experiences that solve real world problems.',
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
      portfolio: 'http://tylerblack.me',
      linkedin: 'https://www.linkedin.com/pub/tyler-black/51/70/277',
      github: 'http://github.com/blacktylera',
      twitter: 'http://twitter.com/tyl3rbl4ck',
      summary: 'Junior developer located in Nashville, TN. Tyler loves making great ideas happen!',
      pic1: '../images/biddy1.jpg',
      pic2: '../images/biddy2.jpg'
    }

  ]

  return students
})
