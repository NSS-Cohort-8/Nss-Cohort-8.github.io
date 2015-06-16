angular
.module('ch8App')
.factory('StudentsFactory', function () {
  //student data should go here. return an array of objects

  var students = [
    {
      name: 'Allison Higginbotham',
      portfolio: 'allisonhigginbotham.com',
      linkedin: 'in/allisonhigginbotham',
      github: 'higgintop',
      summary: 'Allison is a full-stack developer located in Nashville, TN',
      pic1: '../images/students/allison1.jpg',
      pic2: '../images/students/allison2.jpg'
    },
    {
      name: 'Andy Meagher',
      portfolio: 'andymeagher.me',
      linkedin: 'in/andymeagher',
      github: 'andymeagher',
      summary: "Always on the hunt to learn a new craft, Andy's previous experience ranges from healthcare, construction, to most recently cooking. He is excited to be entering a field where he can always be learning and expanding his skill-sets. Andy holds a Bachelors degree from Fordham University in Psychology and has an interest in creating technology that inspires change and innovation in communities.",
      pic1: '../images/students/andy1.jpg',
      pic2: '../images/students/andy2.jpg'
    },
    {
      name: 'Austin Erlandson',
      linkedin: 'in/erlandsona',
      github: 'erlandsona',
      summary: 'Austin is a full-stack developer located in Nashville, TN',
      pic1: '../images/students/austin1.jpg',
      pic2: '../images/students/austin2.jpg'
    },
    {
      name: 'Ayumi Bennett',
      portfolio: 'ayumi-b.github.io',
      linkedin: 'in/ayumibennett',
      github: 'ayumi-b',
      twitter: 'ayumibennett',
      summary: 'Ayumi is a full-stack developer located in Nashville, TN',
      pic1: '../images/students/ayumi1.jpg',
      pic2: '../images/students/ayumi2.jpg'
    },
    {
      name: 'Brandon Howard',
      portfolio: 'brandonrhoward.com',
      linkedin: "profile/view?id=395753849&trk=hp-identity-photo",
      github: 'brayhoward',
      twitter: 'brandonrhoward1',
      summary: 'Brandon did all his growing up in Ohio before he decided the midwest just wasn’t his cup of tea. He discovered Nashville two years ago, fell in love with the artist friendly east side, pulled up his roots in the North and headed to the South. Shortly after the move he was made aware of NSS and decided to apply. He made the cut and hasn’t looked back since. Brandon also enjoys climbing big rocks, urban commuting on his bike, kayaking on whitewater laden rivers and creeks, and just has a lot of love for the great outdoors in general.',
      pic1: '../images/students/brandonh1.jpg',
      pic2: '../images/students/brandonh2.jpg'
    },
    {
      name: 'Brandon Espinoza',
      portfolio: 'espinozabrand.com',
      linkedin: 'in/bespinoza10',
      github: 'bespinoza10',
      summary: 'Brandon is a Front-End Developer who enjoys coding and learning new languages.',
      pic1: '../images/students/brandone1.jpg',
      pic2: '../images/students/brandone2.jpg'
    },
    {
      name: 'Brennan Willingham',
      linkedin: 'in/brennanwillingham',
      github: 'brenntron',
      summary: 'Brennan is a full-stack developer located in Nashville, TN',
      pic1: '../images/students/brennan1.jpg',
      pic2: '../images/students/brennan2.jpg'
    },
    {
      name: 'Bryan Finlayson',
      linkedin: 'in/bryandfinlayson',
      github: 'bdfinlayson',
      summary: 'Bryan is a full-stack developer located in Nashville, TN',
      pic1: '../images/students/bryan1.jpg',
      pic2: '../images/students/bryan2.jpg'
    },
    {
      name: 'David Shoup',
      linkedin: 'pub/david-shoup/41/760/4a7',
      github: 'pjprogrammer1953',
      twitter: 'pjinterrogator',
      summary: 'David is an IBM AS/400 Developer, Linguist, Entry level Web Developer, Intelligence Professional, Bricklayer located in Nashville, TN.',
      pic1: '../images/students/david1.jpg',
      pic2: '../images/students/david2.jpg'
    },
    {
      name: 'Devin Readel',
      portfolio: 'devinreadel.com',
      linkedin: 'in/devinreadel',
      github: 'readeldj',
      summary: 'Devin is a full-stack developer located in Nashville, TN',
      pic1: '../images/students/devin1.jpg',
      pic2: '../images/students/devin2.jpg'
    },
    {
      name: 'Dotun Olusoga',
      portfolio: 'dotunolusoga.com',
      linkedin: 'in/adedotunolusoga',
      github: 'dotunolusoga',
      twitter: 'dotunolusoga',
      summary: 'Dotun is a Software Engineer with a love for creating beautiful UX experiences that bridge the gap between functionality and design. An amateur food conjurer, with a particular fondness for pancakes and hot cocoa, will try anything at least once.',
      pic1: '../images/students/dotun1.jpg',
      pic2: '../images/students/dotun2.jpg'
    },
    {
      name: 'Ed Dean',
      portfolio: 'eddean.me',
      linkedin: 'pub/ed-dean/ba/9a2/852',
      github: 'edean11',
      summary: 'Ed is a full-stack developer located in Nashville, TN',
      pic1: '../images/students/ed1.jpg',
      pic2: '../images/students/ed2.jpg'
    },
    {
      name: 'Eric Brengle',
      portfolio: 'ericbrengle.com',
      linkedin: 'pub/eric-brengle/25/3b9/33',
      github: 'ebrengle',
      twitter: 'ericbrengle',
      summary: "Originally brought to Nashville by the entertainment industry, Eric joined NSS in January of 2015. Upon his departure from Island Def Jam Records, Eric and his wife, Kim, launched their first medical practice in Franklin, TN where Eric headed up the IT and operations of the company. After having success other companies began hiring Eric for his tech savvy expertise, which lead to his passion for software and product development.  When he's away from his text editor Eric can be found training for his next triathlon one mile at a time.",
      pic1: '../images/students/eric1.jpg',
      pic2: '../images/students/eric2.jpg'
    },
    {
      name: 'Erin Page',
      portfolio: 'erinpagemd.com',
      linkedin: 'in/erinpagemd',
      github: 'erinpagemd',
      twitter: 'erinmpage',
      summary: 'Erin has a background encompassing healthcare, research science, manufacturing, logistics, startups, and the military. She is a full-stack developer with a focus on Front-End technologies. Erin is a veteran and proud mother of 2 over-achieving teenage boys. She can be found dragging her entire family (including dog Wiggles) to Hackathons in Nashville, TN',
      pic1: '../images/students/erin1.jpg',
      pic2: '../images/students/erin2.jpg'
    },
    {
      name: 'Jacob Lewis',
      portfolio: 'jacobdlewis.com',
      linkedin: 'in/jacoblewis',
      github: 'jacobdlewis',
      twitter: 'jacobdlewis',
      summary: "Jacob is a former humanities major who found his passion for coding while working as a technical writer in Madison, WI. When he realized he enjoyed writing code more than writing about code, he picked up his things, moved to Nashville, and embarked on a new career. When he isn't coding, he can be found playing disc golf or board games.",
      pic1: '../images/students/jake1.jpg',
      pic2: '../images/students/jake2.jpg'
    },
    {
      name: 'Katye Russell',
      portfolio: 'complikatyed.github.io',
      linkedin: 'in/katyerussell',
      github: 'complikatyed',
      twitter: 'complikatyed',
      summary: "In addition to being an aspiring developer, Katye is also a reader, knitter, carpenter, seamstress, polymer artist, ever hopeful guitar student, and mom of two teenagers.",
      pic1: '../images/students/katye1.jpg',
      pic2: '../images/students/katye2.jpg'
    },
    {
      name: 'Kyle McCormick',
      portfolio: 'kylemc.co',
      linkedin: 'in/kylepmccormick',
      github: 'kylemcco',
      twitter: 'kylepmccormick',
      summary: 'Kyle is a tech-noir film enthusiast fueled by hot coffee and hotter chicken, turning the wheel of the quivering code conception.',
      pic1: '../images/students/kyle1.jpg',
      pic2: '../images/students/kyle2.jpg'
    },
    {
      name: 'Luke Lancaster',
      portfolio: 'luketlancaster.com',
      linkedin: 'in/luketlancaster',
      github: 'luketlancaster',
      twitter: 'luketlancaster',
      summary: "Formerly a professional barista and coffee roaster, currently a future coder. Luke enjoys solving problems, be they on a computer screen or with a real life person. He is looking forward to more each and every day.",
      pic1: '../images/students/luke1.jpg',
      pic2: '../images/students/luke2.jpg'
    },
    {
      name: 'Margaret Clinard',
      portfolio: 'margaretclinard.github.io',
      linkedin: 'in/margaretclinard',
      github: 'margaretclinard',
      twitter: 'marrclina',
      summary: 'After working in the field of marketing technology, Margaret decided to take her passion for all things web to the next level by learning to code. With a background in SEO and analytics, she has taken to front-end web development, and hopes to work across disciplines to craft unique user experiences that solve real world problems.',
      pic1: '../images/students/margaret1.jpg',
      pic2: '../images/students/margaret2.jpg'
    },
    {
      name: 'Matthew Reuther',
      linkedin: 'pub/matthew-reuther/68/aa1/870',
      github: 'matthewreuther',
      summary: 'Matthew is a full-stack developer located in Nashville, TN',
      pic1: '../images/students/matt1.jpg',
      pic2: '../images/students/matt2.jpg'
    },
    {
      name: 'Molly Black',
      portfolio: 'mollymorganblack.com',
      linkedin: 'pub/molly-morgan-black/2a/183/56b',
      github: 'mollytaryn',
      twitter: 'mollymoblack',
      summary: "Molly is a former Product Manager and long-time start-up addict. She graduated from Columbia University in the city of New York with a degree in Neuropsychology and Fiction. (As one does.) Since then, she pretty much has been having a series of adventures from living in Lyon, France teaching English (in French)  at an elementary school, to buying a farm on the outskirts of Leiper's Fork, Tennessee and trying to figure out what one does with 8 acres and two big fluffy dogs. AND – to add another thing to the list of fun and exciting – at the end of June, she will be joining the team at Philly-based start-up LifeVest as a full-stack developer learning to code the Sandi Metz way. Can't wait.",
      pic1: '../images/students/molly1.jpg',
      pic2: '../images/students/molly2.jpg'
    },
    {
      name: 'Tyler Black',
      portfolio: 'tylerblack.me',
      linkedin: 'pub/tyler-black/51/70/277',
      github: 'blacktylera',
      twitter: 'tyl3rbl4ck',
      summary: 'Junior developer located in Nashville, TN. Tyler loves making great ideas happen!',
      pic1: '../images/students/tyler1.jpg',
      pic2: '../images/students/tyler2.jpg'
    }

  ]

  return students
})
