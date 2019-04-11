<template>
  <div class="mainWrapper">
    <h1 class="main">EXPLORE UNIVERSE</h1>
    <p class="submain">Find pictures of stars, planets and their moons.</p>
    <p class="submain">Type their names below to start.</p>
  </div>
</template>
<script>
export default {
  name: "Main"
};
</script>
<style lang="scss" scoped>
.mainWrapper {
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.main {
  font-size: 50px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 65px;
  }

  @media (min-width: 1024px) {
    font-size: 80px;
  }
}
.submain {
  margin: 20px 0 0 0;
  font-size: 13px;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 17px;
    width: 500px;
    line-height: 1;
    letter-spacing: 1px;
  }
}
</style>
