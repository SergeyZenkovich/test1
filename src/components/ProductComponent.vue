<template>
  <div class="favorite-product-element">
    <div class="product-inner-block">
      <div class="product-checkboxes-block">
        <div class="product-checkToCart-block">
          <input type="checkbox" class="cart-box">
          <label class="label-for-box"></label>
        </div>
      </div>
      {{slide.id}}
      </div>
  </div>
</template>

<script>

export default {
  name: "ProductComponent",
  components: {
    
  },
  data: () => ({
      sliderMode: true,
      slickOptions: {
        slidesToShow: 4,
      },
  }),
  props: {
      slide: {
          type: Object,
          required: true,
      },
  },
  mounted() {},
  methods: {
    f(){
      alert('x');
    },
  },
};
</script>

<style>
.favorite-product-element{
  height: 200px;
  border: 1px solid #000;
  background-color: aquamarine;
}
.product-inner-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.product-checkToCart-block{
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffa;
  border-radius: 50%;
}
.cart-box {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.label-for-box{
  display: flex;
  align-items: center;
  user-select: none;
  text-transform: capitalize;
}
.label-for-box::before{
  box-sizing: border-box;
  background-origin: border-box;
  content: "";
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
}
.product-checkToCart-block:hover:not(:checked):not(:indeterminate) + .label-for-box:before {
    background-image: url(../assets/checkbox.svg);
    opacity: 0.5;
}
</style>