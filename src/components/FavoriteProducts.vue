<template>
  <div class="favorite-products-block">
    <div v-if="sliderMode" class="sliderButton" @click="prev">
      <img src="../assets/back_btn.svg" class="prevButton" alt="prev image button">
    </div>
    <div class="imagesBlock">
      <Slick ref="slick" :options="slickOptions">
        <ProductComponent v-for="slide in slides" :key="slide.id" :slide="slide"/>
      </Slick>
    </div>
    <div v-if="sliderMode" class="sliderButton" @click="next">
      <img src="../assets/back_btn.svg" class="nextButton" alt="next image button">
    </div>
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
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
      },
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
  mounted() {},
  methods: {
    next(){
      this.$refs.slick.next();
    },
    prev(){
      this.$refs.slick.prev();
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
}
.sliderButton{
  width: 25px;
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