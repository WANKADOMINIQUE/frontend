<template>
  <div class="bg-white py-8 mb-10">
   
       <div class="mt-1 mb-15 border-t-2 border-gray-300"></div>
       
     <div class="mb-5"> <div class="flex">
        <div class="bg-red-600 w-4 roundConners"></div>
        <div class="text-red-600"><h2 class="today">This Month</h2></div>
      </div>
      <!-- the timing section -->
      <div class="flex " >
        <div> <h4 class="flash">Best Selling Product</h4> </div>
        <div class="leftitem">
            <div class="text-white btn1"><button class="btn2">View All </button></div>
        </div> 
        </div> </div>

<!--  the- start of the cart section  -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="bg-gray-10 rounded-lg relative">
<div class="bg-gray-100 " style=" border-radius: 4px; padding: 10px;">
  <div class="pfdbsty">        <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-md bg-gray-100  py-4"/>
</div>        
<span v-if="product.isNew" class="newcolor absolute top-2 left-2 text-white text-xs px-2 py-1 rounded">NEW</span>
<span class="absolute top-2 right-2  text-xs px-2 py-1 rounded">
    <img src="../assets/heart.png" alt="" style="margin-left: 10px;">
    <img src="../assets/Fill Eye.png" alt="" style="margin-left: 10px; padding-top: 4px;">
</span>
</div>
  
        <div class="adjustments" style="font-size: medium;">
        <h3 class="text-black mt-2" style="font-size: medium;">{{ product.name }}</h3>
        </div>

        <div>
            <div class="flex">
 <p class="txtcolor">${{ product.price }}</p>
  <p class="text-gray-500 ml-3">${{ product.bfDiscount }}</p>
            </div>

            <div class="flex">
       
        <div class="flex  adjustments">
          <span class="text-yellow-500" v-for="star in product.rating" :key="star">★</span>
          <span class="text-gray-400" v-for="star in 5 - product.rating" :key="star">★</span>
          <p class="text-gray-500 ml-3.5">${{ product.afRating }}</p>
        </div>
        </div>

        

  </div>
      </div>

    </div>
    


    
  </div>
    
</template>

<script setup>
// import { ref} from 'vue';
// import axios from 'axios' 
// import { onMounted } from 'vue';

// Sample product data
const products = [
  {
    image: 'jacket.png',
    name: 'The north coat',
    price: '2600',
    isNew: false,
    rating: 5,
    bfDiscount: '360',
    afRating : "(75)",
  },
  {
    image: 'bag.png',
    name: 'Gucci duffle',
    price: '960',
    isNew: false,
    rating: 4,
     bfDiscount: '1160',
    afRating : "(75)",
  },
  {
    image: 'tabb.png',
    name: 'RGB Liquimd CPU',
    price: '160',
    isNew: false,
    rating: 4,
     bfDiscount: '170',
    afRating : "(75)",
  },
  {
    image: 'shef.png',
    name: 'Small BookSelf',
    price: '360',
    isNew: false,
    rating: 5,
    afRating : '(75)',
  },

];



   
</script>

<style scoped>
.txtcolor{
    color:#DB4444;
    align-items: start;
}
.grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
.adjustments{
    justify-items: left;
    
}
.pfdbsty{
justify-self: center;
}
.newcolor{
  background-color: #00FF66;
}

.flash{
    font-family:'Inter', sans-serif;
    font-weight: 600;
    font-size: 36px;
    justify-self: start;
    width: 400px;
    height: 48px;
    margin-left: -20px;
  }
   .btn2{
    background-color: #DB4444;
    width: 159px;
    height: 56px;
    font-size: 16px;
    font-weight: 600;
    padding: 16px 48px;
    margin-bottom: 25px;
  }
  .btn1{
    margin-top: 1px;
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
    padding-left: 670px;

  }
</style>
