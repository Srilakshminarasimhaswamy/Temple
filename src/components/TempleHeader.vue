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
        <a class="title-home navbar-brand">Lakshmi Narashima Temple</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link nav-home" href="/home">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                aria-expanded="false">About</a>
              <div class="dropdown-menu">
                <router-link to="/story">
                  <a class="dropdown-item" href="#">Lakshmi Narasimha Swamy Story</a>
                </router-link>
                <router-link to="/about">
                  <a class="dropdown-item">About Temple</a>
                </router-link>

              </div>
            </li>
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
                <a class="nav-link">Contact</a>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-home {
  margin-left: 20px;
}

a {
  text-decoration: none !important;
  :hover {
    background-color: rgba(237, 109, 25, 1);
    border-radius: 5px;
  }
}

.nav-link:hover{
  background-color: rgba(237, 109, 25, 1) !important;
    border-radius: 5px;
}
.nav-link{
  color: white !important;
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

.dropdown-menu {
  background-color: black;
}

.dropdown-item {
  color: white;
}</style>
