<template>
  <div>
    <TempleHeader class="header-temple"></TempleHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import TempleHeader from "@/components/TempleHeader.vue";

export default {
  components: {
    TempleHeader
  }
};
</script>

<style>
#app {
  font-family: "Lora", serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  line-height: 31px;
  text-decoration: none;
  text-transform: none;
}

/* .header-temple{
  margin-bottom: 5%;
} */
</style>
