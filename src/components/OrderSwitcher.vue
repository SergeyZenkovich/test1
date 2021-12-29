<template>
    <div class="order-by-wrapper">
        <span class="order-by-label">Sort By</span>
        <div class="dropp orderby" v-on-clickaway="clickaway">
    <div class="dropp-header js-dropp-action" @click="toggleDropdownView">
      <span class="dropp-header__title js-value dropp-header__btn"
        ><span>{{dropdownHeaderTitle}}</span></span
      >
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L6 6L11 1"
          stroke="#939599"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </div>
    <div class="dropp-body" :class="{dropdownOpen: isOpen}" @click="updateOrderValue">
      <label for="orderby-title"
        >Alphabetical: A-Z
        <input
          type="radio"
          id="orderby-title"
          name="orderby"
          data-name="Alphabetical: A-Z"
          value="title"
      /></label>
      <label for="orderby-title-desc"
        >Alphabetical: Z-A
        <input
          type="radio"
          id="orderby-title-desc"
          name="orderby"
          data-name="Alphabetical: Z-A"
          value="title-desc"
      /></label>
      <label for="orderby-itemnum"
        >Item #: low-high
        <input
          type="radio"
          id="orderby-itemnum"
          name="orderby"
          data-name="Item #: low-high"
          value="itemnum"
      /></label>
      <label for="orderby-itemnum-desc"
        >Item #: high-low
        <input
          type="radio"
          id="orderby-itemnum-desc"
          name="orderby"
          data-name="Item #: high-low"
          value="itemnum-desc"
      /></label>
      <label for="orderby-price"
        >Price: low-high
        <input
          type="radio"
          id="orderby-price"
          name="orderby"
          data-name="Price: low-high"
          value="price"
      /></label>
      <label for="orderby-price-desc"
        >Price: high-low
        <input
          type="radio"
          id="orderby-price-desc"
          name="orderby"
          data-name="Price: high-low"
          value="price-desc"
      /></label>
    </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
  name: "OrderDropdown",
  mixins: [ clickaway ],
  
  components: {},
  data: () => ({
    isOpen: false,
    dropdownHeaderTitle: "Alphabetical: A-Z",
  }),
  mounted() {
    
  },
  methods: {
    toggleDropdownView() {
    if(!this.isOpen) this.isOpen = true;
    },
    clickaway() {
    if(this.isOpen) this.isOpen = false;
    },
    updateOrderValue(event) {
        if(this.isOpen) this.isOpen = false;
        this.dropdownHeaderTitle = event.target.dataset.name;
        this.$emit('updateOrderValue', event.target.value);
    }
  },
};
</script>

<style>
.order-by-wrapper{
    display: flex;
    align-items: center;
}
.order-by-wrapper .order-by-label {
    font-size: 18px;
    line-height: 100%;
    color: #807873;
}
.order-by-label{
    margin-right: 15px;
}
.dropp {
    position: relative;
    max-width: 25em;
    font-size: 18px;
    line-height: 27px;
}
.orderby{
  position: relative;
  width: 232px;
  font-size: 18px;
  line-height: 27px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.01em;
  color: #1d1d1d;
}
.dropp-header{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 328px;
    max-width: 100%;
    background: #FFFFFF;
    border: 1px solid #807873;
    border-radius: 2px;
    height: 48px;
}
.dropp-header__title{
    margin: 0 10px;
}
.dropp-body{
    z-index: 20;
    position: absolute;
    margin-top: 4px;
    overflow: hidden;
    width: 100%;
    max-height: 0;
    background: #FFFFFF;
    box-shadow: -10px -10px 10px rgb(205 205 205 / 25%), 10px 10px 10px rgb(205 205 205 / 25%);
    border-radius: 2px;
    color: #1D1D1D;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.dropdownOpen{
    max-height: 15em;
    overflow-y: auto
}
.dropp-body label {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 27px;
    min-height: 59px;
    padding-left: 24px;
    color: #1D1D1D;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 0;
}
.dropp-body label:hover{
    background: #E1DFDC;
}
.dropp-body input[type="radio"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
</style>
