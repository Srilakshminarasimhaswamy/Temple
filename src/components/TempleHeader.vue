<template>
  <div>
    <div>
      <audio ref="audio" loop autoplay muted>
        <source src="../assets/Piano.wav" type="audio/mp3">
        Your browser does not support the audio element.
      </audio>
    </div>


    <div class="nav-header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <li class="nav-item">
              <a class="nav-link" href="/about">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/events">Upcoming Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Communication</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/donations">Donations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
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
</style>
