<template>
    <header class="pt-4 lg:pt-8 relative z-40 px-4">
        <div class="container mx-auto">
            <div class="flex items-center justify-between lg:justify-start md:items-start gap-5 xl:gap-10">
                <figure class="shrink-0">
                    <img class="w-[50px] h-[68px] md:w-[70px] md:h-auto lg:w-auto lg:h-auto" src="~/assets/images/logo.svg" alt="logo">
                </figure>
                <nav  :class="isopen ? 'right-0' : '-right-[999px]'" class="flex lg:justify-between shadow-2xl lg:shadow-none flex-col lg:flex-row pt-16 z-[9999] lg:pt-4 fixed lg:static w-64  sm:w-96 lg:w-full bg-white lg:bg-transparent  top-0 transition-all duration-300  bottom-0 h-full lg:h-auto px-8 lg:px-0">
                    <ul class="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center pb-5 lg:pb-0">
                        <li><a href="#" class="px-3 xl:px-5 inline-block font-medium text-base xl:text-[17px] uppercase text-brand-dark-100 font-noto">HOME</a></li>
                        <li><a href="#" class="px-3 xl:px-5 inline-block font-medium text-base xl:text-[17px] uppercase text-brand-dark-100 font-noto">INTRO</a></li>
                        <li><a href="#" class="px-3 xl:px-5 inline-block font-medium text-base xl:text-[17px] uppercase text-brand-dark-100 font-noto">FEATURES</a></li>
                        <li><a href="#" class="px-3 xl:px-5 inline-block font-medium text-base xl:text-[17px] uppercase text-brand-dark-100 font-noto">PRICING</a></li>
                        <li><a href="#" class="px-3 xl:px-5 inline-block font-medium text-base xl:text-[17px] uppercase text-brand-dark-100 font-noto">FAQs</a></li>
                    </ul>
                    
                    <ul class="flex flex-col gap-5 lg:gap-0  lg:flex-row lg:items-center lg:gap-4">
                        <li class="xl:pr-6"><a href="#" class="px-3 xl:px-5 inline-block font-medium text-base xl:text-[17px] uppercase text-brand-dark-100 font-noto">FOR DINERS</a></li>
                        <li>
                            <a href="#" class="inline-block px-8 py-3 rounded-full font-medium text-base xl:text-[17px] text-brand-dark-100 border border-brand-green-light bg-white transition-all hover:bg-brand-green-light hover:text-white uppercase">SIGN IN</a>
                        </li>
                        <li>
                            <a href="#" class="inline-block px-8 py-3 rounded-full font-medium text-base xl:text-[17px] border border-brand-green-light hover:text-brand-green-light hover:bg-white transition-all bg-brand-green-light text-white uppercase">SIGN UP</a>
                        </li>
                    </ul>

                </nav>
                <div class="flex gap-4 items-center lg:hidden">
                    <button @click="openMenu" type="button" class="w-[53px] h-[53px] hover:bg-brand-green-light group bg-white  duration-200 transition-all  flex justify-center items-center rounded-full border border-brand-green-light ">
                        <svg class="fill-brand-green-light group-hover:fill-white" width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6284 19.6455H3.3459C2.8379 19.6455 2.42564 19.247 2.42564 18.7559V2.74305C2.42564 2.25199 2.83795 1.85347 3.3459 1.85347H11.6284C12.1374 1.85347 12.5487 1.45583 12.5487 0.963886C12.5487 0.471942 12.1374 0.0742188 11.6284 0.0742188H3.3459C1.82377 0.0742188 0.585083 1.27165 0.585083 2.74305V18.7559C0.585083 20.2273 1.82377 21.4247 3.3459 21.4247H11.6284C12.1374 21.4247 12.5487 21.027 12.5487 20.5351C12.5487 20.0432 12.1374 19.6455 11.6284 19.6455Z"  />
                            <path d="M22.4713 10.1167L16.876 4.77906C16.5153 4.43389 15.9318 4.43836 15.5748 4.78797C15.2177 5.13758 15.2214 5.70069 15.584 6.04587L19.5826 9.86046H8.86777C8.35886 9.86046 7.94751 10.2581 7.94751 10.75C7.94751 11.242 8.35886 11.6397 8.86777 11.6397H19.5826L15.584 15.4543C15.2214 15.7994 15.2186 16.3626 15.5748 16.7122C15.7551 16.8883 15.9926 16.9773 16.23 16.9773C16.4638 16.9773 16.6975 16.8919 16.876 16.721L22.4713 11.3834C22.6462 11.2162 22.7456 10.9884 22.7456 10.75C22.7456 10.5117 22.6471 10.2848 22.4713 10.1167Z" />
                        </svg>
                    </button>
                    <a href="#" class="w-[53px] h-[53px] flex justify-center items-center group hover:bg-white duration-200 transition-all bg-brand-green-light rounded-full border border-brand-green-light ">
                       <svg class="fill-white group-hover:fill-brand-green-light" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7338 13.2336C17.2636 13.0101 16.7838 12.8175 16.2956 12.6562C17.8767 11.4694 18.9014 9.5796 18.9014 7.45496C18.9014 3.87094 15.9856 0.955078 12.4015 0.955078C8.81749 0.955078 5.90167 3.87094 5.90167 7.45496C5.90167 9.58195 6.92865 11.4736 8.51276 12.6602C7.06137 13.138 5.69951 13.8815 4.50754 14.8619C2.32186 16.6598 0.802183 19.1674 0.228521 21.9231C0.048723 22.7865 0.264127 23.6733 0.819389 24.3561C1.37193 25.0355 2.19125 25.4252 3.0672 25.4252H14.839C15.3669 25.4252 15.7949 24.9973 15.7949 24.4693C15.7949 23.9414 15.3669 23.5135 14.839 23.5135H3.0672C2.65914 23.5135 2.41296 23.2857 2.30256 23.15C2.11191 22.9155 2.03812 22.6104 2.1001 22.3127C3.09205 17.5479 7.2948 14.0673 12.1481 13.95C12.2322 13.9532 12.3167 13.9548 12.4015 13.9548C12.4872 13.9548 12.5726 13.9532 12.6574 13.9499C14.1448 13.9848 15.5752 14.3242 16.9131 14.9602C17.39 15.1868 17.9601 14.9841 18.1868 14.5072C18.4134 14.0304 18.2107 13.4602 17.7338 13.2336ZM12.6347 12.0372C12.5571 12.0358 12.4794 12.0351 12.4015 12.0351C12.3244 12.0351 12.2473 12.0359 12.1702 12.0373C9.74735 11.9165 7.8134 9.90732 7.8134 7.45496C7.8134 4.92502 9.87162 2.86681 12.4015 2.86681C14.9315 2.86681 16.9897 4.92502 16.9897 7.45496C16.9897 9.9067 15.0567 11.9154 12.6347 12.0372Z"  />
                            <path d="M23.6809 19.9292H21.0523V17.3006C21.0523 16.7727 20.6243 16.3447 20.0964 16.3447C19.5685 16.3447 19.1405 16.7727 19.1405 17.3006V19.9292H16.5119C15.984 19.9292 15.556 20.3572 15.556 20.8851C15.556 21.413 15.984 21.8409 16.5119 21.8409H19.1405V24.4696C19.1405 24.9975 19.5685 25.4254 20.0964 25.4254C20.6243 25.4254 21.0523 24.9975 21.0523 24.4696V21.8409H23.6809C24.2088 21.8409 24.6367 21.413 24.6367 20.8851C24.6367 20.3572 24.2088 19.9292 23.6809 19.9292Z" />
                        </svg> 
                    </a>
                </div>
            </div>
        </div>
        <div @click="closeMenu"  :class="isopen ? 'opacity-100 visible' : ' opacity-0 invisible' " class="transition-all lg:hidden fixed inset-0 w-full h-full bg-black bg-opacity-20"></div>
    </header>
</template>

<script>
export default {
    setup() {
        let isopen = ref(false); 
         const openMenu = () =>  isopen.value = true
         const closeMenu = () =>  isopen.value = false
        return {
            isopen,
            openMenu,
            closeMenu
        }
    }
}
</script> 