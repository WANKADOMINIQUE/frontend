<template>
  <footer class="bg-black text-white py-10 absolute left-0 w-full">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
        <!-- Exclusive Section -->
        <div class=" textstyl">
          <h2 class="text-lg font-bold mb-2">Exclusive</h2>
          <p class="mb-4">Subscribe</p>
          <p class="mb-2">Get 10% off your first order</p>
          <input
            type="email"
            placeholder="Enter your email"
            class="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full"
          />
        </div>

        <!-- Support Section -->
        <div class=" textstyl">
          <h2 class="text-lg font-bold mb-2">Support</h2>
          <p class="mb-1">111 Bijoy saroni, Dinaj,</p>
          <p class="mb-1">DH-15, Bangladesh</p>
          <p class="mb-1">exclusive@gmail.com</p>
          <p class="mb-1">+88016-8888-9999</p>
        </div>

        <!-- Account Section -->
        <div class="">
          <h2 class="text-lg font-bold mb-2">Account</h2>
          <ul class="">
            <li class="mb-1"><a href="#" class="hover:underline txt-color">My Account</a></li>
            <li class="mb-1"><a href="#" class="hover:underline">Login / Register</a></li>
            <li class="mb-1"><a href="#" class="hover:underline">Cart</a></li>
            <li class="mb-1"><a href="#" class="hover:underline">Wishlist</a></li>
          </ul>
        </div>

        <!-- Quick Link Section -->
        <div class="">
          <h2 class="text-lg font-bold mb-2">Quick Link</h2>
          <ul class="">
            <li class="mb-1"><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li class="mb-1"><a href="#" class="hover:underline">Terms Of Use</a></li>
            <li class="mb-1"><a href="#" class="hover:underline">FAQ</a></li>
          </ul>
        </div>

        <!-- Download App Section -->
        <div class="">
          <h2 class="text-lg font-bold mb-2">Download App</h2>
          <p class="mb-2">Save 5% with App New User Only</p>
          <div class="flex justify-end">
            <img src="../assets/Qr Code.png" alt="QR Code" class="w-26 h-auto" style="width: min-content;"/>
            <div>
              <div><img src="../assets/google.png" alt="google" class="w-26 h-auto" style="padding: 5px;"></div>
              <div><img src="../assets/AppStore.png" alt="appstore" class="w-26 h-auto" style="padding: 5px;"></div>
            </div>
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
.txt-color {
  color: aliceblue;
}
.textstyl{
  text-align: left;
  justify-content: left;
  color:brown;
  justify-items: left;
}
</style>