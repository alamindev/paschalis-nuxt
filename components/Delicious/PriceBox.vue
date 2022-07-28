<template>
 <div class="pt-20">
    <div class="w-[359px] max-w-full mx-auto">
        <h2 class="text-[25px] lg:text-[45px] font-semibold text-center text-brand-dark-100 pb-6">Pricing plan</h2>
        <div class="flex gap-6 items-center">
            <span :class="enabled ? 'text-[#C8BEB7]' : 'text-black'" class="font-semibold text-2xl ">Monthly</span>
                <Switch v-model="enabled" :class="[enabled ? 'bg-brand-green-light' : 'bg-white', 'relative inline-flex shrink-0 h-16 w-28 border-2 border-[#715A55] rounded-full cursor-pointer transition-colors ease-in-out duration-200  focus:outline-none focus:ring-0']">
                    <span class="sr-only">Use setting</span>
                    <span aria-hidden="true" :class="[enabled ? 'translate-x-14 bg-white' : 'translate-x-1.5 bg-brand-green-light ', 'mt-1.5 pointer-events-none inline-block h-12 w-12 rounded-full shadow transform ring-0 transition ease-in-out duration-200']" />
                </Switch>
            <span :class="enabled ? 'text-black' : 'text-[#C8BEB7]'"  class="font-semibold text-2xl text-[#C8BEB7]">Yearly</span>
        </div>
    </div>
    <div class="pt-28">
        <div class="w-[784px] flex flex-col items-center md:items-start md:flex-row md:gap-10 md:shadow-price-box max-w-full mx-auto md:bg-white md:rounded-[30px] md:px-12 md:pb-12 md:pt-8">
            <div class="md:w-[293px] rounded-[30px] shadow-price-box  md:shadow-none md:rounded-none md:p-0 px-6 py-12 bg-white ">
                <h2 class="text-[40px] font-medium mb-8">$39 <sub class="text-xl font-medium text-brand-dark-gray">/mont</sub></h2>
                <h3 class="text-3xl font-black pb-4">Base</h3>
                <p class="text-base text-brand-dark-gray pb-6 font-medium">For most businesses that want to otpimize web queries</p>
                <ul class="flex flex-col gap-4 mb-6">
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-1.svg" alt="check-circle-1.svg">
                        </figure>
                        <p class="text-base text-brand-dark-gray font-medium">Build your dynamic menus.</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-1.svg" alt="check-circle-1.svg">
                        </figure>
                        <p class="text-base text-brand-dark-gray font-medium">General rating & feedback plus rating for each menu item.</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-1.svg" alt="check-circle-1.svg">
                        </figure>
                        <p class="text-base text-brand-dark-gray font-medium">Promote your special or daily offers</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-1.svg" alt="check-circle-1.svg">
                        </figure>
                        <p class="text-base text-brand-dark-gray font-medium">Instantly hide or inactivate specific menu items</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-1.svg" alt="check-circle-1.svg">
                        </figure>
                        <p class="text-base text-brand-dark-gray font-medium">Show on map</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-1.svg" alt="check-circle-1.svg">
                        </figure>
                        <p class="text-base text-brand-dark-gray font-medium">Links to your social media & web site</p>
                    </li>
                </ul>
                <a href="#" class=" inline-block uppercase text-white bg-brand-red-60 rounded-full px-8 py-3 text-base sm:text-lg">GET MONTHLY PLAN</a>
            </div>
            <div class="md:w-[362px] p-8 bg-brand-green-light rounded-[30px] md:-mt-20 shadow-[0_47px_38px_0_rgba(181,199,48,.29)]">
                <div class="flex justify-end" >
                    <p class="text-[12px] -mr-3 -mt-3 text-white bg-brand-red-60 px-6 py-2 rounded-full uppercase font-black">MOST POPULAR</p>
                </div>
                <h2 class="text-[40px] font-black text-white mb-8">$100 <sub class="text-xl font-medium text-white">/mont</sub></h2>
                <h3 class="text-3xl font-black text-white pb-4">Pro</h3>
                <p class="text-base text-white pb-6 font-medium">For most businesses that want to otpimize web queries</p>
                <ul class="flex flex-col gap-4 mb-6">
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-2.svg" alt="check-circle-2.svg">
                        </figure>
                        <p class="text-base text-white font-medium">Build your dynamic menus.</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-2.svg" alt="check-circle-2.svg">
                        </figure>
                        <p class="text-base text-white font-medium">General rating & feedback plus rating for each menu item.</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-2.svg" alt="check-circle-2.svg">
                        </figure>
                        <p class="text-base text-white font-medium">Promote your special or daily offers</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-2.svg" alt="check-circle-2.svg">
                        </figure>
                        <p class="text-base text-white font-medium">Instantly hide or inactivate specific menu items</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-2.svg" alt="check-circle-2.svg">
                        </figure>
                        <p class="text-base text-white font-medium">Show on map</p>
                    </li>
                    <li class="flex gap-3 items-start">
                        <figure class="shrink-0">
                            <img src="~/assets/images/check-circle-2.svg" alt="check-circle-2.svg">
                        </figure>
                        <p class="text-base text-white font-medium">Links to your social media & web site</p>
                    </li>
                </ul>
                <a href="#" class="uppercase inline-block text-white bg-brand-red-60 rounded-full px-8 py-3 text-base sm:text-lg">GET MONTHLY PLAN</a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
export default {
    components: {
      Switch, 
    },
    setup() {
        const enabled = ref(false);
        return {
            enabled
        }
    },
  };

</script>