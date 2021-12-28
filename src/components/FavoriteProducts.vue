<template>
  <div class="favorite-products-block">
    <div v-if="sliderMode && currentSlide !==0 && allSlides > 5 " class="sliderButton" @click="prev">
      <img src="../assets/back_btn.svg" class="prevButton" alt="prev image button">
    </div>
    <div v-else class="sliderPlug"></div>
    <div class="imagesBlock">
      <slick ref="slick" :options="slickOptions">
        <ProductComponent v-for="slide in slides" :key="slide.id" :slide="slide" @deleteCardFromFavorite="deleteFromFavorites"/>
      </slick>
    </div>
    <div v-if="sliderMode && currentSlide < allSlides - slickOptions.slidesToShow && allSlides > 5 " class="sliderButton" @click="next">
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
        variableWidth: true,
      },
      currentSlide: 0,
      allSlides: 0,
      slides:[
      { id: "1", name: "Montego", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card.png' },
      { id: "2", name: "Rabbet", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card2.png'},
      { id: "3", name: "Silver Streaks", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card3.png'},
      { id: "4", name: "Tacoma", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card1.png'},
      { id: "5", name: "Knotti pines", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card4.png'},
      { id: "6", name: "Montego", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card2.png'},
      { id: "7", name: "Rabbet", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true,img: 'card3.png'},
      { id: "8", name: "Tacoma", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card.png'},
      { id: "9", name: "Silver Streaks", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card4.png'},
      { id: "10", name: "Montego", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card3.png'},
      { id: "11", name: "Rabbet", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card1.png'},
      { id: "12", name: "Silver Streaks", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card2.png'},
      { id: "13", name: "Knotti pines", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card1.png'},
      { id: "14", name: "Montego", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card.png'},
      { id: "15", name: "Rabbet", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true,img: 'card3.png'},
      { id: "16", name: "Silver Streaks", number: "#7589305", sizes: "2.5 x 1.5", isFavorite: true, img: 'card2.png'},
      ]
  }),
  mounted() {
    // hardcode values
    this.currentSlide = 0;
    this.allSlides = 16
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
    reInit(index, allSlides){
      this.$nextTick(()=> {
        //is deleted was from the last 5 slides 
        let isLastPart = index + 5 >= allSlides;
        //set initital (first from left) slide for next render
        //if first slide was deleted set initial slide for next render to the same
        if(index === 0) {
          this.slickOptions.initialSlide = 0;
        } else if(isLastPart & allSlides > 5) {
          this.slickOptions.initialSlide = allSlides - 5
        } else {
          this.slickOptions.initialSlide = index - 1
        }
        this.currentSlide = this.slickOptions.initialSlide;
        this.$refs.slick.reSlick();
      })
    },
    // removeSlide(id){
    //   const idNumber = Number(id);
    //   console.log(id);
    //   this.$refs.slick.remove(idNumber-1, false);
    // },
    deleteFromFavorites(id){
      const slides = [...this.slides];
      const deletedIndex = this.slides.findIndex(el=> el.id === id);
      this.slides = slides.filter(el=>el.id !== id);
      this.allSlides -=1;
      this.reInit(deletedIndex, this.allSlides);
    },
  },
};
</script>

<style>
@import '../../node_modules/slick-carousel/slick/slick.css';
.favorite-products-block{
  width: 1320px;
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
  width: 1285px;
}
.slick-slider{
  display: flex;
}
.slick-slide {
  width: 232px;
  margin: 0 15px;
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