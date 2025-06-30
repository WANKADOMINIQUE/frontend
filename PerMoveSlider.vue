<template>
  <div class="splide">
    <div><button @click="nextSlide">n</button></div>
    <div class="splide__track">
      <div class="splide__list">
        <div class="splide__slide" v-for="(item, index) in sliderItems" :key="index">
          <div class="splide_pic">
            <div class="innersplide_pic"><img :src="item.image" :alt="item.title" /></div>
        </div>
          <div class="innersplide_txt"><h6>{{ item.name }}</h6>
          <p>{{ item.price }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Splide from '@splidejs/splide';

export default {
  name: 'PerMoveSlider',
  data() {
    return {
      sliderItems: [
        { image: 'gaming-controller.png',
      name: 'HAVIT HV-G92 Gamepad',
      price: '$120',
      mainPrice:  '$600',
      discount: 40,
      rating: '(88)',
      isNew: true, },
        { image: 'keyboard.png',
      name: 'AK-900 Wired Keyboard',
      price: '$960',
      mainPrice:  '$600',
      discount: 35,
      rating: '(75)',
      isNew: true, },
        { image: 'smart-tv.png',
      name: 'IPS LCD Gaming Monitor',
      price: '$370',
      mainPrice:  '$600',
      discount: 30,
      rating: '(99)',
      isNew: true, },
        { image: 'chair.png',
      name: 'S-Series Chair Comforter',
      price: '$375',
      mainPrice:  '$600',
      discount: 25,
      rating: '(88)',
      isNew: true,},
        { image: 'chair.png',
      name: 'S-Series Chair Comforter',
      price: '$375',
      mainPrice:  '$600',
      discount: 25,
      rating: '(88)',
      isNew: true,}
        // Add more items as needed
      ],
       splide: null,
    };
  },
  mounted() {
    this.splide = new Splide('.splide', {
      type: 'loop',
      perPage: 5, // Show 1 slide at a time
      perMove: 1, // Move 1 slide at a time
    }).mount();
  },
    methods: {
    nextSlide() {
      this.splide.go('>');
    },
    prevSlide() {
      this.splide.go('<');
    },
  },
};
</script>

<style scoped>
.splide__slide {
  text-align: start;
  width: 270px;
  height: 350px;
  gap: 16px;
  align-self: start;
  align-items: start;

  

}
/* .splide__slide img {
  width: 100%; 
  height: auto;
} */
.splide{
width: 1308px
}
.splide__list{
    width: 1308px;
    height: 350px;
    gap: 30px;
}
.splide_pic{
    width: 270px;
    height: 250px;
    background-color: #f5f5f5;
    margin-left: -10px;
    border-radius: 4px;
   
   
}
.innersplide_pic{
    width: 190px;
    height: 180px;
    left: 40px;
    top: 15px;
    align-self: center;
    justify-self: center;
    
    padding: 25px 10px 10px 10px;
    

}
.innersplide_txt{
    width: 270px;
     margin-left: -10px;
     font-size: 16px;
     font-weight: 500;
     letter-spacing: 0%;
}
</style>