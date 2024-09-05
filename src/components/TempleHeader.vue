<template>
  <div>
    <div>
      <audio ref="audio" loop autoplay muted>
        <source src="../assets/ugram.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>


    <div class="nav-header">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <a class="title-home navbar-brand" href="#">Lakshmi Narashima Temple</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/home">Home</a>
              </li>
         
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">Dropdown Link</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/about">About Us</a></li>
                <li><a class="dropdown-item" href="/story">About Lakshmi Narasimha Swamy</a></li>
              </ul>
            </li> -->
            <router-link to="/services">
              <li class="nav-item">
                <a class="nav-link">Services</a>
              </li>
            </router-link>
            <router-link to="/events">
              <li class="nav-item">
                <a class="nav-link">Upcoming Events</a>
              </li>
            </router-link>
            <router-link to="#">
              <li class="nav-item">
                <a class="nav-link">Communication</a>
              </li>
            </router-link>
            <router-link to="/donations">
              <li class="nav-item">
                <a class="nav-link">Donations</a>
              </li>
            </router-link>
            <router-link to="/contact">
              <li class="nav-item">
                <a class="nav-link">contact</a>
              </li>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'


export default {
  name: "TempleHeader",
  beforeDestroy() {
    // Pause the sound when the component is destroyed to prevent audio continuation
    this.$refs.audio.pause();
  },
  // methods: {
  //   toggleSound() {
  //     const audio = this.$refs.audio;
  //     // audio.paused ? audio.play() : audio.play();
  //   },
  // },
  // mounted() {
  //   // Auto-play the sound when the component is mounted
  //   this.$refs.audio.autoplay();
  // },
  // beforeDestroy() {
  //   // Pause the sound when the component is destroyed to prevent audio continuation
  //   this.$refs.audio.pause();
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-home {
  margin-left: 20px;
}

a {
  text-decoration: none !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 10%;
  left: 10%;
  z-index: 1030;
  border-radius: 10px;
  background-color: black;
}
</style>
