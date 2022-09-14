//==================================================
// MOBILE HAMBURGER MENU

const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerMenuDropdown = document.querySelector(".dropdown");

hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("is-active");
  hamburgerMenuDropdown.classList.toggle("is-active");
});
//==================================================

//==================================================
//ANNOUNCEMENTS SLIDER

//Set starting slide
let announcementsSlideIndex = 1;
showAnnouncementSlides(announcementsSlideIndex);

// Next/previous slide navigation (buttons)
function changeAnnouncementSlide(announcementsStartingSlide) {
  showAnnouncementSlides(
    (announcementsSlideIndex += announcementsStartingSlide)
  );
}

// Thumbnail image controls
function currentAnnouncementSlide(announcementsStartingSlide) {
  showAnnouncementSlides(
    (announcementsSlideIndex = announcementsStartingSlide)
  );
}

function showAnnouncementSlides(announcementsStartingSlide) {
  let i;
  let slides = document.getElementsByClassName("announcements-slides");
  let navigationDots = document.getElementsByClassName(
    "announcements-dot-navigation"
  );
  //Defaults to first slide if the announcementsSlideIndex is higher than the amount of slides
  if (announcementsStartingSlide > slides.length) {
    announcementsSlideIndex = 1;
  }
  //Defaults to last slide if the announcementsSlideIndex is lower than the amount of slides
  if (announcementsStartingSlide < 1) {
    announcementsSlideIndex = slides.length;
  }
  //Hides all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Removes active class from the dot navigation
  for (i = 0; i < navigationDots.length; i++) {
    navigationDots[i].className = navigationDots[i].className.replace(
      " announcements-active",
      ""
    );
  }
  //Shows current slide
  slides[announcementsSlideIndex - 1].style.display = "block";
  //Activates corresponding dot navigation based on current slide
  navigationDots[announcementsSlideIndex - 1].className +=
    " announcements-active";
}
//==================================================

//==================================================
//NEWS SLIDER

//Set starting slide
let newsSlideIndex = 1;
showNewsSlides(newsSlideIndex);

// Next/previous slide navigation (buttons)
function changeNewsSlide(newsStartingSlide) {
  showNewsSlides((newsSlideIndex += newsStartingSlide));
}

// Thumbnail image controls
function currentNewsSlide(newsStartingSlide) {
  showNewsSlides((newsSlideIndex = newsStartingSlide));
}

function showNewsSlides(newsStartingSlide) {
  let i;
  let slides = document.getElementsByClassName("news-slides");
  let navigationDots = document.getElementsByClassName("news-dot-navigation");
  //Defaults to first slide if the newsSlideIndex is higher than the amount of slides
  if (newsStartingSlide > slides.length) {
    newsSlideIndex = 1;
  }
  //Defaults to last slide if the newsSlideIndex is lower than the amount of slides
  if (newsStartingSlide < 1) {
    newsSlideIndex = slides.length;
  }
  //Hides all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //Removes active class from the dot navigation
  for (i = 0; i < navigationDots.length; i++) {
    navigationDots[i].className = navigationDots[i].className.replace(
      " news-active",
      ""
    );
  }
  //Shows current slide
  slides[newsSlideIndex - 1].style.display = "block";
  //Activates corresponding dot navigation based on current slide
  navigationDots[newsSlideIndex - 1].className += " news-active";
}
//==================================================
