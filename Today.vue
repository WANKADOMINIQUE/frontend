<template>
  <div class="splide">
    <div class="flex ml-1">
      <div class="roundConners"></div>
      <div class="today"><h5>Today's</h5></div>
    </div>
    <div class="flex ml-1">
      <div class="pt-1"><h4 class="flash">Flash Sales</h4></div>
      <div class="middleitem">
        <button class="timing">
          <h6 class="upspan pr-6">Days</h6>
          <p class="downspan">03 <span class="dotcolor">:</span></p>
        </button>
        <button class="timing">
          <h6 class="upspan pr-6">Hours</h6>
          <p class="downspan">23 <span class="dotcolor">:</span></p>
        </button>
        <button class="timing">
          <h6 class="upspan pr-3">Minutes</h6>
          <p class="downspan">19 <span class="dotcolor">:</span></p>
        </button>
        <button class="timing">
          <h6 class="upspan">Seconds</h6>
          <p class="downspan pr-3">56</p>
        </button>
      </div>
      <div class="leftitem">
        <button @click="prevSlide" class="mastercolor">←</button>
        <button @click="nextSlide" class="mastercolor">→</button>
      </div>  
    </div>
    <!-- end of top -->
    <div class="splide__track">
      <div class="splide__list">
        <div 
          class="splide__slide" 
          v-for="(item, index) in sliderItems" 
          :key="index" 
          @mouseover="hoverIndex = index" 
          @mouseleave="hoverIndex = null"
        >
          <div class="splide_pic">
            <div class="innersplide_pic">
              <img :src="item.image" :alt="item.title" />
            </div>
              <span v-if="item.isNew" class="absolute top-2 right-2  text-black text-xs px-2 py-1" 
                 style="padding-left: 30px !important; justify-items: end; margin-right: -2px;
                 margin-top: 10px;">
                  <img src="../assets/heart.png" alt="">
                <img src="../assets/Fill Eye.png" alt="" class="mt-1"></span> 
                <span class="mt-2 absolute top-2 left-2  text-white text-xs px-2 py-1 rounded">-
                  {{ item.discount }}%</span>
                  <!--  
                 <span class="spabg absolute top-2 left-2  text-white text-xs px-2 py-1 rounded">-
                  {{ product.discount }}%</span>
                
                  -->
            <button 
              v-if="hoverIndex === index" 
              class="buy-button"
            >
              Add To Cart 
            </button>
          </div>
          <div class="innersplide_txt">
            <h6>{{ item.name }}</h6>
            <p class="text-red-600">{{ item.price }} <span class="mprice">{{ item.mainPrice }}</span></p>
            <p class="flex adjustments">
              <span class="text-yellow-500" v-for="star in item.rating" :key="star">★</span>
              <span class="text-gray-400" v-for="star in 5 - item.rating" :key="star">★</span>
              <span > {{ item.rateMe }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-white btn1"><button class="btn2">View All Products</button></div>
      <div class="mt-20 not-first:border-t-2 border-gray-300"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Splide from '@splidejs/splide';


export default {
  name: 'PerMoveSlider',
  setup() {
    const hoverIndex = ref(null);
    const sliderItems = ref([
      { image: 'gaming-controller.png', name: 'HAVIT HV-G92 Gamepad', price: '$120', mainPrice: '$160', discount: 40, rating: 5, isNew: true, rateMe:'(88)' },
      { image: 'keyboard.png', name: 'AK-900 Wired Keyboard', price: '$960', mainPrice: '$1160', discount: 35, rating: 4, isNew: true, rateMe:'(75)' },
      { image: 'smart-tv.png', name: 'IPS LCD Gaming Monitor', price: '$370', mainPrice: '$600', discount: 30, rating: 5, isNew: true, rateMe:'(99)' },
      { image: 'chair.png', name: 'S-Series Chair Comforter', price: '$375', mainPrice: '$400', discount: 25, rating: 4, isNew: true, rateMe:'(96)' },
      { image: 'chair.png', name: 'S-Series Chair Comforter', price: '$375', mainPrice: '$400', discount: 25, rating: 4, isNew: true, rateMe:'(96)'},
    ]);
    let splide = null;

    onMounted(() => {
      splide = new Splide('.splide', {
        type: 'loop',
        perPage: 5,
        perMove: 1,
      }).mount();
    });

    return {
      hoverIndex,
      sliderItems,
      nextSlide: () => splide.go('>'),
      prevSlide: () => splide.go('<'),
    };
  },
};
</script>

<style scoped>
.rounded{
 background-color:#DB4444; 
}
.btn2{
    background-color:#DB4444;
     width: 234px;
    height: 56px;
    margin-left: 450px;
   
  }
  .btn1{
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
     justify-content: center;
    align-content: center;
   
    padding: 16px 48px;
  }
.splide__slide {
  text-align: start;
  width: 270px;
  height: 350px;
  gap: 16px;
  align-self: start;
}

.splide {
  width: 1308px;
  margin: 60px 0;
}

.splide__track {
  width: 1308px;
  margin-left: -10px;
}

.splide__list {
  width: 1308px;
  height: 350px;
  gap: 30px;
}

.splide_pic {
  position: relative; /* For absolute positioning of the button */
  width: 270px;
  height: 250px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-left: -15px;
  overflow: hidden;
}

.innersplide_pic {
  width: 190px;
  height: 180px;
  padding: 25px 10px 10px 10px;
  justify-self: center;
}

.innersplide_txt {
  width: 270px;
  margin-left: -15px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
}

.buy-button {
  position: absolute;
  bottom: 10px; /* Adjust position as needed */
  left: 10px; /* Align to the left */
  width: calc(114% - 20px); /* Full width with padding */
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;
  opacity: 0; /* Initially hidden */
  margin-left: -13px;
  margin-bottom: -8px;
}

.splide__slide:hover .buy-button {
  opacity: 1; /* Show button on hover */
}

 .roundConners{
    border-radius: 4px;
    margin-right: 10px;
    background-color: #DB4444;
    height: 40px;
    width: 20px;
  }
  .discount{
    color:#DB4444;
  }
   .today{
    color:#DB4444;
    font-family: 'popins' sans-serif;
    font-weight:600;
    font-size: 16px;
    padding-top: 10px;
  }
  .flash{
    font-family:'Inter', sans-serif;
    font-weight: 600;
    font-size: 36px;
    justify-self: start;
    width: 211px;
    height: 48px;
    padding-right: 12px;
    padding-top: 27px;
    
    
  }
  .timing{
    background-color: white;
  }
  .middleitem{
    justify-self: center;
    justify-self: center;
  }
  .leftitem{
    justify-items: right;
    justify-self: right;
    padding-left: 495px;
    padding-top: 37px;

  }
  .upspan{
    font-size: 12px;
    font-weight: 500;
    justify-content: start;
  }
  .downspan{
font-size: 32px;
font-family: 'Inter', sans-serif;
font-weight: 700;
justify-content: start;
  }
  .mastercolor{
    background-color: rgb(202, 196, 196);
    margin: 5px;
    border-radius: 75px;
    padding: 8px 12px;
  }
   .mprice{
    color: gray !important;
    text-decoration: line-through;
    padding-left: 10px;
  }

</style>