<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 items-start"> 
    <Disclosure as="div" v-for="faq in faqs" :key="faq.question"  v-slot="{ open }" class="bg-white rounded-[40px] sm:rounded-[60px] shadow-[14px_41px_100px_0_rgba(49,89,221,0.12)]">
        <DisclosureButton class="bg-white w-full cursor-pointer flex justify-between items-center py-4 sm:py-6 px-6 sm:px-12 rounded-full " :class="open ? 'shadow-[14px_41px_100px_0_rgba(49,89,221,0.12)]' : 'shadow-none'">
            <p class="text-brand-dark-100 text-[19px] sm:text-2xl"> {{ faq.question }}</p>
            <svg :class="[open ? 'rotate-90' : 'rotate-0', 'transform']" width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8196 16.2922C18.6115 15.5002 18.6115 14.1804 17.8196 13.3885L5.8529 1.42177C4.973 0.541861 3.65314 0.541861 2.86122 1.42177L0.83744 3.35756C0.0455258 4.23746 0.0455258 5.55732 0.83744 6.34924L9.37252 14.8843L0.83744 23.3314C0.0455258 24.1233 0.0455258 25.4432 0.83744 26.3231L2.86122 28.2589C3.65314 29.1388 4.973 29.1388 5.8529 28.2589L17.8196 16.2922Z" fill="#7CABFF"/>
            </svg>
        </DisclosureButton>
        <DisclosurePanel  class="px-6 sm:px-12 py-6 sm:py-8">
            <p class="text-[15px] leading-[1.8] sm:text-[19px] text-[#3E4162] text-opacity-80">    {{ faq.answer }}</p>
        </DisclosurePanel>
    </Disclosure>
    </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel
    },
    setup() {
        const faqs = [
            {
                question: "What is delicious?",
                answer:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard ",
            },
            {
                question: "What is delicious?",
                answer:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard ",
            },
            {
                question: "What is delicious?",
                answer:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard ",
            },
            {
                question: "What is delicious?",
                answer:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard ",
            },
            {
                question: "What is delicious?",
                answer:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard ",
            },
            {
                question: "What is delicious?",
                answer:
                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard ",
            },
        ];
        return {
            faqs
        }
    }
}
</script> 
 