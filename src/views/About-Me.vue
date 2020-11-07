<template>
<div class="about-me">
  <h1>About Me</h1>

  <img class="profile-pic" src="/images/profile-pic.jpg">
  <h3>Hi, I'm Liam!</h3>
  <p>I'm Liam, and I'm a beginning novelist (that's a fancy term for "author
    who hasn't been published yet"). I'm currently working on my first series,
    The Final Four, but you can read more about some of those books elsewhere
    on this website, because you came to this page to learn about me!</p>
  <p>I'm attending college right now at BYU in Provo, Utah. I'm majoring in Mathematics,
    with minors in Computer Science and Creative Writing. I enjoy writing, playing
    Pokemon, and eating too many desserts. I'm married to the lovely
    woman in the photo, Hadley Ashton, and she is pregnant with our first. Little
    Maren Grace Ashton will be here in November!</p>
</div>
</template>

<style scoped>
/*About Me*/
.about-me {
  width: 90%;
  margin: 0 auto;
  margin-top: 1em;
}

.about-me h1 {
  font-family: "Courier Prime", monospace;
}

.profile-pic {
  width: 100%;
  border-radius: 20px;
}

.about-me h3 {
  font-family: "Courier Prime", monospace;
  margin-top: 1em;
}

.about-me p {
  font-family: serif;
}

@media only screen and (min-width: 961px) {
  .profile-pic {
    width: 50%;
    float: left;
    margin-right: 1em;
    margin-bottom: 1em;
  }
}
</style>
