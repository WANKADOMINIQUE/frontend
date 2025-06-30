<template>
  <div class="bg-white py-8 mb-10">
    <!-- the title  -->
    <div class="flex">
        <div class=" w-4 roundConners"></div>
        <div ><h2 class = "today">Categories</h2></div>
      </div>
      <!-- the timing section -->
      <div class="flex">
            <h3 class="flash" >Browse By Category</h3> 
             
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

<!--  the end of the title-->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <div
        v-for="(product, index) in data"
        :key="index"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave(index)"
        class="bg-gray-10 rounded-lg relative">
<div class="bg-gray-100 p-4 overflow-hidden justify-items-center">
  <div class="relative pfdbsty overflow-visible justify-items-center">        
    <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded-md bg-gray-100  py-4"/> 
      

       <button v-if="isHovered[index]" class="buy-button overflow-visible h-10">Add To Cart </button>
<span v-if="product.isNew" class="newcolor absolute top-2 left-2 text-white text-xs px-2 py-1 rounded">NEW</span>
<span class="absolute top-2 right-2  text-xs px-2 py-1 rounded " 
style="padding-left: 120px !important; justify-items: end; margin-right: -39px;
                 margin-top: -10px;">
    <img src="../assets/heart.png" alt="" style="margin-left: 20px; ">
    <img src="../assets/Fill Eye.png" alt="" style="margin-left: 20px; padding-top: 5px;">
</span>

  </div>
</div>
  
        <div class="adjustments" style="font-size: medium;">
        <h3 class="text-black mt-2" style="font-size: medium;">{{ product.name }}</h3>
        </div>

        <div class="flex">
        <p class="text-red-600">${{ product.price }}</p>
  
      
        <div class="flex pl-4 adjustments">
          <span class="text-yellow-500" v-for="star in product.rating" :key="star">★</span>
          <span class="text-gray-400" v-for="star in 5 - product.rating" :key="star">★</span>
        </div>
  </div>

  <!-- selector section #################################-->
   <div v-if="index > 3" class="flex clasic">
    <div class="bg-yellow-100 m-1 p-2 rounded-full border-2 "></div>
    <div class="bg-red-500 m-1 p-2 rounded-full " style="border: 2px solid #DB4444;"></div>
   </div>
   
  <!-- #############@@@@@@@@ -->

  <!-- sector section#####################################-->
      </div>

    </div>
    <div class="text-center mt-8 ">
      <button class="btn2 text-white py-2 px-4 rounded" @click="getProducts">View All Products</button>
    </div>


    
  </div>
    
</template>

<script setup>
import { ref} from 'vue';
import axios from 'axios' 
import { onMounted } from 'vue';


const products = [
   {
    image: 'pic1.png',
    name: 'CANON EOS DSLR Camera',
    price: '$380',
    isNew: false,
    rating: 5,
  },
  {
    image: 'pic1.png',
    name: 'Breed Dry Dog Food',
    price: '$100',
    isNew: false,
    rating: 4,
  },
  {
    image: 'pic2.png',
    name: 'CANON EOS DSLR Camera',
    price: '$380',
    isNew: false,
    rating: 5,
  },
  {
    image: 'pic2.png',
    name: 'ASUS Gaming Laptop',
    price: '$700',
    isNew: false,
    rating: 4,
  },
  {
    image: 'pic4.png',
    name: 'Curology Product Set',
    price: '$500',
    isNew: false,
    rating: 3,
  },
  {
    image: 'pic5.png',
    name: 'kid Electric Car',
    price: '$100',
    isNew: true,
    rating: 5,
  },
  {
    image: 'pic6.png',
    name: 'Jr. Zoo Soccer Cleats',
    price: '$160',
    isNew: false,
    rating: 4,
  },
  {
    image: 'pic7.png',
    name: 'GP11 Shooter USB Gamepad',
    price: '$660',
    isNew: true,
    rating: 4,
  },
  {
    image: 'pic8.png',
    name: 'Quilted Satin Jacket',
    price: '$660',
    isNew: false,
    rating: 5,
  },
];
const selectedColor = ref('#ff0000');
const data = ref([]);
const isHovered = ref(Array(products.length).fill(false));
  


// start of hover function 
const handleMouseEnter = (index) => {
  isHovered.value[index] = true;
};

const handleMouseLeave = (index) => {
  isHovered.value[index] = false;
};

function getProducts() {
  axios.get('http://localhost:8000/api/products')
    .then((response) => {
      data.value = response.data.products;
      console.log(data)
    
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
};

onMounted(() => {
      getProducts();
    });

   
</script>

<style scoped>
 .buy-button{
            position: absolute;
            bottom: 0px; 
            left: 0; /* Align to the left */
            width: 350%;
            background-color:black;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 0px;
            cursor: pointer;
            transition: background-color 0.3s;
            margin-bottom: -24px ;
            justify-self: stretch;
            z-index: 20px;
            margin-left: -160px;         
  }
.clasic{margin-left: -5px;}
.roundconner1{
  
  border-radius: 50px;
  width: 20px;
  height: 20px;
  background-color: #DB4444;
}
.colorselector{
  align-items: flex-start;
  display: flex;
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

  .flash{
    font-family:'Inter', sans-serif;
    font-weight: 600;
    font-size: 36px;
    justify-self: start;
    width: 400px;
    height: 48px;
    padding-right: 15px;
    margin-left: -18px;
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
  .btn2{
    background-color: #DB4444;
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
  margin-left: -30px;
}
</style>
