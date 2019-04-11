<template>
  <div :class="[{ flexStart: step === 1 }, 'wrapper']">
    <div class="about-me" v-if="author">
      <p @click="handleAbout">About it</p>
      <transition name="slide-fade">
        <div class="info-about-me" v-if="aboutMe">My first Vue app
          <br>Enjoy universe travel
          <br>View photos from nasa API
          <br>
        </div>
      </transition>
    </div>
    <transition name="slide">
      <a href="/">
        <img src="./assets/logo.png" class="logo" v-if="step === 1">
      </a>
    </transition>
    <transition name="fade">
      <HeroImage v-if="step === 0"/>
    </transition>
    <MainSign v-if="step === 0"/>
    <SearchInput v-model="searchValue" :dark="step === 1"/>
    <div class="flex-container">
      <button class="search-button" @click="handleButton">Search</button>
      <a href="/" class="search-button" v-if="step === 1">Back</a>
    </div>

    <div class="results" v-if="results && !loading && step === 1">
      <Item
        v-for="item in results"
        :item="item"
        :key="item.data[0].nasa_id"
        @click.native="handleModalOpen(item)"
      />
    </div>
    <div class="lds-roller" v-if="step === 1 && loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false"/>
  </div>
</template>
<script>
import axios from "axios";
import debounce from "lodash.debounce";
import MainSign from "@/components/MainSign.vue";
import SearchInput from "@/components/SearchInput.vue";
import HeroImage from "@/components/HeroImage.vue";
import Item from "@/components/Item.vue";
import Modal from "@/components/Modal.vue";

const api = "https://images-api.nasa.gov/search";

export default {
  name: "App",
  components: {
    Modal,
    HeroImage,
    Item,
    MainSign,
    SearchInput
  },
  data() {
    return {
      modalOpen: false,
      modalItem: null,
      loading: false,
      step: 0,
      aboutMe: false,
      author: true,
      searchValue: "",
      results: []
    };
  },
  methods: {
    handleModalOpen(item) {
      this.modalOpen = true;
      this.modalItem = item;
    },
    handleAbout() {
      this.aboutMe = !this.aboutMe;
    },
    handleButton() {
      if (this.searchValue) {
        this.loading = true;
        axios
          .get(`${api}?q=${this.searchValue}&media_type=image`)
          .then(response => {
            this.results = response.data.collection.items;
            this.loading = false;
            this.step = 1;
            this.author = false;
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        alert("Type some value on input to search");
      }
    }
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: margin-top 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  margin-top: -50px;
}

.wrapper {
  margin: 0;
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.flexStart {
    justify-content: flex-start;
  }
}
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-button {
  padding: 10px;
  margin: 25px 10px 0 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  background: #555;
  color: white;
  border: 0;
  letter-spacing: 0.8px;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: orange;
  }
}
.lds-roller {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
  margin-top: 100px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #000;
  margin: -3px 0 0 -3px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 50px;
  left: 50px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 54px;
  left: 45px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 57px;
  left: 39px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 58px;
  left: 32px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 57px;
  left: 25px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 54px;
  left: 19px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 50px;
  left: 14px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 45px;
  left: 10px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.logo {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.results {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    width: 90%;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.about-me {
  p {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #fff;
    z-index: 2;
    font-size: 15px;
    transition: 0.3s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: orange;
    }
  }
}
.info-about-me {
  color: white;
  position: absolute;
  top: 60px;
  right: 20px;
  text-align: right;
  line-height: 1.5em;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
