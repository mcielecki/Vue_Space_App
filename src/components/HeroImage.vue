<template>
  <div class="heroImage"/>
</template>
<script>
export default {
  name: "HeroImage"
};
</script>
<style lang="scss" scoped>
.heroImage {
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>
