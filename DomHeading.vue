<template>
    
 <div>     <!-- the title  -->
    <div class="flex">
        <div class="roundConners"></div>
        <div class="today"><h5>Featured</h5></div>
      </div>
      <!-- the timing section -->
      <div class="flex">
            <h4 class="flash" >New Arrival</h4> 
     
        </div></div>

</template>

<script>
export default {

}
</script>

<style>
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
    width: 211px;
    height: 48px;
    padding-right: 12px;
    padding-bottom: 20px;
    
  }
</style>