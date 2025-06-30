<script setup>   
 
</script>
<template>
 
    <nav class="bg-white text-gray-900 py-4 lennav gap-12">
       
      <div class="container mx-auto flex justify-between" style="justify-items: flex-start;">
        <!-- Left Section -->
        <div class="flex items-center space-x-4">
          <div class="text-2xl text-indigo-600 text-dark excldiv bold-tex" style="margin-left: -15px !important;"><h1 class="heading">{{ $t('Exculsive') }}</h1></div>
          <a href="#" class="hover:text-indigo-600 text-dark " style="padding-left: 200px; text-decoration: underline;">  {{ $t('Home') }}  </a>
          <a href="#" class="hover:text-indigo-600 text-dark hovlnk">{{ $t('Contact') }} </a>
          <a href="#" class="hover:text-indigo-600 text-dark hovlnk">{{ $t('About') }} </a>
          <a href="#" class="hover:text-indigo-600 text-dark hovlnk">Signup</a>
        </div>
        
        <!-- Center Search Bar -->
        <div class="relative w-1/3 flex border border-gray-300 bg-gray-100 searchdiv" >
          <input
            type="text"
            name="search"
            :placeholder="$t('what are you looking for?')" 
            class="w-full p-2  rounded-lg focus:outline-none "/>
            <label for="search"><img src="../assets/searchbtn.png" alt="" class="imgsearch"> </label>
            <!-- <a href="##" class="imgsearch"><img src="../assets/searchbtn.png" alt=""> </a> -->
          
        </div>
        <div class="flex htc">
  <a href="##" class="heart"><img src="../assets/heart.png" alt=""></a>
  <a href="##" class="cart" ><img src="../assets/cartt.png" alt=""></a>
</div>
  
      </div>
      <div class="mt-4 border-t-2 border-gray-300" style="width:128%; margin-left: -165px; margin-bottom: -6px;"></div>
    </nav>
    
  </template>

  <style scoped>
  .heading{
    font-size: 24px;
    font-weight:700;
    font-family:'lnter', sans-serif;
  }
  .homehover{
    padding-left: 200px;
  }
    .homehover:hover, .homehover:active{
    text-decoration: underline;

  }
  .hovlnk:hover{
    text-decoration: underline;
  }
  .searchdiv{
    border-radius: 4px;
    margin-right: 10px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 20px;
     padding-right: 12px;
  }
  .imgsearch{
    padding-top: 9px;
    padding-right: 10px;
  }
  .btn{
    background-color: rgb(235, 232, 232);
  }
  .lennav{
    width: 100%;
  }
  .heart{
    padding-top: 13px;
    padding-right: 18px;
  }
  .cart{
    padding-top: 10px;
    padding-left: 10px;
    margin-right: -17px;
  }

  .htc{

    margin-left: -100px;
  }
 
  </style>