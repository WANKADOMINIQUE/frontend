<template>
  <footer class="bg-black text-white py-10 absolute left-0 w-full ml-0 mr-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
        <!-- Exclusive Section -->
        <div class="justify-items-left txtmaggi">
          <h2 class="text-lg font-bold mb-2 firstheading">Exclusive</h2>
          <p class="mb-4 secondheading">Subscribe</p>
          <p class="mb-2" >Get 10% off your first order</p>
          <input
            type="email"
            placeholder="Enter your email"
            class="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full"
          />
        </div>

        <!-- Support Section -->
        <div class="justify-items-left txtmaggi">
          <h2 class="text-lg font-bold mb-2 secondheading">Support</h2>
          <p class="mb-1">111 Bijoy saroni, Dinaj,</p>
          <p class="mb-1">DH-15, Bangladesh</p>
          <p class="mb-1">exclusive@gmail.com</p>
          <p class="mb-1">+88016-8888-9999</p>
        </div>

        <!-- Account Section -->
        <div class="justify-items-left txtmaggi">
          <h2 class="text-lg font-bold mb-2 secondheading">Account</h2>
          <ul class="justify-items-left liststyle">
            <li class="mb-1"><a href="#" class="hover:underline  text-white">My Account</a></li>
            <li class="mb-1"><a href="#" class="hover:underline text-white" >Login / Register</a></li>
            <li class="mb-1"><a href="#" class="hover:underline text-white">Cart</a></li>
            <li class="mb-1"><a href="#" class="hover:underline text-white">Wishlist</a></li>
            <li class="mb-1"><a href="#" class="hover:underline text-white">Shop</a></li>
          </ul>
        </div>

        <!-- Quick Link Section -->
        <div class="justify-items-left txtmaggi">
          <h2 class="text-lg font-bold mb-2 secondheading">Quick Link</h2>
          <ul class="justify-items-left liststyle22">
            <li class="mb-1"><a href="#" class="hover:underline text-white ">Privacy Policy</a></li>
            <li class="mb-1"><a href="#" class="hover:underline text-white">Terms Of Use</a></li>
            <li class="mb-1"><a href="#" class="hover:underline text-white">FAQ</a></li>
            <li class="mb-1"><a href="#" class="hover:underline text-white">Account</a></li>
          </ul>
        </div>

        <!-- Download App Section -->
        <div class="justify-items-left txtmaggi">
          <h2 class="text-lg font-bold mb-2 secondheading">Download App</h2>
          <p class="mb-2" style="font-size: 12px; font-weight: 500;">Save 5% with App New User Only</p>
          <div class="flex justify-start">
            <img src="../assets/Qr Code.png" alt="QR Code" class="w-26 h-auto" style="width: min-content;"/>
            <div>
              <div><img src="../assets/google.png" alt="google" class="w-26 h-auto" style="padding: 5px;"></div>
              <div><img src="../assets/AppStore.png" alt="appstore" class="w-26 h-auto" style="padding: 5px;"></div>
            </div>
          </div>
           <div class="flex mt-4 logosstyle">
                <img src="../assets/facebook.png" alt="fb">
                <img src="../assets/twiter.png" alt="twit">
                <img src="../assets/instagram.png" alt="insta">
                <img src="../assets/Linkedin.png" alt="Lkn">

            </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <p class="text-sm" style="opacity:50%;">© Copyright Ritemel 2022. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.secondheading{
    font-family: 'poppins', sans-serif;
    font-weight: 500;
    font-size: 20px;
    padding-bottom: 10px;
}
.firstheading{
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
}
.logosstyle{
    align-items: start;
    gap: 22px;
    margin-left: -5px;
}
.liststyle{
    text-align: start;
    margin-left: -30px;
    color: white;
      font-weight: 400;
    font-size: 16px;
}
.liststyle22{
     text-align: start;
    margin-left: -30px;
    color: white;
      font-weight: 400;
    font-size: 16px;

}
.txt-color {
  color: aliceblue;
}
.txtmaggi{
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    line-height: 40pxpx;
}
</style>