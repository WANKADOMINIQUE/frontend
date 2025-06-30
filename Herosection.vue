<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const carouselImages = [
    '../assets/caroIMG1.png',
    '../assets/caroIMG1.png',
    '../assets/caroIMG1.png',
    '../assets/caroIMG1.png',
    
];

const currentIndex = ref(0);

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % carouselImages.length;
};

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + carouselImages.length) % carouselImages.length;
};

// Automatic slider
let interval;

onMounted(() => {
    interval = setInterval(nextImage, 3000); // Change image every 5 seconds
});

// onBeforeUnmount(() => {
//     clearInterval(interval); // Clear interval on component unmount
// });
</script>

<template>
<div class="grid md:grid-cols-1 sm:grid-cols-1" style="padding: 10px 0px; width: 100%;">
    
    <div class="col-start-1 col-end-3 leftlist sm:grid-ml-3" style="justify-items: left;">
        <div class="divleft"><a href="##" class="lefttext">{{ $t("Women's Fashion") }} <span style="padding-left: 50px;">&gt;</span></a></div>
        <div class="divleft"><a href="##" class="lefttext">{{$t("Men's Fashion")}}<span style="padding-left: 72px;">&gt;</span></a></div>
        <div class="divleft"><a href="##" class="lefttext">{{ $t('Electronic') }}</a></div>
        <div class="divleft"><a href="##" class="lefttext">{{$t('Home & Lifestyle')}}</a></div>
        <div class="divleft"><a href="##" class="lefttext">{{$t('Medicine')}}</a></div>
        <div class="divleft"><a href="##" class="lefttext">{{$t('Sport & Outdoor')}}</a></div>
        <div class="divleft"><a href="##" class="lefttext">{{$t('Baby & Toy')}}</a></div>
        <div class="divleft"><a href="##" class="lefttext">{{$t('Groceries & Pets')}}</a></div>
        <div class="divleft"><a href="##" class="lefttext">{{$t('Health & Beauty')}}</a></div>
    </div>
    
    <div class="col-start-3 col-end-4 text-white border-gray-300" style="border-left: 1px solid gray; height: 100%; margin: 0px; margin-top: -28px;">dddddd</div>
    
    <div class="flex col-start-4 col-end-7" style="background-color: black; width:892px; height: 344px;">
        <div class="ml-3">
            <div class="flex mt-5" style="margin: 10px 30px; justify-items: left;">
                <img src="../assets/apple-logo.png" alt="" style="width: 40px; height: 49px;">
                <p 
                style="padding-top: 5px; color: aliceblue; font-size: 16;
                font-family: 400px; padding-top: 12px; padding-left: 20px;
                ">iPhone 14 Series</p>
            </div>
            <div class="herobtn" >
                <h6 class="herostyl ml-2.5 ">{{$t('Up To 10%  off Voucher')}}</h6>
            </div>
            <div class="flex pt-2" style="margin: 20px 10px; justify-items: left;">
                <button class="hoveringEf"> <span class="txtstyle">{{$t('Shop Now')}} </span> 
                <img src="../assets/arrow.png" alt="" class="sizingpng mt-1.5 ml-3">
                </button>
                
            </div>
        </div>

        <!-- Slider -->
      <div>
          <div class="flex col-start-6 col-end-12 bg-black relative slider-container">
            <button @click="prevImage" class="carousel-button left text-black">‹</button>
            <img :src="carouselImages[currentIndex]" alt="Carousel Image" class="carousel-image mt-2">
            <button @click="nextImage" class="carousel-button right text-black">›</button>
        </div>

        <!-- Indicators -->
        <div class="absolute indicator-container">
            <span 
                v-for="(image, index) in carouselImages" 
                :key="index" 
                :class="['indicator', { active: currentIndex === index }]"
                @click="currentIndex = index"
            ></span>
        </div>
      </div>
    </div>
</div>
</template>

<style>
.herobtn{
    margin-left:7px;
    width:fit-content;
    
}

.hoveringEf{
display: flex;
color: aliceblue;
border: none;
background-color: black;
}
.sizingpng{
    width: 16.5px;
    height: 14px;
    top:5px;
    left:3.5px;
    border: 1.5px;
    
}
.herostyl{
    font-family:'Inter', sans-serif;
    font-weight: 600;
    font-size: 48px;
    justify-items: start;
    width: 294px;
    height: 120px;
    top:127px;
    bottom:64px;
    color: aliceblue;
    letter-spacing: 4%;
    line-height: 60px;
    padding-right: 12px;
    padding-left: 15px;
    justify-content: flex-start;
    text-align: left;

    

}
.lefttext {
    color: black;
    padding-bottom: 10px !important;
    height: 600px !important;
}
.hoveringEf:hover {
    text-decoration: underline;
    background-color: none;
}

.leftlist {
    margin-bottom: 10px;
}
.divleft {
    margin-bottom: 17px;
}
.slider-container {
    position: relative;
    width: 100%; /* Full width */
    height: 300px; /* Fixed height for the slider */
    overflow: hidden; /* Hide overflow */
}
.carousel-image {
    width: 100%; /* Full width */
    height: 100%; /* Fixed height */
    object-fit: cover; /* Cover to maintain aspect ratio */
    transition: opacity 0.5s ease-in-out; /* Smooth transition */
}
.carousel-button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10; /* Ensure buttons are above the image */
}
.carousel-button.left {
    left: 10px; /* Position left button */
}
.carousel-button.right {
    right: 10px; /* Position right button */
}
.indicator-container {
    display: flex;
    justify-content: center;
    margin-top: 10px; /* Space above indicators */
}
.indicator {
    width: 12px;
    height: 12px;
    background-color: gray; /* Default color */
    border-radius: 50%; /* Rounded shape */
    margin: 0 5px; /* Spacing between indicators */
    cursor: pointer;
}
.indicator.active {
    background-color: #DB4444; /* Active indicator color */
}
</style>