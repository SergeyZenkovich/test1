<template>
  <div class="projects-block">
    <div class="favorite-products-elements-wrapper">
      <div class="article-heading-block">
        <h2 class="subHeader">Projects</h2>
        <OrderSwitcher @updateOrderValue="updateOrderValue" />
      </div>
    </div>
  </div>
</template>

<script>
import OrderSwitcher from "./OrderSwitcher.vue";

export default {
  name: "ProjectsBlock",
  components: {
    OrderSwitcher,
  },
  data: () => ({
    orderValue: "title",
  }),
  mounted() {
    // hardcode values
    this.currentSlide = 0;
    this.allSlides = 16;
  },
  methods: {
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
.projects-block{
  margin-top: 20px;
}
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
</style>
