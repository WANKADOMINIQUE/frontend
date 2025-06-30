<script scope>
</script>

<template>
<div class="abovenav text-white overflow-hidden">
    <div class="flex">
       <div
        style="justify-items: right; 
        margin-right: 5px;
        font-size: 14px;
       
        "> 
        <p>{{ $t('Summer Sales For All Suits And Free Express Delivery -OFF') }}</p>
        </div>
        <div ><button class="btn1">{{ $t('ShopNow') }}</button></div>
        
        
      <div class="locale-changer language" > 

<select v-model="$i18n.locale" class="bg-black">
<option v-for="locale in $i18n.availableLocales"  :key="locale" :value="locale"> {{locale}}
</option>  
</select>
</div>


    </div>
</div>
</template>

<style>

.abovenav{
    height: 55px;
    /* 132 1595*/
    width: 1577px;
    background-color: black;
    margin-left: -220px;
    margin-top: -37px;
    padding-top: 15px;
    padding-left: 540px;
    
}
.btn1{
    background-color:unset;
    text-decoration: underline;
    margin-top: -10px;
    border: none;
    padding-right: 300px;

    
}
.btn1:hover{
    color:gray;
    border: none;
}
.language{
    margin-left: 28px;
    font-size: 14px;
}
</style>