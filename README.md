# Nss-Cohort-8.github.io

* Making a profile page for our class.

## There should be 4 main divs and a navbar:
1. Home div with Class pic = Brennan
2. Nss Info = Katye
3. Individual pics and information = Erin
4. Contact us = Bryan
5. Navbar = Brennan

### Class pic
1. hover shows the silly pic
2. additional suggestions...

### NSS Info
1. short info about the program? i.e. it is a bootcamp?? = Ayumi
2. technologies we learned. logos + links
3. additional suggestions...

### Students
1. please see myemma.com/meet-us
  * group pic at top faded with content
2. when click on pic, modal pops open
3. modal contains name, silly pic, summary, links to github, portfolio, linkedin.
4. set min and max sizes? main differences will be the space the name takes up after standardizing the pic size...
5. additional suggestions...

### Contact
1. SimpleForm that links to our google-group email
2. fields
 * name
 * email
 * phone?
 * message
 * company?
 * title
3. additional suggestions...

### Navbar
1. mobile version?
2. links to home, nss div, students, and contact form
3. nss logo?

## Run by::

```
npm install
bower install
gulp
```

gulp will take a few minutes to build (be patient)
page should load on localhost:8000


## Config and File Structure
1. bower components are put into a vendor folder in public. if you erase the public folder, you must bower install again.
2. app folder contains: images directory, models directory, views directory. index.jade/js/scss are top level in the app folder.
3. views: name the jade file in views. if there is a need for a controller, name a js file the same as the jade. keep both in views.
4. models are for factories, services, providers, etc.
5. images is all the assets. if they are not compiling to public, please check gulpfile to make sure the file extension is listed on what should be copied.

## Git Flow
* Let's do everything on development branch.
* We will deploy the public folder ONLY to the master branch.
* BEFORE YOU PUSH TO DEVELOPMENT::: git pull, make sure everything works, then push.

## On styling
* We are going to use Bootstrap for the modal on the student page. We can use it minimally elsewhere, but prefer bourbon over bootstrap as main styling tool.
* The index.scss file has the styling for all of the divs currently. We can break those out into partials. If you want, save an scss file in views with the same name as your div. Include it in the index.scss file.
* Do all of your styling in scss inside of the appropriate div ID to avoid having conflicts with styling. I made a div ID that associates with each main div in the appropraiate jade file. I linked some colors in index.scss so you can see where to start!
* Our main philosophy overall will be SIMPLE AND CLEAN. Let's use color to make things pop, not distract the user. When we are finished with individual divs, we will discuss the layout and styling of the page overall. Probably some refactor there.
* I don't think anyone has experience with Bourbon, so lean on each other!! If you see a good resource out there, be sure to share it.

* Added VARIABLES file from the update-in-progress version of the NSS website. It includes NSS's color palette. Please use these colors for development.
