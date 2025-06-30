<script setup>

</script>

<template>
<div class="grid grid-cols-12 md-grid-cols-6 classsec">
    <div class="col-start-1 col-end-4  text-white divsty">
        <div class="sty1 bg-black " style="padding: 15px 13px;"><img src="../assets/van.png" alt="van" class="pt-1"></div>
        <div class="text-black innerdiv">
            <h3 class="heading">FREE AND FAST DELIVERY</h3>
        <p>Free delivery for orders over $140</p>
        </div>
    </div>
    <div class="col-start-5 col-end-9  text-white divsty">
        <div class="sty1 bg-black"><img src="../assets/headset.png" alt="van" class="pt-1"></div>
        <div class="text-black innerdiv">
            <h3 class="heading">24/7 CUSTOMER SERVICE</h3>
        <p>Friendly 24/7 customer support</p>
        </div>
    </div>
    <div class="col-start-10 col-end-13  text-white divsty">
        <div class="sty1 bg-black"><img src="../assets/Icon-secure.png" alt="van" class="pt-1"></div>
        <div class="text-black innerdiv">
            <h3 class="heading">MONEY BACK GUARANTEE</h3>
        <p>We return money within 30 days</p>
        </div>
    </div>


</div>
</template>

<style>
.heading{
    margin-top: 15px;
    font-weight: 600;
    font-size: 20px;
    font:bolder;
    color: #000000
}
.innerdiv{
   width: 256px;
   height: 57px;
    font-weight: 400;
    font-size: 14px;
}
.divsty{
    width: 262px;
    height: 161px;
    gap: 24px;
}
.classsec{
    margin-left: 105px;
    margin-top: 90px;
    margin-bottom: 80px;
    width: 943px;
    height: 161px;
    align-items: center;
    justify-items: center;
}
.sty1{
    background-color: black;
    border:8px solid #aca8ac;
    justify-items: center;
    border-radius: 50px;
    padding: 10px 10px;
    width: 80px;
    height: 80px;
    justify-self: center;
   
    
}
</style>