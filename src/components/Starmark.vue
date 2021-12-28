<template>
  <label class="wrapper flex items-center" @click="deleteFromFavorite">
    <input class="checkbox" type="checkbox" :checked="isFavorite" />
    <span class="starmark"></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'modelStarValue',
    event: 'changeFavoriteValue'
  },
  props: {
    isFavorite: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    // updateInput(event) {
    //   let isChecked = event.target.checked
    //   if (this.modelValue instanceof Array) {
    //     let newValue = [...this.modelValue]
    //     if (isChecked) {
    //       newValue.push(this.value)
    //     } else {
    //       newValue.splice(newValue.indexOf(this.value), 1)
    //     }
    //     this.$emit('change', newValue)
    //   } else {
    //     this.$emit('change', isChecked ? this.trueValue : this.falseValue)
    //   }
    // }
    deleteFromFavorite() {
      this.$emit('deleteFromFavorite');
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
.starmark {
  box-sizing: border-box;
  display: inline-block;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  flex-grow: 0;
  border: none;
  background-repeat: no-repeat;
  background-position: center center;
  background-origin: border-box;
  background-image: url(../assets/favorite_icon_unselected.svg);
}
.wrapper:hover input ~ .starmark {
  background-image: url(../assets/favorite_icon_hovered.svg);
}
.wrapper input:checked ~ .starmark {
  background-image: url(../assets/favorite_icon.svg);
  opacity: 1;
}
</style>