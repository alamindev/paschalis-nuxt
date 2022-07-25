<template>
 <footer  class="px-4 font-fira -mt-32 bg-[url(~/assets/images/footer-bg.svg)] bg-cover  bg-top-center bg-no-repeat pt-40">
    <div class="container mx-auto">
        <div class="flex lg:gap-5 gap-y-14 2xl:gap-14 flex-wrap lg:flex-nowrap py-5 sm:py-20">
            <div class="order-1 sm:w-6/12 lg:w-3/12 sm:pr-6 xl:pr-14 flex flex-col items-center justify-center sm:block">
                <figure>
                    <img class="w-[66px] first-letter:h-[90px]" src="~/assets/images/logo.svg" alt="logo.svg">
                </figure>
                <p class="text-base text-[#7A6982] py-8">Your own interactive QR menus.</p>
                <div class="">
                    <h2 class="text-xl font-bold pb-4 text-[#462D4E]">Download App</h2>
                    <div class="flex gap-2 xl:gap-5 items-center">
                        <a href="#">
                            <img src="~/assets/images/app-store-badge.svg" alt="app-store-badge.svg">
                        </a>
                        <a href="#">
                            <img src="~/assets/images/apple-store-badge.svg" alt="apple-store-badge.svg">
                        </a>
                    </div>
                </div>
            </div>
            <div class="order-3 lg:order-2 w-full lg:w-6/12">
                <div class="flex gap-y-10 flex-wrap">
                    <div class="w-6/12 sm:w-4/12">
                        <h2 class="text-[22px] font-bold text-black leading-[.9] pb-2">FOR BUSINESS OWNERS</h2>
                        <ul class="flex flex-col gap-4">
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">Intro</a></li>
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">Features</a></li>
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">Pricing</a></li>
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">FAQs</a></li>
                        </ul>
                    </div>
                    <div class="w-6/12 sm:w-4/12">
                        <h2 class="text-[22px] font-bold text-black leading-[1] pb-7">FOR DINERS</h2>
                        <ul class="flex flex-col gap-4">
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">Intro</a></li>
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">Features</a></li> 
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">FAQs</a></li>
                        </ul>
                    </div>
                    <div class="sm:w-4/12">
                        <h2 class="text-[22px] font-bold text-black leading-[1] pb-7">Support</h2>
                        <ul class="flex flex-col gap-4">
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">FOR BUSINESS OWNERS</a></li>
                            <li><a href="#" class="text-[15px] font-fira text-[#7A6982]">FOR DINERS</a></li>  
                        </ul>
                    </div>
                </div>
            </div>
            <div class="order-2 lg:order-3 sm:w-6/12 lg:w-3/12">
                <h2 class="text-[22px] font-bold text-black leading-[1] font-arimo pb-7 text-center sm:text-left">Newsletter</h2>
                <p class="font-arimo text-[#9A9EA6] text-base text-center sm:text-left">
                    Join our newsletter to receive updates regarding our service.
                    <span class="text-[#252C3D]">Don’t worry, we don’t like spam either; we are not going to overload you with e-mails.</span>
                    </p>
                <div class="flex gap-2 2xl:gap-5 items-center rounded-full p-2 border border-[#DFDFE0] mt-10">
                    <figure class="shrink-0 ml-4 ">
                        <img src="~/assets/images/evelope.svg" alt="evelope.svg">
                    </figure>
                    <input type="text" placeholder="Enter your email" class="w-full py-2 xl:py-3 bg-transparent border-0 focus:outline-none focus:border-0 focus:ring-0">
                    <button type="button" class="shrink-0 px-3 py-1.5 xl:px-8 xl:py-3 rounded-full bg-brand-green-light text-white font-arimo text-[15px]">Submit</button>
                </div>
            </div>
        </div>
        <div class="pt-10 sm:pt-20 pb-8 sm:pb-16 sm:border-t border-[#462D4E] border-opacity-25 flex justify-between items-center">
            <p class="text-sm text-[#7A6982]">Copyright 2010 - 2021 Company</p>
            <ul class="flex items-center gap-6">
                <li><a href="#" class="inline-block ">
                    <svg class="fill-[#7A6982]" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.94473 15.6133L2.92798 9.16915H0.736084V6.40736H2.92798V4.56617C2.92798 2.0813 4.14924 0.883789 5.9085 0.883789C6.7512 0.883789 7.47547 0.962841 7.68653 0.998173V3.59501L6.4664 3.59571C5.50961 3.59571 5.32435 4.16857 5.32435 5.0092V6.40736H8.0424L7.31177 9.16915H5.32435V15.6133H2.94473Z"  />
                    </svg> 
                </a></li>
                <li><a href="#" class="inline-block ">
                    <svg class="fill-[#7A6982]" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.6436 2.58335C17.9689 2.92326 17.2941 3.03657 16.5069 3.14987C17.2941 2.69665 17.8564 2.01683 18.0813 1.1104C17.4066 1.56361 16.6194 1.79022 15.7197 2.01683C15.0449 1.33701 14.0328 0.883789 13.0207 0.883789C11.1089 0.883789 9.42198 2.58335 9.42198 4.62282C9.42198 4.96273 9.42198 5.18934 9.53444 5.41595C6.49803 5.30265 3.68655 3.82969 1.8872 1.56361C1.54982 2.13013 1.43736 2.69665 1.43736 3.48978C1.43736 4.73613 2.11212 5.86917 3.12425 6.54899C2.56196 6.54899 1.99966 6.32238 1.43736 6.09577V6.09577C1.43736 7.90864 2.67442 9.38159 4.36131 9.7215C4.02393 9.83481 3.68655 9.83481 3.34917 9.83481C3.12425 9.83481 2.89933 9.83481 2.67442 9.7215C3.12425 11.1945 4.47376 12.3275 6.16066 12.3275C4.9236 13.3472 3.34917 13.9138 1.54982 13.9138C1.21244 13.9138 0.987525 13.9138 0.650146 13.9138C2.33704 14.9335 4.24885 15.6133 6.27312 15.6133C13.0207 15.6133 16.7318 9.94811 16.7318 5.07604C16.7318 4.96273 16.7318 4.73613 16.7318 4.62282C17.5191 4.0563 18.1938 3.37648 18.6436 2.58335Z"  />
                    </svg>  
                </a></li>
                <li><a href="#" class="inline-block ">
                    <svg width="16" class="stroke-[#7A6982]" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 0.883789H4.5C2.567 0.883789 1 2.45079 1 4.38379V11.3838C1 13.3168 2.567 14.8838 4.5 14.8838H11.5C13.433 14.8838 15 13.3168 15 11.3838V4.38379C15 2.45079 13.433 0.883789 11.5 0.883789Z"  stroke-width="1.31447" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.4588 7.16055C10.5452 7.74316 10.4457 8.33817 10.1745 8.86096C9.90323 9.38375 9.47405 9.8077 8.94799 10.0725C8.42193 10.3373 7.82577 10.4295 7.24431 10.3359C6.66285 10.2423 6.1257 9.96778 5.70926 9.55131C5.29282 9.13484 5.01829 8.59765 4.92472 8.01615C4.83116 7.43465 4.92332 6.83846 5.1881 6.31236C5.45289 5.78627 5.8768 5.35706 6.39956 5.0858C6.92231 4.81453 7.51729 4.71502 8.09986 4.80141C8.6941 4.88953 9.24425 5.16646 9.66904 5.59127C10.0938 6.01609 10.3707 6.56627 10.4588 7.16055Z"  stroke-width="1.31447" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </a></li>
            </ul>
        </div>
    </div>
 </footer>
</template>

<script>
export default {

}
</script> 