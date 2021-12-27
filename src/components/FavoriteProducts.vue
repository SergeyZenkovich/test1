<template>
  <div class="favorite-products-block">
    <div v-if="sliderMode && currentSlide !==0" class="sliderButton" @click="prev">
      <img src="../assets/back_btn.svg" class="prevButton" alt="prev image button">
    </div>
    <div v-else class="sliderPlug"></div>
    <div class="imagesBlock">
      <slick ref="slick" :options="slickOptions">
        <ProductComponent v-for="slide in slides" :key="slide.id" :slide="slide"/>
      </slick>
    </div>
    <div v-if="sliderMode && currentSlide < allSlides - slickOptions.slidesToShow" class="sliderButton" @click="next">
      <img src="../assets/back_btn.svg" class="nextButton" alt="next image button">
    </div>
    <div v-else class="sliderPlug"></div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import ProductComponent from './ProductComponent.vue';

export default {
  name: "FavoriteProducts",
  components: {
    Slick,
    ProductComponent
  },
  data: () => ({
      sliderMode: true,
      slickOptions: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        accessibility: true,
      },
      currentSlide: 0,
      allSlides: 0,
      slides:[
      { id: "1", name: "A->Z" },
      { id: "2", name: "Z->A" },
      { id: "3", name: "lowest->highest" },
      { id: "4", name: "highest->lowest" },
      { id: "5", name: "A->Z" },
      { id: "6", name: "Z->A" },
      { id: "7", name: "lowest->highest" },
      { id: "8", name: "highest->lowest" },
      ]
  }),
  mounted() {
    // hardcode values
    this.currentSlide = 0;
    this.allSlides = 8
  },
  methods: {
    next(){
      this.$refs.slick.next();
      this.currentSlide +=1;
    },
    prev(){
      this.$refs.slick.prev();
      this.currentSlide -=1;
    },
    reInit(){
      this.$nextTick(()=> {
        this.$refs.slick.reSlick();
      })
    }
  },
};
</script>

<style>
@import '../../node_modules/slick-carousel/slick/slick.css';
.favorite-products-block{
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sliderButton{
  width: 25px;
  height: 25px;
}
.sliderButton:hover{
  cursor: pointer;
}
.sliderPlug{
  min-width: 25px;
  height: 25px;
}
.nextButton{
  transform: rotate(180deg);
}
.imagesBlock{
  width:100%;
}
.slick-slider{
  display: flex;
}
.slick-slide {
  width: 20%;
}
.slick-prev{
  width: 25px;
  height: 25px;
  background-image: url('../assets/back_btn.svg');
  z-index: 1000;
}
.slick-arrow{
  width: 25px;
}
.slick-next{
  width: 25px;
  height: 25px;
  left: 50px;
  background-image: url('../assets/back_btn.svg');
  transform: rotate(180deg);
  z-index: 1000;
}
</style>