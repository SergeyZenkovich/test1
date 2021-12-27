<template>
  <div class="favorite-product-element">
    <div class="product-inner-block">
      <div class="product-icons-block">
        <div class="product-checkToCart-block">
          <Checkbox checkBoxType="checkmark" v-model="MySelectedValues" />
        </div>
        <div class="product-checkToCart-block">
          <Checkbox checkBoxType="starmark" v-model="MySelectedValues" />
        </div>
      </div>
      {{ slide.id }}
    </div>
  </div>
</template>

<script>
import Checkbox from './Checkbox.vue';
export default {
  name: "ProductComponent",
  components: {
    Checkbox,
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
  mounted() {
  },
  methods: {
  },
};
</script>

<style>
.favorite-product-element {
  height: 250px;
  border: 1px solid #000;
  background-color: aquamarine;
}
.product-inner-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 10px;
}
.product-icons-block{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.product-checkToCart-block {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffa;
  border-radius: 50%;
}

/* .wrapper {
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.wrapper input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
.checkmark {
  box-sizing: border-box;
  background-origin: border-box;
  display: inline-block;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #807873;
  box-sizing: border-box;
  border-radius: 2px;
  background-repeat: no-repeat;
  background-position: center center;
} */
/* .wrapper:hover input ~ .checkmark {
  background-image: url(../assets/checkbox.svg);
  opacity: 0.5;
}
.wrapper input:checked ~ .checkmark {
  background-image: url(../assets/checkbox.svg);
  opacity: 1;
} */
.favoriteIcon{
  width: 25px;
  height: 25px;
}

</style>