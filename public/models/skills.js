// This is probably not the most efficient way to display the icons, but
// for now it's acting as a placeholder for the logo and link data.

angular
.module('ch8App')
.factory('SkillsFactory', function () {
  //skills data goes here. return an array of objects

  var skills = [
    {
      name: 'Git',
      link: 'https://git-scm.com/doc',
      logo: '../images/logos/git_logo_words.jpg',
      type: 'git'
    },
    {
      name: 'GitHub',
      link: 'http://github.com/',
      logo: '../images/logos/github_logo_words_block.png',
      type: 'git'
    },
    {
      name: 'Markdown',
      link: 'http://daringfireball.net/projects/markdown/basics',
      logo: '../images/logos/markdown_logo_white.png',
      type: 'preprocs'
    },
    {
      name: 'Haml',
      link: 'http://haml.info/',
      logo: '../images/logos/haml_logo_words.png',
      type: 'preprocs'
    },
    {
      name: 'CSS3',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
      logo: '../images/logos/CSS3_logo_words.png',
      type: 'style'
    },
    {
      name: 'HTML5',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      logo: '../images/logos/html5_logo_words.png',
      type: 'style'
    },
    {
      name: 'Bootstrap',
      link: 'http://getbootstrap.com/',
      logo: '../images/logos/bootstrap_logo_small.png',
      type: 'frame'
    },
    {
      name: 'Jekyll',
      link: 'http://jekyllrb.com/',
      logo: '../images/logos/jekyll_logo_words_black.png',
      type: 'frame'
    },
    {
      name: 'Foundation',
      link: 'http://jekyllrb.com/',
      logo: '../images/logos/foundation_logo.jpg',
      type: 'frame'
    },
    {
      name: 'Jade',
      link: 'http://jade-lang.com/',
      logo: '../images/logos/jade_logo_words.png',
      type: 'preprocs'
    },
    {
      name: 'Sass',
      link: 'http://sass-lang.com/',
      logo: '../images/logos/sass_logo_words.jpg',
      type: 'preprocs'
    },
    {
      name: 'Grunt',
      link: 'http://gruntjs.com/',
      logo: '../images/logos/grunt_logo_words.png',
      type: 'taskrun'
    },
    {
      name: 'Gulp',
      link: 'http://gulpjs.com/',
      logo: '../images/logos/gulp_logo_words.png',
      type: 'taskrun'
    },
    {
      name: 'JavaScript',
      link: 'http://javascript.crockford.com/',
      logo: '../images/logos/javascript_logo_words.png',
      type: 'language'
    },
    {
      name: 'jQuery',
      link: 'http://api.jquery.com/',
      logo: '../images/logos/jquery_logo_words.gif',
      type: 'language'
    },
    {
      name: 'AngularJS',
      link: 'https://angularjs.org/',
      logo: '../images/logos/angular_logo_words.png',
      type: 'language'
    },
    {
      name: 'JSON',
      link: 'http://json.org/',
      logo: '../images/logos/json_logo.gif',
      type: 'language'
    },
    {
      name: 'Ruby',
      link: 'http://ruby-doc.org/',
      logo: '../images/logos/ruby_logo_words.png',
      type: 'language'
    },
    {
      name: 'Rails',
      link: 'http://rubyonrails.org/documentation/',
      logo: '../images/logos/rails_logo_words.jpg',
      type: 'language'
    },
    {
      name: 'Mocha',
      link: 'http://mochajs.org/',
      logo: '../images/logos/mocha_logo_words.png',
      type: 'test'
    },
    {
      name: 'Chai',
      link: 'http://chaijs.com/',
      logo: '../images/logos/chai_logo_words.png',
      type: 'test'
    },
    {
      name: 'RSpec',
      link: 'http://rspec.info/',
      logo: '../images/logos/rspec_logo_words.png',
      type: 'test'
    },
    {
      name: 'Capybara',
      link: 'http://jnicklas.github.io/capybara/',
      logo: '../images/logos/capybara_logo_words.png',
      type: 'test'
    },
    {
      name: 'Firebase',
      link: 'https://www.firebase.com/',
      logo: '../images/logos/firebase_logo_round.png',
      type: 'database'
    },
    {
      name: 'SQLite',
      link: 'http://sqlite.org/',
      logo: '../images/logos/sqlite_logo_words_block.jpg',
      type: 'database'
    },
    {
      name: 'SQL',
      link: 'http://sql.org/',
      logo: '../images/logos/sql_logo_words.png',
      type: 'database'
    },
    {
      name: 'Postgres',
      link: 'http://www.postgresql.org/',
      logo: '../images/logos/postgresql_logo_words_block.png',
      type: 'database'
    }
  ]

  return skills;

})


