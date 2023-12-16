<template>
  <div>
    <TempleHeader></TempleHeader>
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
}
</style>
