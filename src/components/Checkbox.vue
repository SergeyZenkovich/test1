<template>
  <label class="wrapper flex items-center">
    {{label}}
    <input class="checkbox" type="checkbox" :checked="isChecked" :value="value" @change="updateInput"/>
    <span :class="checkBoxType"></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    "value": { type: String },
    "modelValue": { default: "" },
    "trueValue": { default: true },
    "falseValue": { default: false },
    isFavorite: {
      type: Boolean,
      required: true,
    },
    checkBoxType: String,
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      return this.modelValue === this.trueValue
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<style>
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
.checkmark, .starmark {
  box-sizing: border-box;
  background-origin: border-box;
  display: inline-block;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #807873;
  border-radius: 2px;
  background-repeat: no-repeat;
  background-position: center center;
}
.starmark{
  width: 25px;
  height: 25px;
  border: 1px solid #807873;
  background-image: url(../assets/favorite_icon_unselected.svg);
}
.wrapper:hover input ~ .checkmark {
  background-image: url(../assets/checkbox.svg);
  opacity: 0.5;
}
.wrapper input:checked ~ .checkmark {
  background-image: url(../assets/checkbox.svg);
  opacity: 1;
}
.wrapper:hover input ~ .starmark {
  background-image: url(../assets/favorite_icon_hovered.svg);
}
.wrapper input:checked ~ .starmark {
  background-image: url(../assets/favorite_icon.svg);
  opacity: 1;
}
</style>