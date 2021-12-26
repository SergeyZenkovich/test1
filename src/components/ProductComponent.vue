<template>
  <div class="favorite-product-element">
    <div class="product-inner-block">
      <div class="product-icons-block">
        <div class="product-checkToCart-block">
          <label class="wrapper flex items-center">
            {{ label }}
            <input
              class="checkbox"
              type="checkbox"
              :checked="isChecked"
              :value="value"
              @change="updateInput"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="product-checkToCart-block">
          <img class="favoriteIcon" src="../assets/favorite_icon.svg" alt="star icon">
        </div>
      </div>
      {{ slide.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  components: {},
  model: {
    prop: "modelValue",
    event: "change",
  },
  data: () => ({
    sliderMode: true,
    slickOptions: {
      slidesToShow: 4,
    },
    MySelectedValues: [],
  }),
  props: {
    slide: {
      type: Object,
      required: true,
    },
    value: { type: String },
    modelValue: { default: "" },
    label: { type: String, required: true },
    trueValue: { default: true },
    falseValue: { default: false },
  },
  mounted() {},
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }
        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.trueValue;
    },
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
.cart-box {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
/* }
.label-for-box {
  display: flex;
  align-items: center;
  user-select: none;
  text-transform: capitalize;
}
.label-for-box::before {
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
.product-checkToCart-block:hover {
  cursor: pointer;
}
.product-checkToCart-block:hover .label-for-box::before {
  background-image: url(../assets/checkbox.svg);
  opacity: 0.5;
} */

.wrapper {
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
}
.wrapper:hover input ~ .checkmark {
  background-image: url(../assets/checkbox.svg);
  opacity: 0.5;
}
.wrapper input:checked ~ .checkmark {
  background-image: url(../assets/checkbox.svg);
  opacity: 1;
}
.favoriteIcon{
  width: 25px;
  height: 25px;
}

</style>