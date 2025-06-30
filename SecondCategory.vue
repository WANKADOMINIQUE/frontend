<template>
    <div class="bg-white py-8">
      <div class="flex">
        <div class=" w-4 roundConners"></div>
        <div ><h2 class= "today">Categories</h2></div>
      </div>
      <!-- the timing section -->
      <div class="flex">
            <h5 class=" flash " >Browse By Category</h5> 
             
        <!-- the extrim right corner arrow button -->
        <div class="leftitem">
                <button class="mastercolor"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>  
 </button>
                <button class="mastercolor"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
 </button>
            </div> 
        </div>
        <div class="flex ">
            <div class="cartx" 
            v-for="(product, index) in products"
            :key="index"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave(index)"
            :style=" { backgroundColor : isHovered[index] ? '#DB4444': 'white',
            color : isHovered[index] ? 'white' : 'black',
            }"
            >
                <img :src="`${product.image}`" alt="" >
                <p>{{ product.name }}</p>
            </div>
            
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
 const products =ref([
  {name : 'Phone', image : 'icon1.png'},
  {name : 'Computer',image : 'icon2.png'},
  {name : 'SmartWatch',image : 'icon3.png'},
  {name : 'Camera',image : 'maincamera.svg'},
  {name : 'Headphone',image : 'icon5.png'},
  {name : 'Gaming',image : 'icon6.png'},
 ]);

  const isHovered = ref(Array(products.value.length).fill(false));

  const handleMouseEnter = (index)=>{
    isHovered.value[index]= true;
  };

  const handleMouseLeave = (index)=>{
    isHovered.value[index] = false

  };



 
  </script>
  
  <style scoped>
  

.cart:hover,
.cartx:hover img{
color: rgb(244, 246, 247);
 transform: scale(1.05); 
 filter: invert(1);
}
  .cartx{
    border: 1px solid black;
    margin-right: 10px;
    margin-top: 40px;
    margin-bottom: 10px;
    justify-self: center;
    width: 200px;
    height: auto;
    justify-items: center;
    padding-top: 10px;
    transition: background-color 0.3s, transform 0.3s;
  }
  .roundConners{
    border-radius: 4px;
    margin-right: 10px;
    background-color: #DB4444;
    height: 40px;
    width: 20px;
  }
   .today{
    color:#DB4444;
    font-family: 'popins' sans-serif;
    font-weight:600;
    font-size: 16px;
    padding-top: 10px;
  }
  .leftitem{
    justify-items: right;
    justify-self: right;
    padding-left: 710px;
  
  }
  .mastercolor{
    background-color: rgb(202, 196, 196);
    margin: 5px;
    border-radius: 75px;
    padding: 7px;
  }
  .flash{
    font-family:'Inter', sans-serif;
    font-weight: 600;
    font-size: 36px;
    justify-self: start;
    height: 48px;
    padding-top: 15px;
    width: 400px;
    margin-left: -20px;
    
  }
 

  </style>