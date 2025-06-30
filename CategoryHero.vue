<script setup>

</script>

<template>

<div class="grid grid-cols-12 bg-black mainsection">
    <div class="col-start-1 col-end-6 leftdiv">
        <p class="txtColor">Categories</p>
    <div class="mainheading" ><h2>Enhance Your </h2>
         <h2 >Music Experience</h2></div>
    <div class="grid grid-cols-12 gap-3">
        <div class="col-span-2 bg-white text-black rnSharp" ><h5 >05</h5><p class="time">day</p></div>
        <div class="col-span-2 bg-white text-black rnSharp"><h5>23</h5><p class="time">Hours</p></div>
        <div class="col-span-2 bg-white text-black rnSharp"><h5>59</h5><p class="time">minutes</p></div>
        <div class="col-span-2 bg-white text-black rnSharp"><h5>35</h5><p class="time">seconds</p></div>
    </div>
    <button class="btnhero">Buy Now</button>
    </div>
    <div class="col-start-6 col-end-12 rgbcolor"><img src="../assets/bigmusic.png" alt="" class="imgsize"></div>
</div>
</template>

<style>
.time{
    font-size: 11px;
    font-family: 400;
    line-height: 18px;
    margin-top: -8px;
}
.mainheading{
    font-family: 'Inter', sans-serif;
    width: fit-content;
    justify-items: left;
    color:aliceblue;
    font-weight: 600;
    font-size: 48px;
}
.txtColor{
color: #00FF66;
font-size: 600;
padding-top: 50px;
}
.rnSharp{
    line-height: 20px;
    border: none;
    border-radius: 35px;
    padding-top: 8px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 7px 3px;
    justify-items: center;
    width: 62px;
    height: 62px;
    font-size: 16px;
    font-weight: 600;

    
}
.leftdiv{
    justify-items: left;
    justify-self: left;
    margin-left: 35px;
    margin-top: 20px;
}
.btnhero{
    background-color:#00FF66;
    padding: 16px 48px;
    margin-top: 18px;
    margin-bottom: 10px;
    width: 171px;
    height: 56px;
    border-radius: 4px;
    color: #FAFAFA;
    font-size: 16px;
    font-weight: 500;
}
.mainsection{
    margin: 25px 1px;
  
    height: 400px;
}
.imgsize{
    width: 450px;
    height: auto;
    margin-top: 25px;
    padding: 30px 1px;
}
.rgbcolor{
    background: linear-gradient(to right, black, rgb(65, 61, 61), black);
    border-radius: 70px;
    border: none;
    margin: 30px 1px;
    background-color: rgb(21, 25, 25);
    width: 400px;
}
</style>    