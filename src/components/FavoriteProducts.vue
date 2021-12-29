<template>
  <div class="favorite-products-block">
    <div class="favorite-products-elements-wrapper">
      <div class="article-heading-block">
        <h2 class="subHeader">Favorite Products</h2>
        <OrderSwitcher @updateOrderValue="updateOrderValue" />
      </div>
      <div v-if="sliderMode" class="favorite-products-slider-block">
        <div
          v-if="sliderMode && currentSlide !== 0 && allSlides > 5"
          class="sliderButton"
          @click="prev"
        >
          <img
            src="../assets/back_btn.svg"
            class="prevButton"
            alt="prev image button"
          />
        </div>
        <div v-else class="sliderPlug"></div>
        <div class="imagesBlock">
          <slick ref="slick" :options="slickOptions">
            <ProductComponent
              v-for="slide in slides"
              :key="slide.id"
              :slide="slide"
              @deleteCardFromFavorite="deleteFromFavorites"
            />
          </slick>
        </div>
        <div
          v-if="
            sliderMode &&
            currentSlide < allSlides - slickOptions.slidesToShow &&
            allSlides > 5
          "
          class="sliderButton"
          @click="next"
        >
          <img
            src="../assets/back_btn.svg"
            class="nextButton"
            alt="next image button"
          />
        </div>
        <div v-else class="sliderPlug"></div>
      </div>
      <div v-else class="favorite-products-moreView-block">
        <div class="more-view-images-block">
          <ProductComponent
            v-for="slide in slides"
            :key="slide.id"
            :slide="slide"
            @deleteCardFromFavorite="deleteFromFavorites"
          />
        </div>
      </div>
      <div class="viewSwitcher" @click="switchView">
        <p v-if="sliderMode">View All</p>
        <p v-else>View less</p>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
import ProductComponent from "./ProductComponent.vue";
import OrderSwitcher from "./OrderSwitcher.vue";

export default {
  name: "FavoriteProducts",
  components: {
    Slick,
    ProductComponent,
    OrderSwitcher,
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
    slides: [
      {
        id: "1",
        name: "Montego",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card.png",
      },
      {
        id: "2",
        name: "Rabbet",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card2.png",
      },
      {
        id: "3",
        name: "Silver Streaks",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card3.png",
      },
      {
        id: "4",
        name: "Tacoma",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card1.png",
      },
      {
        id: "5",
        name: "Knotti pines",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card4.png",
      },
      {
        id: "6",
        name: "Montego",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card2.png",
      },
      {
        id: "7",
        name: "Rabbet",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card3.png",
      },
      {
        id: "8",
        name: "Tacoma",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card.png",
      },
      {
        id: "9",
        name: "Silver Streaks",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card4.png",
      },
      {
        id: "10",
        name: "Montego",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card3.png",
      },
      {
        id: "11",
        name: "Rabbet",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card1.png",
      },
      {
        id: "12",
        name: "Silver Streaks",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card2.png",
      },
      {
        id: "13",
        name: "Knotti pines",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card1.png",
      },
      {
        id: "14",
        name: "Montego",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card.png",
      },
      {
        id: "15",
        name: "Rabbet",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card3.png",
      },
      {
        id: "16",
        name: "Silver Streaks",
        number: "#7589305",
        sizes: "2.5 x 1.5",
        isFavorite: true,
        img: "card2.png",
      },
    ],
    orderValue: "title",
  }),
  mounted() {
    // hardcode values
    this.currentSlide = 0;
    this.allSlides = 16;
  },
  methods: {
    next() {
      this.$refs.slick.next();
      this.currentSlide += 1;
    },
    prev() {
      this.$refs.slick.prev();
      this.currentSlide -= 1;
    },
    reInit(index, allSlides) {
      this.$nextTick(() => {
        //is deleted was from the last 5 slides
        let isLastPart = index + 5 >= allSlides;
        //set initital (first from left) slide for next render
        //if first slide was deleted set initial slide for next render to the same
        if (index === 0 || allSlides <=5) {
          this.slickOptions.initialSlide = 0;
        } else if (isLastPart & (allSlides >=5)) {
          this.slickOptions.initialSlide = allSlides - 5;
        } else {
          this.slickOptions.initialSlide = index - 1;
        }
        this.currentSlide = this.slickOptions.initialSlide;
        this.$refs.slick.reSlick();
      });
    },
    deleteFromFavorites(id) {
      const slides = [...this.slides];
      const deletedIndex = this.slides.findIndex((el) => el.id === id);
      this.slides = slides.filter((el) => el.id !== id);
      this.allSlides -= 1;
      this.reInit(deletedIndex, this.allSlides);
    },
    switchView() {
      this.sliderMode = !this.sliderMode;
    },
    updateOrderValue(value) {
      this.orderValue = value;
    },
  },
};
</script>

<style>
@import "../../node_modules/slick-carousel/slick/slick.css";
.subHeader {
  margin: 0;
  font-family: "Cinzel";
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 54px;
  text-transform: uppercase;
  color: #1d1d1d;
}
.article-heading-block{
  width: 1280px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.favorite-products-elements-wrapper {
  width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.favorite-products-slider-block,
.favorite-products-moreView-block {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sliderButton,
.sliderPlug {
  position: relative;
  top: -50px;
}
.sliderPlug {
  width: 25px;
  height: 25px;
}
.sliderButton:hover {
  cursor: pointer;
}
.sliderPlug {
  min-width: 25px;
  height: 25px;
}
.nextButton {
  transform: rotate(180deg);
}
.imagesBlock,
.more-view-images-block {
  width: 1285px;
}
.more-view-images-block {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}
.slick-slider {
  display: flex;
}
.slick-slide {
  width: 232px;
  margin: 0 15px;
}
.slick-prev {
  width: 25px;
  height: 25px;
  background-image: url("../assets/back_btn.svg");
  z-index: 1000;
}
.slick-arrow {
  width: 25px;
}
.slick-next {
  width: 25px;
  height: 25px;
  left: 50px;
  background-image: url("../assets/back_btn.svg");
  transform: rotate(180deg);
  z-index: 1000;
}
.viewSwitcher p {
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #395080;
}
.viewSwitcher:hover p {
  cursor: pointer;
}
</style>
