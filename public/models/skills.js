// This is probably not the most efficient way to display the icons, but
// for now it's acting as a placeholder for the logo and link data.

angular
.module('ch8App')
.factory('SkillsFactory', function () {
  //skills data goes here. return an array of objects

  var skills = [

    {
      skill: 'Git',
      link: 'https://git-scm.com/doc',
      logo: './app/assets/images/logos/git_logo_words.png'
    },
    {
      skill: 'GitHub',
      link: 'http://github.com/',
      logo: './app/assets/images/logos/github_logo_words.png'
    },
    {
      skill: 'Markdown',
      link: 'http://daringfireball.net/projects/markdown/basics',
      logo: './app/assets/images/logos/markdown_logo_black.png'
    },
    {
      skill: 'CSS3',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
      logo: './app/assets/images/logos/CSS3_logo.jpg'
    },
    {
      skill: 'HTML5',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      logo: './app/assets/images/logos/html5_logo_words.png'
    },
    {
      skill: 'Jade',
      link: 'http://jade-lang.com/',
      logo: './app/assets/images/logos/html5_logo_words.png'
    },
    {
      skill: 'Sass',
      link: 'http://sass-lang.com/',
      logo: './app/assets/images/logos/sass_logo_words.jpg'
    },
    {
      skill: 'Grunt',
      link: 'http://gruntjs.com/',
      logo: './app/assets/images/logos/grunt_logo_words.png'
    },
    {
      skill: 'Gulp',
      link: 'http://gulpjs.com/',
      logo: './app/assets/images/logos/gulp_logo_words.png'
    },
    {
      skill: 'Bootstrap',
      link: 'http://getbootstrap.com/',
      logo: './app/assets/images/logos/bootstrap_words.png'
    },
    {
      skill: 'Jekyll',
      link: 'http://jekyllrb.com/',
      logo: './app/assets/images/logos/jekyll_logo_words_black.png'
    },
    {
      skill: 'JavaScript',
      link: 'http://javascript.crockford.com/',
      logo: './app/assets/images/logos/javascript_logo_words.png'
    },
    {
      skill: 'jQuery',
      link: 'http://api.jquery.com/',
      logo: './app/assets/images/logos/jquery_logo_words.png'
    },
    {
      skill: 'AngularJS',
      link: 'https://angularjs.org/',
      logo: './app/assets/images/logos.angular_logo_words.png'
    },
    {
      skill: 'Ruby',
      link: 'http://ruby-doc.org/',
      logo: './app/assets/images/logos/ruby_logo_words.png'
    },
    {
      skill: 'Rails',
      link: 'http://rubyonrails.org/documentation/',
      logo: './app/assets/images/logos/rails_logo_words.png'
    },
    {
      skill: 'Mocha',
      link: 'http://mochajs.org/',
      logo: './app/assets/images/logos/mocha_logo_words.png'
    },
    {
      skill: 'Chai',
      link: 'http://chaijs.com/',
      logo: './app/assets/images/logos/chai_logo_words.png'
    },
    {
      skill: 'RSpec',
      link: 'http://rspec.info/',
      logo: './app/assets/images/logos/rspec_logo_words.png'
    },
    {
      skill: 'Firebase',
      link: 'https://www.firebase.com/',
      logo: './app/assets/images/logos/firebase_logo_words.png'
    },
    {
      skill: 'JSON',
      link: 'http://json.org/',
      logo: './app/assets/images/logos/json_logo_words.png'
    },
    {
      skill: 'SQLite',
      link: 'http://sqlite.org/',
      logo: './app/assets/images/logos/sqlite_logo_words.png'
    },
    {
      skill: 'SQL',
      link: 'http://sql.org/',
      logo: './app/assets/images/logos/sql_logo_words.png'
    },
    {
      skill: 'Postgres',
      link: 'http://www.postgresql.org/',
      logo: './app/assets/images/logos/postgres_logo_words.png'
    }
  ]

  return skills
})
