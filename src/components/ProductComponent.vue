<template>
  <div class="favorite-product-element">
    <div class="product-inner-block">
      <div class="product-icons-block">
        <div class="product-checkToCart-block">
          <Checkbox checkBoxType="checkmark" v-model="MySelectedValues" />
        </div>
        <div class="product-checkToCart-block">
          <Starmark
            checkBoxType="starmark"
            v-model="MySelectedValues"
            :isFavorite="slide.isFavorite"
            @deleteFromFavorite="deleteCardFromFavorite"
          />
        </div>
      </div>
      <img
        class="productImage"
        :src="require(`../assets/${slide.img}`)"
        alt="product image"
      />
    </div>
    <div class="product-outer-block">
      <h4 class="productName">{{ slide.name }}</h4>
      <p class="productNumber">{{ slide.number }}</p>
      <p class="productSizes">{{ slide.sizes }}</p>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import Starmark from "./Starmark.vue";
export default {
  name: "ProductComponent",
  components: {
    Checkbox,
    Starmark,
  },
  data: () => ({
    sliderMode: true,
    MySelectedValues: [],
  }),
  props: {
    slide: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
  methods: {
    deleteCardFromFavorite() {
      this.$emit("deleteCardFromFavorite", this.slide.id);
    },
  },
};
</script>

<style>
.favorite-product-element {
  width: 230px;
  height: 365px;
  margin-bottom: 30px;
}
.product-inner-block {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-icons-block {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 100;
}
.product-checkToCart-block {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  background-color: #fffb;
  border-radius: 50%;
}
.productImage {
  width: 232px;
  height: 256px;
}

.favoriteIcon {
  width: 25px;
  height: 25px;
}
.productName {
  margin: 25px 0 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: #1d1d1d;
}
.productNumber, .productSizes{
  margin: 10px;
}
.productNumber {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #1d1d1d;
}
.productSizes {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #807873;
}
</style>
