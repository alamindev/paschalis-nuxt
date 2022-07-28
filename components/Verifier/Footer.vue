<template>
  <footer class="pb-24 px-4 font-arimo -mt-28 sm:-mt-20">
    <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-10 justify-between">
            <div class="md:w-[600px] max-w-full">
                <figure class="pb-4">
                 <img class="h-8 xl:h-auto" src="~/assets/images/verifier/logo.svg" alt="logo">
                </figure>
                <p class="text-base md:text-lg text-[#9A9EA6] !leading-loose">We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <button type="button" class="font-bold text-brand-blue">Read More</button></p>
            </div>
            <div class="md:w-[600px] max-w-full">
                <h2 class="text-[23px] font-bold font-arimo">Newsletter</h2>
                <p></p>
                <p class="text-base md:text-lg text-[#9A9EA6] !leading-loose">Join our newsletter to receive updates regarding our service.
                    <span class="text-[#252C3D]">Don’t worry, we don’t like spam either; we are not going to overload you with e-mails.</span>
                </p>
                <div class="flex gap-2 2xl:gap-5 items-center rounded-full p-2 border border-[#DFDFE0] mt-10">
                    <figure class="shrink-0 ml-4 ">
                        <img src="~/assets/images/evelope.svg" alt="evelope.svg">
                    </figure>
                    <input type="text" placeholder="Enter your email" class="w-full py-2 xl:py-3 bg-transparent border-0 focus:outline-none focus:border-0 focus:ring-0">
                        <button type="button" href="#" class="inline-block shrink-0 px-6 sm:px-14 focus:border-0 focus:outline-none focus-visible:!outline-none focus:ring-0 py-1.5 lg:py-2.5 bg-gradient-to-tr to-brand-blue from-brand-lime  shadow-sign-up  rounded-full text-base 2xl:text-lg text-white font-semibold">submit</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-10 md:flex-row md:justify-between pt-12">
            <div class="md:w-[600px] max-w-full flex-col md:flex-row flex gap-6 lg:gap-14 md:items-center">
                <div class="flex gap-3">
                    <figure>
                       <img src="~/assets/images/verifier/phone.svg" alt="phone .svg">
                    </figure>
                    <div>
                        <p class="text-sm font-arimo text-[#9A9EA6] pb-1.5">Have a question?</p>
                        <a href="tel:310-437-2766" class="inline-block text-brand-blue text-xl">310-437-2766</a>
                    </div>
                </div>
                <div class="flex gap-3">
                    <figure>
                       <img src="~/assets/images/verifier/mail.svg" alt="mail.svg">
                    </figure>
                    <div>
                        <p class="text-sm font-arimo text-[#9A9EA6] pb-1.5">Contact a at</p>
                        <a href="mailto:unreal@outlook.com" class="inline-block text-brand-blue text-xl">unreal@outlook.com</a>
                    </div>
                </div>
            </div>
            <div class="md:w-[600px] max-w-full flex md:justify-end">
                <ul class="flex items-center gap-8">
                    <li><a href="#">  <img src="~/assets/images/verifier/facebook.svg" alt="facebook.svg"></a></li>
                    <li><a href="#">  <img src="~/assets/images/verifier/youtube.svg" alt="youtube.svg"></a></li>
                    <li><a href="#">  <img src="~/assets/images/verifier/digg.svg" alt="digg.svg"></a></li>
                    <li><a href="#">  <img src="~/assets/images/verifier/figma.svg" alt="figma.svg"></a></li>
                    <li><a href="#">  <img src="~/assets/images/verifier/whatsapp.svg" alt="whatsapp.svg"></a></li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-10 justify-between pt-20">
            <ul class="flex items-center gap-6 flex-wrap lg:flex-nowrap ">
                <li><a href="#" class="text-[#9A9EA6] text-base md:text-lg hover:text-brand-dark-100">About us</a></li>
                <li><a href="#" class="text-[#9A9EA6] text-base md:text-lg hover:text-brand-dark-100">Contact</a></li>
                <li><a href="#" class="text-[#9A9EA6] text-base md:text-lg hover:text-brand-dark-100">Privacy policy</a></li>
                <li><a href="#" class="text-[#9A9EA6] text-base md:text-lg hover:text-brand-dark-100">Sitemap</a></li>
                <li><a href="#" class="text-[#9A9EA6] text-base md:text-lg hover:text-brand-dark-100">Terms of Use</a></li> 
            </ul>
            <p class="text-[#9A9EA6] text-base md:text-lg ">© 2000-2021, All Rights Reserved</p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>