<template>
  <div > 
      <swiper
        :modules="modules" 
        :slides-per-view="1"
        :space-between="50" 
        :pagination="{ clickable: true }"
        
    >
        <swiper-slide class="py-8">
            <div class="rounded-[43.12px] mb-5 h-[290px] bg-white flex flex-col justify-center items-center p-10">
                <figure class="pb-6">
                    <img src="~/assets/images/badge.svg" alt="badge.svg">
                </figure>
                <h2 class="font-semibold text-[19px] pb-4 text-brand-dark-blue text-center">
                    Dynamically
                </h2>
                <p class="text-lg text-[#6A6A6A] !leading-[1.8] text-center font-noto">Create your own digital menus with just a few simple steps.</p>
            </div> 
            <div class="rounded-[43.12px] h-[290px] bg-white flex flex-col justify-center items-center p-10">
                <figure class="pb-6">
                    <img src="~/assets/images/badge.svg" alt="badge.svg">
                </figure>
                <h2 class="font-semibold text-[19px] pb-4 text-brand-dark-blue text-center">
                    Dynamically
                </h2>
                <p class="text-lg text-[#6A6A6A] !leading-[1.8] text-center font-noto">Create your own digital menus with just a few simple steps.</p>
            </div> 
        </swiper-slide>   
        <swiper-slide class="py-8">
            <div class="rounded-[43.12px] mb-5 h-[290px] bg-white flex flex-col justify-center items-center p-10">
                <figure class="pb-6">
                    <img src="~/assets/images/badge.svg" alt="badge.svg">
                </figure>
                <h2 class="font-semibold text-[19px] pb-4 text-brand-dark-blue text-center">
                    Dynamically
                </h2>
                <p class="text-lg text-[#6A6A6A] !leading-[1.8] text-center font-noto">Create your own digital menus with just a few simple steps.</p>
            </div> 
            <div class="rounded-[43.12px] h-[290px] bg-white flex flex-col justify-center items-center p-10">
                <figure class="pb-6">
                    <img src="~/assets/images/badge.svg" alt="badge.svg">
                </figure>
                <h2 class="font-semibold text-[19px] pb-4 text-brand-dark-blue text-center">
                    Dynamically
                </h2>
                <p class="text-lg text-[#6A6A6A] !leading-[1.8] text-center font-noto">Create your own digital menus with just a few simple steps.</p>
            </div> 
        </swiper-slide>   
        <swiper-slide class="py-8">
            <div class="rounded-[43.12px] mb-5 h-[290px] bg-white flex flex-col justify-center items-center p-10">
                <figure class="pb-6">
                    <img src="~/assets/images/badge.svg" alt="badge.svg">
                </figure>
                <h2 class="font-semibold text-[19px] pb-4 text-brand-dark-blue text-center">
                    Dynamically
                </h2>
                <p class="text-lg text-[#6A6A6A] !leading-[1.8] text-center font-noto">Create your own digital menus with just a few simple steps.</p>
            </div> 
            <div class="rounded-[43.12px] h-[290px] bg-white flex flex-col justify-center items-center p-10">
                <figure class="pb-6">
                    <img src="~/assets/images/badge.svg" alt="badge.svg">
                </figure>
                <h2 class="font-semibold text-[19px] pb-4 text-brand-dark-blue text-center">
                    Dynamically
                </h2>
                <p class="text-lg text-[#6A6A6A] !leading-[1.8] text-center font-noto">Create your own digital menus with just a few simple steps.</p>
            </div> 
        </swiper-slide>   
        <swiper-slide class="py-8">
            <div class="rounded-[43.12px] mb-5 h-[290px] bg-white flex flex-col justify-center items-center p-10">
                <figure class="pb-6">
                    <img src="~/assets/images/badge.svg" alt="badge.svg">
                </figure>
                <h2 class="font-semibold text-[19px] pb-4 text-brand-dark-blue text-center">
                    Dynamically
                </h2>
                <p class="text-lg text-[#6A6A6A] !leading-[1.8] text-center font-noto">Create your own digital menus with just a few simple steps.</p>
            </div> 
            <div class="rounded-[43.12px] h-[290px] bg-white flex flex-col justify-center items-center p-10">
                <figure class="pb-6">
                    <img src="~/assets/images/badge.svg" alt="badge.svg">
                </figure>
                <h2 class="font-semibold text-[19px] pb-4 text-brand-dark-blue text-center">
                    Dynamically
                </h2>
                <p class="text-lg text-[#6A6A6A] !leading-[1.8] text-center font-noto">Create your own digital menus with just a few simple steps.</p>
            </div> 
        </swiper-slide>   
    </swiper>
</div>
</template>

<script>
 import { Pagination } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/vue'; 
import 'swiper/css';
import 'swiper/css/pagination';
export default {
    components: {
      Swiper,
      SwiperSlide, 
    },
    setup() { 
      return { 
        modules: [Pagination],
      };
    },
  };
</script> 