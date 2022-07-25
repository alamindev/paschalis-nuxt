<template>
   <div class="testimonials pt-5 md:pt-24 pb-12 sm:bg-[url(~/assets/images/dotted-map.png)] bg-no-repeat bg-cover  ">
        <swiper
        :modules="modules" 
        :breakpoints="{'960':{slidesPerView: 1.5}}" 
        :slides-per-view="1"
        :space-between="20"
        :loop='true'
        navigation
        :centered-slides="true"
        :pagination="{ clickable: true }"
    >
        <swiper-slide class="pt-20 pb-64 "  v-slot="{ isActive }">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" :class="isActive ? 'opacity-100' : 'opacity-25'">
                <div class="rounded-[24.2px] bg-white p-5 2xl:p-10 shadow-[8px_23px_58px_0_rgba(49,89,211,0.12)]">
                    <div class="w-[86px] -mt-16 mb-6 md:mb-10 bg-brand-green-light h-[86px] rounded-full flex justify-center items-center shadow-[0_11px_46px_0_rgba(181,199,48,0.51)]">
                            <img src="~/assets/images/comma.svg" alt="comma.svg">
                    </div>
                    <p class="text-lg md:text-base 2xl:text-xl text-brand-gray">There are many variations of passages of Lorem Ipsum form, by injected humour randomised words which slightly believable.  </p>
                    <div class="flex items-center gap-3 2xl:gap-6 pt-6 md:pt-10">
                            <figure>
                                <img class="w-[68px] h-[68px] object-cover rounded-full shadow-[0_6px_29px_0_rgba(0,0,0,.15)]" src="~/assets/images/avatar.png" alt="avatar.png">
                            </figure>
                            <div>
                                <h2 class="text-[22px] md:text-lg 2xl:text-[25px] font-medium text-[#030314] pb-2">Adalberto Kovach</h2>
                                <p class="text-brand-gray text-[17px] md:text-base 2xl:text-[19px] font-medium">Marketing Management </p>
                            </div>
                    </div>
                    </div>  
                    <div class="hidden sm:block rounded-[24.2px] bg-white p-5 2xl:p-10 shadow-[8px_23px_58px_0_rgba(49,89,211,0.12)]">
                    <div class="w-[86px] -mt-16 mb-6 md:mb-10 bg-brand-green-light h-[86px] rounded-full flex justify-center items-center shadow-[0_11px_46px_0_rgba(181,199,48,0.51)]">
                            <img src="~/assets/images/comma.svg" alt="comma.svg">
                    </div>
                    <p class="text-lg md:text-base 2xl:text-xl text-brand-gray">There are many variations of passages of Lorem Ipsum form, by injected humour randomised words which slightly believable.  </p>
                    <div class="flex items-center gap-3 2xl:gap-6 pt-6 md:pt-10">
                            <figure>
                                <img class="w-[68px] h-[68px] object-cover rounded-full shadow-[0_6px_29px_0_rgba(0,0,0,.15)]" src="~/assets/images/avatar.png" alt="avatar.png">
                            </figure>
                            <div>
                                <h2 class="text-[22px] md:text-lg 2xl:text-[25px] font-medium text-[#030314] pb-2">Adalberto Kovach</h2>
                                <p class="text-brand-gray text-[17px] md:text-base 2xl:text-[19px] font-medium">Marketing Management </p>
                            </div>
                    </div>
                    </div>  
            </div>
        </swiper-slide>    
        <swiper-slide class="py-20" v-slot="{ isActive }">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4" :class="isActive ? 'opacity-100' : 'opacity-25'">
                <div class="rounded-[24.2px] bg-white p-5 2xl:p-10 shadow-[8px_23px_58px_0_rgba(49,89,211,0.12)]">
                    <div class="w-[86px] -mt-16 mb-6 md:mb-10 bg-brand-green-light h-[86px] rounded-full flex justify-center items-center shadow-[0_11px_46px_0_rgba(181,199,48,0.51)]">
                            <img src="~/assets/images/comma.svg" alt="comma.svg">
                    </div>
                    <p class="text-lg md:text-base 2xl:text-xl text-brand-gray">There are many variations of passages of Lorem Ipsum form, by injected humour randomised words which slightly believable.  </p>
                    <div class="flex items-center gap-3 2xl:gap-6 pt-6 md:pt-10">
                            <figure>
                                <img class="w-[68px] h-[68px] object-cover rounded-full shadow-[0_6px_29px_0_rgba(0,0,0,.15)]" src="~/assets/images/avatar.png" alt="avatar.png">
                            </figure>
                            <div>
                                <h2 class="text-[22px] md:text-lg 2xl:text-[25px] font-medium text-[#030314] pb-2">Adalberto Kovach</h2>
                                <p class="text-brand-gray text-[17px] md:text-base 2xl:text-[19px] font-medium">Marketing Management </p>
                            </div>
                    </div>
                    </div>  
                    <div class="hidden sm:block rounded-[24.2px] bg-white p-5 2xl:p-10 shadow-[8px_23px_58px_0_rgba(49,89,211,0.12)]">
                    <div class="w-[86px] -mt-16 mb-6 md:mb-10 bg-brand-green-light h-[86px] rounded-full flex justify-center items-center shadow-[0_11px_46px_0_rgba(181,199,48,0.51)]">
                            <img src="~/assets/images/comma.svg" alt="comma.svg">
                    </div>
                    <p class="text-lg md:text-base 2xl:text-xl text-brand-gray">There are many variations of passages of Lorem Ipsum form, by injected humour randomised words which slightly believable.  </p>
                    <div class="flex items-center gap-3 2xl:gap-6 pt-6 md:pt-10">
                            <figure>
                                <img class="w-[68px] h-[68px] object-cover rounded-full shadow-[0_6px_29px_0_rgba(0,0,0,.15)]" src="~/assets/images/avatar.png" alt="avatar.png">
                            </figure>
                            <div>
                                <h2 class="text-[22px] md:text-lg 2xl:text-[25px] font-medium text-[#030314] pb-2">Adalberto Kovach</h2>
                                <p class="text-brand-gray text-[17px] md:text-base 2xl:text-[19px] font-medium">Marketing Management </p>
                            </div>
                    </div>
                    </div>  
            </div>
        </swiper-slide>    
    </swiper>
   </div> 
</template>
<script>
 import { Pagination,Navigation  } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/vue'; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export default {
    components: {
      Swiper,
      SwiperSlide, 
    },
    setup() {  
      return { 
        modules: [Pagination, Navigation], 
      };
    },
  };
</script> 