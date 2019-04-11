<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img :src="photo">
      </div>
      <div class="description">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
      </div>
    </div>
    <div class="close" @click="$emit('closeModal')"/>
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      photo: null,
      title: null,
      description: null
    };
  },
  mounted() {
    this.photo = this.item.links[0].href;
    this.title = this.item.data[0].title;
    this.description = this.item.data[0].description.substring(0, 400);
  }
};
</script>
<style lang="scss" scoped>
.outerWrapper {
  background: #f6f6f6;
  max-width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.close {
  position: absolute;
  width: 30px;
  height: 30px;
  padding: 30px;
  right: 0;
  top: 0;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 30px;
    right: 20px;
    content: "";
    width: 20px;
    height: 2px;
    background: black;
    display: block;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

.innerWrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .photo {
    width: 70vw;
    max-height: 50vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .description {
    width: 50vw;
    color: #333;
    text-align: center;
    word-break: break-word;
  }

  .title {
    color: #1e3d4a;
    text-align: center;
    margin: 10px 0 20px 0;
  }
}

@media (min-width: 1024px) {
  .innerWrapper {
    flex-direction: row;
    .photo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50vw;
      max-height: 60vh;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .description {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #333;
    }

    .title {
      color: #1e3d4a;
      margin-bottom: 20px;
    }
  }
}
</style>
