<template>
  <div class="flex   m-1 gap-8">
    <div  class="firttext p-1 w-144 h-150  text-center bg-black text-white mt-3" >
      <div><img  src="../assets/playstation.png" alt="Image 1" class=" imaging mb-2 w-128 h-128 "/></div>
     <div class=" herotxt1">
        <h3 class="heroh1"> PlayStation 5</h3>
     <p >Black and White version of the PS5 coming out on sale.</p>
     <button class="btn1">Shop Now</button>
     </div>
    </div>
    <div class="txtstyle flex-1  border-white p-1 pl-20 ml-40 mt-1 text-center bg-white relative" id="first  w-144 h-150">
      <div class="flex flex-col gap-8 mt-2 w-144">
        <div class="flex w-144 h-71 mb-2 text-center bg-black rounded-sm">
             <div class=" herotxt2">
               <h3 class="heroh1"> Women's Collection</h3>
     <p>Featured women collection that give you another vibe.</p>
     <button class="btn1">Shop Now</button>
           </div>   
           <div><img src="../assets/woman.png" alt="Nested Image 1" class="w-108 h-71 ml-30"/></div>
           
        </div>
        <div class="w-144 h-70  bg-white">
          <div class="flex bg-white w-143 h-70 gap-7 ">
            <div class=" h-70 w-68 flex-1  bg-black rounded-sm">
                <div>
<img src="../assets/Speaker.png" alt="Horizontal Image 1" class="mt-4 ml-8 w-48 h-56" /></div>

           <div class=" herotxt3">
               <h3 class="heroh1"> Speakers</h3>
     <p>Amazon wireless speaker.</p>
     <button class="btn1">Shop Now</button>
           </div>
            </div>
            <div class=" p-2 h-70 w-69 bg-black rounded-sm">
            <div><img src="../assets/Perfume.png" alt="Horizontal Image 2" class="max-w-full h-auto mb-1" /></div>
                <div class=" herotxt4">
                    <h3 class="heroh1"> Perfume</h3>
     <p>GUCCI INTENSE OUD EDP </p>
     <button class="btn1">Shop Now</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
.herotxt4{
 align-items: left;
 text-align: left;
 width: 191px;
 height: 85px;
 font-size: 14px;
 font-weight: 400;
 position: absolute;
 color: white;
 margin-top: -70px;
 margin-left: 18px;
 
}
.herotxt3{
 align-items: left;
 text-align: left;
 width: 191px;
 height: 85px;
 font-size: 14px;
 font-weight: 400;
 position: absolute;
 color: white;
 margin-bottom: 50px ;
 margin-top: -80px;
 margin-left: 25px;
 
}
.herotxt2{
 align-items: left;
 text-align: left;
 width: 255px;
 height: 122px;
 font-size: 14px;
 font-weight: 400;
 margin-left: 15px;
 color:white;
 position: absolute;
 margin-top: 135px;
 margin-left: 25px;
}
.heroh1{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: white;
    }
.herotxt1{
 align-items: left;
 text-align: left;
 width: 242px;
 font-size: 14px;
 font-weight: 400;
 margin-left: 40px;
 margin-top: -60px;
}
.txtstyle{

    margin-left: 10px;
}
.imaging{
    padding-top:180px;
    margin-bottom: 1;

    
}
.firttext{
    width: 570px;
    height: 600px;
    justify-items: start;
    background: none;
    color: aliceblue;
    position: relative;
    border-radius: 4px;

}
.first{
    padding-left: 10px;
    margin-right: -100px;
}
.btn1{
    text-align: left;
    width:400px;
    height:28px;
    font-weight: 500;
    font-size: 16px;
    justify-items: flex-start;
    margin-left: -20px;
     
}



</style>