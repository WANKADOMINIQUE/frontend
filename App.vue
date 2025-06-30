<script setup>
import FooterComponent from './components/FooterComponent.vue';
import FeaturedComponent from './components/FeaturedComponent.vue';
import Carousel from './components/Carousel.vue';
import SpliderSlid from './components/SpliderSlid.vue';
import MainProducts from './components/MainProducts.vue';
import SwiperP from './components/SwiperP.vue';
import abovefooter from './components/abovefooter.vue';
import CategoryHero from './components/CategoryHero.vue';
import Nav from './components/Nav.vue';
import Herosection from './components/Herosection.vue'
import Today from './components/Today.vue';
import SecondCategory from './components/SecondCategory.vue';
import Month from './components/Month.vue';
import Products from './components/Products.vue';
import AboveNavbar from './components/AboveNavbar.vue';
import DomHeading from './components/DomHeading.vue';
import HoverTest from './components/HoverTest.vue';
import DOOOM from './components/DOOOM.vue';
import PerMoveSlider from './components/PerMoveSlider.vue';


// this is translation testing







</script>

<template>
  <div class="container sm:px-6 lg:px-1  general">

    
  
    <!-- <Navbar/> -->
    <FirstNavbar/>
   <AboveNavbar/>
       <Nav/>
     <Herosection/>
     <Today/>
    
     
     <SecondCategory/>
     <Month/>
    
    
    <CategoryHero/>
    
   
    <!-- <MainProducts/> -->
      <Products/>
    <!-- <Carousel/>  -->
    <!-- <SwiperP/> -->
    <!-- <FeaturedComponent/>  -->
    <DomHeading/>
    
     <DOOOM/>
    <abovefooter/>
    <!-- <PerMoveSlider/> -->
    <!-- <SpliderSlid/> -->
       
   <!-- <FooterComponent /> -->
    <HoverTest/>
  
  </div>

</template>

<style scoped>
.general{
  width:100%;
  margin-top: -5px;
  justify-self: self-start;
  justify-items: normal;
}

</style>
