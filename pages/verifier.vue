<template>
   <section class="bg-[url(~/assets/images/verifier/bg-banner.svg)] px-4 pt-10 sm:pt-20 pb-24 bg-no-repeat bg-cover bg-bottom">
        <div class="container mx-auto">
            <div class="w-[1120px] mx-auto max-w-full">
                <h1 class="text-white font-inter font-bold text-[33px] md:text-[40px] xl:text-[40px] 2xl:text-[58px] uppercase pb-8 leading-[1.3] text-center">Maximize your <span class="text-brand-blue-50">e-mails outreach</span></h1>
                <h2 class="text-white pb-6 text-center font-inter font-semibold text-[22px] xl:text-[32px] 2xl:text-[35px]">Clean your email lists. Reduce bounce rate. Increase engagement!</h2>
                <p class="text-base md:text-xl xl:text-2xl xl:!leading-[43px] text-center font-inter text-white">VerifyEmail is tested on millions of e-mail addresses, including mailboxes from ALL major e-mail providers, such as Gmail, Outlook, Yahoo, AOL and others...</p>
                <div class="py-6 sm:py-8 flex items-center justify-center gap-1">
                    <div class="inline-block border  border-[#FAFAFA] border-opacity-30 border-gradient-two rounded-full  p-1">
                        <div class="inline-block border border-[#FAFAFA]  border-opacity-50 rounded-full  p-1">
                            <a href="#" class="relative inline-block px-4 sm:px-8 py-2.5 bg-white text-brand-blue-900 rounded-full  font-semibold font-inter transition-all hover:bg-blue-500 hover:text-white">Sign up FREE</a>
                        </div>
                    </div>
                    <div class="inline-block border  border-[#FAFAFA] border-opacity-30 border-gradient-two rounded-full  p-1">
                        <div class="inline-block border border-[#FAFAFA]  border-opacity-50 rounded-full  p-1">
                            <a href="#" class="relative inline-block px-4 sm:px-8 py-2.5 bg-white text-brand-blue-900 rounded-full  font-semibold font-inter transition-all hover:bg-blue-500 hover:text-white">How it Works</a>
                        </div>
                    </div>
                </div>
                <div class="-mb-32 sm:-mb-64 md:-mb-80">
                    <figure class="relative">
                       <img class="w-full hidden sm:block" src="~/assets/images/verifier/dashboard-bg.png" alt="dashboard-bg.png">
                       <img class="w-full sm:hidden"  src="~/assets/images/verifier/dashboard-bg-mobile.png" alt="dashboard-bg-mobile.png">
                    </figure>
                </div>
            </div>
        </div>
   </section>
    <!-- start coding for Test VerifyEmail now!  area-->
   <section class="sm:-mt-96 sm:pt-[32rem] lg:pt-[28rem] pb-80 sm:bg-[url(~/assets/images/verifier/circle-bg.png)] bg-no-repeat  bg-right-top">
        <div class="container mx-auto">
            <div class="">
                <div class="bg-[url(~/assets/images/verifier/verifyemail-bg-mobile.png)] sm:bg-[url(~/assets/images/verifier/verifyemail-bg.png)] bg-no-repeat bg-center sm:bg-cover px-10 sm:px-10 pb-64 pt-40 sm:py-20 lg:py-32 xl:pt-40 xl:pb-40 2xl:pb-48">
                    <div class="w-[300px] sm:w-[500px] lg:w-[700px] xl:w-[900px] 2xl:w-[1100px] max-w-full mx-auto 2xl:pt-10">
                        <h2 class="text-2xl xl:text-[40px] font-roboto text-black text-center font-bold pb-2 lg:pb-6">Test VerifyEmail now!</h2>
                        <p class="text-base xl:text-xl 2xl:text-[25px] font-poppins text-center text-[#7B7B7B] !leading-loose">Enter any e-mail address and check below how fast and accurate is our system</p>
                        <div class="flex shadow-[13px_40px_98px_0_rgba(53,67,109,0.12)] my-5 sm:mt-2 pb-2 lg:mb-4 xl:mb-10 lg:mt-10 overflow-hidden rounded-full bg-white p-1.5 lg:p-2">
                            <input type="text" class="px-8 w-full py-1.5 lg:py-2 xl:py-3 text-[#5C35B9] text-base lg:text-2xl focus:border-0 focus:outline-none focus-visible:!outline-none focus:ring-0 " placeholder="Enter your Email">
                            <button type="button" href="#" class="inline-block shrink-0 px-6 sm:px-14 focus:border-0 focus:outline-none focus-visible:!outline-none focus:ring-0 py-1.5 lg:py-2.5 bg-gradient-to-tr to-brand-blue from-brand-lime  shadow-sign-up  rounded-full text-base 2xl:text-lg text-white font-semibold">Verify</button>
                        </div>  
                        <p class="text-black text-base xl:text-xl 2xl:text-[25px] font-poppins text-center">The form does not need an account. You are welcome to use it to test our service</p>
                    </div>
                </div>
            </div>
        </div>
   </section>
     <!-- start coding for Boost your efficiency  area-->
   <section class="pb-20 md:pb-40 pt-40 -mt-[30rem] sm:-mt-[28rem] sm:bg-[url(~/assets/images/verifier/circle-1.svg)] bg-no-repeat  bg-left-top">
        <div class="container mx-auto">
            <div class="w-[1114px] mx-auto max-w-full pb-12 px-4 md:px-0">
                <h2 class="text-[30px] leading-[1.3] sm:text-[40px] font-bold font-arimo text-center pb-6">Boost your efficiency and increase your engagement.</h2>
                <p class="text-center text-lg  sm:text-[21px] font-arimo text-[#537683] leading-loose">VerifyEmail is a great asset in the arsenal of any marketing team.
It enables you to easily maintain the hygiene of your data and ensure the consistency and accuracy of your mailing lists.</p>
            </div>
         <div >
            <VerifierBoostCardDesktop  v-if="isLargeScreen"/> 
             <VerifierBoostCardMobile v-if="isSm"/>
         </div>
        </div>
   </section>  
   <!-- start coding for demo screenshort area-->
   <section class="pt-20 px-4 sm:pt-28 md:pt-40 bg-[url(~/assets/images/verifier/demo-screen-bg.png)] bg-no-repeat bg-cover bg-top-center">
        <div class="container mx-auto">
            <div class="w-[1114px] mx-auto max-w-full ">
                <h2 class="text-[30px] leading-[1.3] sm:text-[40px] font-bold font-arimo text-center text-white"> Demo screenshot</h2>
            </div>
         <div> 
            <figure class="relative sm:-mt-10">
                <img class="w-full hidden sm:block" src="~/assets/images/verifier/demo-screenshort-desktop.png" alt="demo-screenshort-desktop.png">
                <img class="w-full sm:hidden  -mb-20 "  src="~/assets/images/verifier/demo-screenshort-mobile.png" alt="demo-screenshort-mobile.png">
            </figure> 
         </div>
        </div>
   </section>  
     <!-- start coding for expand successfully your business's area-->
   <section class="pb-20 md:pb-40 pt-24 mt-12 sm:bg-[url(~/assets/images/verifier/bg-2.png)] bg-no-repeat  bg-left-top">
        <div class="container mx-auto">
            <div class="w-[1205px] mx-auto max-w-full pb-12 px-4 md:px-0">
                <h2 class="text-[30px] leading-[1.3] sm:text-[40px] font-bold font-arimo text-center pb-6">Let us help you expand successfully your business's outreach!</h2>
                <p class="text-center text-lg  sm:text-[21px] font-arimo text-[#537683] leading-loose">VerifyEmail is a great asset in the arsenal of any marketing team.
It enables you to easily maintain the hygiene of your data and ensure the consistency and accuracy of your mailing lists.</p>
            </div>
         <div >
            <VerifierMarketingDesktop  v-if="isLargeScreen"/> 
            <VerifierMarketingMobile v-if="isSm"/>
         </div>
        </div>
   </section> 
    <!-- start coding for Sign Up Now for FREE  area-->
   <section class=" px-4 pt-48 md:pt-64 overflow-hidden bg-[url(~/assets/images/verifier/signup-bg.png)] bg-no-repeat bg-cover bg-top-center">
        <div class="container mx-auto">
            <div class="w-[1150px] mx-auto max-w-full relative"> 
               <div class="rounded-lg bg-white py-6 sm:py-16 px-4 sm:px-20 relative z-20">
                 <h2 class="text-[30px] leading-[1.3] sm:text-[40px] font-bold font-arimo text-center text-black pb-7">Sign Up Now <span class="text-brand-blue">for FREE</span></h2>
                    <p class="text-center text-lg  sm:text-[21px] font-arimo text-[#537683] leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mauris blandit viverra eget ut mi rhoncus at et. Consectetur rhoncus tempor maecenas condimentum morbi ornare. Viverra interdum mattis rutrum in consequat vulputate ut nisi. </p>
                    <div class="w-[715px] max-w-full mx-auto">
                         <div class="flex shadow-[13px_40px_98px_0_rgba(53,67,109,0.12)] my-10  pb-2  rounded-md bg-white p-1.5 lg:p-2">
                            <input type="text" class="px-8 w-full py-1.5 lg:py-2 xl:py-3 text-[#5C35B9] text-base lg:text-2xl focus:border-0 focus:outline-none focus-visible:!outline-none focus:ring-0 " placeholder="Lorem Ipsum is simply dummy text">
                            <button type="button" href="#" class="inline-block shrink-0 px-6 sm:px-14 focus:border-0 focus:outline-none focus-visible:!outline-none focus:ring-0 py-1.5 lg:py-2.5 bg-gradient-to-tr to-brand-blue from-brand-lime  shadow-sign-up  rounded-full text-base 2xl:text-lg text-white font-semibold">Sign Up</button>
                        </div>  
                        <p class="text-black text-base xl:text-xl 2xl:text-[23px] font-arimo text-center">Sign up now and get 100 e-mail validations every month for free.No credit card required!</p>
                    </div>
               </div>
                <figure class="absolute -top-20 -left-12 z-10">
                     <img  src="~/assets/images/verifier/dot.svg" alt="">
                </figure>
                <div class="absolute z-10 w-full h-full -right-7 -top-7 bg-white bg-opacity-50 rounded-lg "></div>
            </div>
         <div>  
         </div>
        </div>
   </section>   
    <!-- start coding for feature area-->
   <section class="pb-20 md:pb-40 pt-24 mt-12 ">
        <div class="container mx-auto">
            <div class="w-[1205px] mx-auto  max-w-full pb-12 px-4 md:px-0">
                <h2 class="text-[30px] leading-[1.3] sm:text-[40px] font-bold font-arimo text-center pb-6">Features</h2>
                <p class="text-center text-lg  sm:text-[21px] font-arimo text-[#537683] leading-loose">JUST SOME OF OUR EMAIL VERIFICATION KEY FEATURES</p>
            </div>
         <div >
            <VerifierFeatureDesktop  v-if="isLargeScreen"/> 
            <VerifierFeatureMobile v-if="isSm"/>
         </div>
        </div>
   </section> 
     <!-- start coding for How it works area-->
   <section class="pb-20 px-4 md:pb-24 pt-80 -mt-72 sm:bg-[url(~/assets/images/verifier/bg-3.png)] bg-no-repeat  bg-left-top">
        <div class="container mx-auto">
            <div class="flex items-center flex-col gap-8 lg:flex-row">
                <div class="lg:w-[350px] xl:w-[450px] max-w-full shrink-0">
                    <h2 class="font-bold font-arimo text-[30px] md:text-[40px] pb-2">How it works</h2>
                    <p class="md:text-[23px] font-arimo text-xl !leading-loose">Our app is constantly updated to make certain that the highest possible delivery rates are maintained. <br><br> Allow VerifyEmail to help you reduce bounce rates and better engage leads.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="order-1 shadow-[40px_50px_80px_0_rgba(95,148,226,0.21)] bg-white rounded-[16px] p-6 xl:p-8 2xl:p-14">
                        <figure class="pb-6">
                            <img src="~/assets/images/verifier/how-to-img-1.svg" alt="how to img one">
                        </figure>
                        <h2 class="text-black pb-4 font-bold font-noto text-2xl">Syntax Check</h2>
                        <p class="text-[#474749] text-opacity-80 !leading-[28px] text-base font-poppins">Upload and clean with accuracy and safety lists of any size. Removing invalid contacts will help you improve your deliverability rates and get more emails into the inboxes of your prospects. Don’t just send them emails. Reach them!</p>
                    </div>
                    <div class="order-1 md:order-2  bg-[#E2F2FF] rounded-[16px] p-6 xl:p-8 2xl:p-14">
                        <figure class="pb-6">
                            <img src="~/assets/images/verifier/how-to-img-2.svg" alt="how to img two">
                        </figure>
                        <h2 class="text-black pb-4 font-bold font-noto text-2xl">Domain Check</h2>
                        <p class="text-[#474749] text-opacity-80 !leading-[28px] text-base font-poppins">Upload and clean with accuracy and safety lists of any size. Removing invalid contacts will help you improve your deliverability rates and get more emails into the inboxes of your prospects. Don’t just send them emails. Reach them!</p>
                    </div>
                       <div class="order-4 md:order-3 bg-[#E2F2FF] rounded-[16px] p-6 xl:p-8 2xl:p-14">
                        <figure class="pb-6">
                            <img src="~/assets/images/verifier/how-to-img-3.svg" alt="how to img three">
                        </figure>
                        <h2 class="text-black pb-4 font-bold font-noto text-2xl">Mail Server Check</h2>
                        <p class="text-[#474749] text-opacity-80 !leading-[28px] text-base font-poppins">Keep low your hard bounces and high your sender rating. Ensure the accuracy of your communication and don’t allow any invalid emails to waste your time or affect your sender's reputation.</p>
                    </div>
                    <div class="order-3 md:order-4 shadow-[40px_50px_80px_0_rgba(95,148,226,0.21)] bg-white rounded-[16px] p-6 xl:p-8 2xl:p-14">
                        <figure class="pb-6">
                            <img src="~/assets/images/verifier/how-to-img-4.svg" alt="how to img four">
                        </figure>
                        <h2 class="text-black pb-4 font-bold font-noto text-2xl">Mailbox Check</h2>
                        <p class="text-[#474749] text-opacity-80 !leading-[28px] text-base font-poppins">Save time and money on email marketing. Don’t waste time on invalid contacts, instead fill your funnel with valid leads and connect with your prospects. Reach your audience easier and get closer on converting them.</p>
                    </div>
                 
                </div>
            </div>
        </div>
   </section> 
       <!-- start coding for Sign Up Now for FREE  area-->
   <section class="px-4 pt-48 md:pt-40 pb-20  bg-[url(~/assets/images/verifier/service-provider-bg.png)] bg-no-repeat bg-cover bg-top-center">
        <div class="container mx-auto">
            <div class="w-[980px] mx-auto max-w-full relative"> 
                <h2 class="text-[30px] leading-[1.3] sm:text-[40px] font-bold font-arimo text-center text-black pb-7">Compatible With All Major Email Service Providers</h2>
                <p class="text-center text-lg  sm:text-[21px] font-arimo text-black leading-loose">Our app is constantly updated to make certain that the highest possible delivery rates are maintained.
                Allow VerifyEmail to help you reduce bounce rates and better engage leads.</p> 
            </div>
            <div class="grid gap-3 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-20">
                <div class="rounded-[11px] bg-gradient-to-r from-white md:-mr-4 last:-mr-0 to-[#DAEBFF] px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                    <div class="pb-2 flex justify-center -mt-8 md:-mt-16 lg:-mt-20">
                        <img src="~/assets/images/verifier/star-icon.png" alt="star-icon">
                    </div>
                    <h2 class="text-[19px] text-center font-bold text-[#333672]">AOL</h2>
                    <div class="flex justify-center items-center py-6">
                        <div class="w-[48px] h-[1px] bg-[#0182FF]"></div>
                    </div>
                    <div class="space-y-6">
                        <p class="text-base text-center font-roboto text-[#7B8399] leading-loose">Our platform has been optimized to work with major email providers such as AOL.</p> 
                    </div>
                </div>
                <div class="rounded-[11px] bg-gradient-to-r  md:-mr-4 last:-mr-0 from-white to-[#DAEBFF] px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                    <div class="pb-2 flex justify-center -mt-8 md:-mt-16 lg:-mt-20">
                        <img src="~/assets/images/verifier/star-icon.png" alt="star-icon">
                    </div>
                    <h2 class="text-[19px] text-center font-bold text-[#333672]">Office 365</h2>
                    <div class="flex justify-center items-center py-6">
                        <div class="w-[48px] h-[1px] bg-[#0182FF]"></div>
                    </div>
                    <div class="space-y-6">
                        <p class="text-base text-center font-roboto text-[#7B8399] leading-loose">We have amazing verification connectivity with platforms such as Outlook.</p> 
                    </div>
                </div>
                <div class="rounded-[11px] bg-gradient-to-r  md:-mr-4 last:-mr-0 from-white to-[#DAEBFF] px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                    <div class="pb-2 flex justify-center -mt-8 md:-mt-16 lg:-mt-20">
                        <img src="~/assets/images/verifier/star-icon.png" alt="star-icon">
                    </div>
                    <h2 class="text-[19px] text-center font-bold text-[#333672]">Yandex</h2>
                    <div class="flex justify-center items-center py-6">
                        <div class="w-[48px] h-[1px] bg-[#0182FF]"></div>
                    </div>
                    <div class="space-y-6">
                        <p class="text-base text-center font-roboto text-[#7B8399] leading-loose">Our verification servers are welcome at major networks including Yandex.</p> 
                    </div>
                </div>
                <div class="rounded-[11px]  md:-mr-4 last:-mr-0 bg-gradient-to-r from-white to-[#DAEBFF] px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                    <div class="pb-2 flex justify-center -mt-8 md:-mt-16 lg:-mt-20">
                        <img src="~/assets/images/verifier/star-icon.png" alt="star-icon">
                    </div>
                    <h2 class="text-[19px] text-center font-bold text-[#333672]">Gmail</h2>
                    <div class="flex justify-center items-center py-6">
                        <div class="w-[48px] h-[1px] bg-[#0182FF]"></div>
                    </div>
                    <div class="space-y-6">
                        <p class="text-base text-center font-roboto text-[#7B8399] leading-loose">Our verification servers are welcome at major networks including Yandex.</p> 
                    </div>
                </div>
            </div>  
        </div>
   </section>  
        <!-- start coding for Pricing area area-->
   <section class="pt-20 md:pt-40 pb-20">
        <div class="container mx-auto">
            <div class="pb-14 px-4 "> 
                <h2 class="text-[30px] leading-[1.3] sm:text-[40px] font-bold font-arimo text-center text-black pb-7">Pricing</h2>
                <h3 class="text-[30px] font-bold font-arimo text-center text-black pb-5">Increase your email marketing outreach</h3>
                <p class="text-center text-lg  sm:text-[21px] font-arimo text-black leading-loose">We offer a scalable pricing so your costs are easy to estimate. The more e-mails you verify, the less rate you achieve.</p> 
            </div> 
            <div class="grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2">
                <div class="relative z-20 sm:rounded-[38px] shadow-[40px_50px_80px_0_rgba(95,148,226,0.21)] bg-[#C1DFFF] px-4 py-10 sm:px-10 sm:py-14">
                    <h2 class="text-[26px] sm:text-[32px] font-bold font-arimo text-black pb-4 text-center">Pay-As-You-Go Plan</h2>
                    <p class="text-xl sm:text-[26px] font-arimo text-[#0056AD] text-center pb-6 border-b border-white">How many emails you estimate monthly?</p>
                    <p class="text-lg sm:text-[22px] font-arimo text-[#0056AD] text-center pb-8 pt-6">Our minimum purchase size is 2,000 credits</p>
                    <div class="w-full rounded-full p-2 bg-white bg-opacity-50">
                        <div class="px-5 w-full rounded-full bg-white py-3">
                            <p class="text-[36px] font-bold font-arimo text-center text-[#0365C9]">2,000</p>
                        </div>
                    </div>
                    <div class="w-full py-10">
                        <div class="range-slider border border-[#B4C5DD] border-opacity-30 rounded-full px-2">
                            <input class="range-slider__range appearance-none w-full h-5 rounded-full bg-[#1189FF] ring-4 ring-[#F4F7FA] m-0 p-0" type="range" value="400" min="0" max="500"> 
                        </div> 
                    </div>
                    <div class="">
                        <h4 class="text-black font-normal font-arimo text-center pb-4 text-2xl">Your total</h4>
                        <h2 class="text-black font-bold text-center text-[55px] sm:text-[62px] pb-6">$16.00 USD</h2>
                      <div class="flex justify-center pb-10">  <a href="#" class="shadow-[0px_24px_41px_0_rgba(1,136,255,0.37)] inline-block px-8  text-center  2xl:px-8 py-3 bg-gradient-to-tr to-brand-blue from-brand-lime  rounded-full text-base 2xl:text-lg text-white font-semibold">Sign Up for Free</a></div>
                        <p class="text-center font-arimo text-xl text-[#5E90C5]">
                            Sign up now and get 100 e-mail validations <br> every month for free. <br> No credit card required!
                        </p>
                    </div>
                </div>
                <div class="lg:-ml-5 relative z-10  sm:rounded-[38px] shadow-[40px_50px_80px_0_rgba(95,148,226,0.21)] bg-white  py-6 sm:pl-10 lg:pl-24 2xl:pl-40 sm:pr-10 sm:py-14">
                    <h2 class="text-[27px] px-4 sm:px-7 2xl:px-10 font-bold text-black font-arimo pb-10">Pay-As-You-Go Rates</h2>
                    <div class="flex px-4 sm:px-7 2xl:px-10 justify-between items-center pb-6">
                        <h4 class="text-[21px] font-bold font-arimo text-[#3C3C3C]">Emails</h4>
                        <h4 class="text-[21px] font-bold font-arimo text-[#3C3C3C]">Price per email</h4>
                    </div>
                    <ul>
                        <li class="px-4 sm:px-7 2xl:px-10 sm:hover:rounded-full hover:bg-[#C1DFFF] relative z-20 group  py-4">
                            <div class="flex w-full justify-between items-center relative hover:after:content-none after:absolute after:left-0 after:-bottom-[21px] after:z-10 after:w-full after:h-1 after:border-b after:border-dashed  after:border-[#A8A8A8]">
                                <p class="text-[23px] text-[#3C3C3C] font-arimo">up to <strong class="text-brand-blue"> 100</strong></p>
                                <p class="text-brand-blue text-[23px] font-bold font-arimo uppercase">FREE</p>
                            </div>
                        
                        </li>
                        <li class="px-4 sm:px-7 2xl:px-10 sm:hover:rounded-full hover:bg-[#C1DFFF] relative z-20 group  py-4">
                             <div class="flex w-full justify-between items-center relative group-hover:after:content-none after:absolute after:left-0 after:-bottom-[21px] after:z-10 after:w-full after:h-1 after:border-b after:border-dashed  after:border-[#A8A8A8]">
                                <p class="text-[23px] text-[#3C3C3C] font-arimo">up to <strong class="text-brand-blue"> 5,000</strong></p>
                                <p class="text-[#3C3C3C] text-[23px] font-arimo">$0.008 USD</p>
                            </div> 
                        </li>
                        <li class="px-4 sm:px-7 2xl:px-10 sm:hover:rounded-full hover:bg-[#C1DFFF] relative z-20 group  py-4">
                             <div class="flex w-full justify-between items-center relative group-hover:after:content-none after:absolute after:left-0 after:-bottom-[21px] after:z-10 after:w-full after:h-1 after:border-b after:border-dashed  after:border-[#A8A8A8]">
                                <p class="text-[23px] text-[#3C3C3C] font-arimo">up to <strong class="text-brand-blue"> 20,000</strong></p>
                                <p class="text-[#3C3C3C] text-[23px] font-arimo">$0.0065 USD</p>
                            </div> 
                        </li>
                        <li class="px-4 sm:px-7 2xl:px-10 sm:hover:rounded-full hover:bg-[#C1DFFF] relative z-20 group  py-4">
                             <div class="flex w-full justify-between items-center relative group-hover:after:content-none after:absolute after:left-0 after:-bottom-[21px] after:z-10 after:w-full after:h-1 after:border-b after:border-dashed  after:border-[#A8A8A8]">
                                <p class="text-[23px] text-[#3C3C3C] font-arimo">up to <strong class="text-brand-blue">100,000</strong></p>
                                <p class="text-[#3C3C3C] text-[23px] font-arimo">$0.0060 USD</p>
                            </div> 
                        </li>
                        <li class="px-4 sm:px-7 2xl:px-10 sm:hover:rounded-full hover:bg-[#C1DFFF] relative z-20 group  py-4">
                             <div class="flex w-full justify-between items-center relative group-hover:after:content-none after:absolute after:left-0 after:-bottom-[21px] after:z-10 after:w-full after:h-1 after:border-b after:border-dashed  after:border-[#A8A8A8]">
                                <p class="text-[23px] text-[#3C3C3C] font-arimo">up to <strong class="text-brand-blue"> 250.000</strong></p>
                                <p class="text-[#3C3C3C] text-[23px] font-arimo">$0.0050 USD</p>
                            </div> 
                        </li>
                        <li class="px-4 sm:px-7 2xl:px-10 sm:hover:rounded-full hover:bg-[#C1DFFF] relative z-20 group  py-4">
                             <div class="flex w-full justify-between items-center relative group-hover:after:content-none after:absolute after:left-0 after:-bottom-[21px] after:z-10 after:w-full after:h-1 after:border-b after:border-dashed  after:border-[#A8A8A8]">
                                <p class="text-[23px] text-[#3C3C3C] font-arimo">up to <strong class="text-brand-blue"> 500.000</strong></p>
                                <p class="text-[#3C3C3C] text-[23px] font-arimo">$0.0040 USD</p>
                            </div> 
                        </li>
                        <li class="px-4 sm:px-7 2xl:px-10 sm:hover:rounded-full hover:bg-[#C1DFFF] relative z-20 group  py-4">
                             <div class="flex w-full justify-between items-center relative group-hover:after:content-none after:absolute after:left-0 after:-bottom-[21px] after:z-10 after:w-full after:h-1 after:border-b after:border-dashed  after:border-[#A8A8A8]">
                                <p class="text-[23px] text-[#3C3C3C] font-arimo">up to <strong class="text-brand-blue"> 1,000,000</strong></p>
                                <p class="text-[#3C3C3C] text-[23px] font-arimo">$0.0020 USD</p>
                            </div> 
                        </li>
                    </ul>

                    <div class="mt-14 px-4 sm:px-7 2xl:px-10">
                        <h2 class="text-[29px] text-black font-bo font-arimo pb-5">Enterprise</h2>
                        <p class="text-[#537683] text-[19px]  font-arimo">Need a customized solution? <a href="#" class="font-bold text-brand-blue hover:underline">Contact us</a></p>
                    </div>
                </div>
            </div>
        </div>
   </section>   
        <!-- start coding for How it works area-->
   <section class="pb-20 px-4 md:pb-32 pt-40 -mt-40 sm:bg-[url(~/assets/images/verifier/bg-2.png)] bg-no-repeat  bg-left-top">
        <div class="container mx-auto"> 
            <div class="w-[1290px] max-w-full mx-auto">
                <h2 class="font-bold font-arimo text-center text-[30px] md:text-[40px] pb-8">Included in all subscriptions:</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 pt-10 gap-x-2 gap-y-10 sm:gap-y-20 2xl:gap-x-6">
                    <div class="relative">
                        <div class="shadow-common h-[220px] sm:h-[250px]  rounded-[32px] bg-white px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                                <div class="pb-3 sm:pb-5 flex justify-center">
                                    <img src="~/assets/images/verifier/subscription.png" alt="image">
                                </div>
                                <h2 class="text-sm sm:text-[17px] text-center font-bold text-[#333672] leading-loose">Credits never expire</h2> 
                            </div>
                        <div class="absolute shadow-common  rounded-[32px] bg-white -bottom-4 sm:-bottom-8 h-24 w-[80%] left-[50%] translate-x-[-50%] z-10"></div>
                    </div>  
                    <div class="relative">
                        <div class="shadow-common h-[220px] sm:h-[250px]  rounded-[32px] bg-white px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                                <div class="pb-3 sm:pb-5 flex justify-center">
                                    <img src="~/assets/images/verifier/subscription.png" alt="image">
                                </div>
                                <h2 class="text-sm sm:text-[17px] text-center font-bold text-[#333672] leading-loose">Safe, pay-as-you-go pricing</h2> 
                            </div>
                        <div class="absolute shadow-common  rounded-[32px] bg-white -bottom-4 sm:-bottom-8 h-24 w-[80%] left-[50%] translate-x-[-50%] z-10"></div>
                    </div>  
                    <div class="relative">
                        <div class="shadow-common h-[220px] sm:h-[250px]  rounded-[32px] bg-white px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                                <div class="pb-3 sm:pb-5 flex justify-center">
                                    <img src="~/assets/images/verifier/subscription.png" alt="image">
                                </div>
                                <h2 class="text-sm sm:text-[17px] text-center font-bold text-[#333672] leading-loose">Volume-based rates</h2> 
                            </div>
                        <div class="absolute shadow-common  rounded-[32px] bg-white -bottom-4 sm:-bottom-8 h-24 w-[80%] left-[50%] translate-x-[-50%] z-10"></div>
                    </div>  
                    <div class="relative">
                        <div class="shadow-common h-[220px] sm:h-[250px]  rounded-[32px] bg-white px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                                <div class="pb-3 sm:pb-5 flex justify-center">
                                    <img src="~/assets/images/verifier/subscription.png" alt="image">
                                </div>
                                <h2 class="text-sm sm:text-[17px] text-center font-bold text-[#333672] leading-loose">100 validations per month for free</h2> 
                            </div>
                        <div class="absolute shadow-common  rounded-[32px] bg-white -bottom-4 sm:-bottom-8 h-24 w-[80%] left-[50%] translate-x-[-50%] z-10"></div>
                    </div>  
                    <div class="relative">
                        <div class="shadow-common h-[220px] sm:h-[250px]  rounded-[32px] bg-white px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                                <div class="pb-3 sm:pb-5 flex justify-center">
                                    <img src="~/assets/images/verifier/subscription.png" alt="image">
                                </div>
                                <h2 class="text-sm sm:text-[17px] text-center font-bold text-[#333672] leading-loose">Online chat support</h2> 
                            </div>
                        <div class="absolute shadow-common  rounded-[32px] bg-white -bottom-4 sm:-bottom-8 h-24 w-[80%] left-[50%] translate-x-[-50%] z-10"></div>
                    </div>  
                    <div class="relative">
                        <div class="shadow-common h-[220px] sm:h-[250px]  rounded-[32px] bg-white px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                                <div class="pb-3 sm:pb-5 flex justify-center">
                                    <img src="~/assets/images/verifier/subscription.png" alt="image">
                                </div>
                                <h2 class="text-sm sm:text-[17px] text-center font-bold text-[#333672] leading-loose">Mailbox Geo-Location</h2> 
                            </div>
                        <div class="absolute shadow-common  rounded-[32px] bg-white -bottom-4 sm:-bottom-8 h-24 w-[80%] left-[50%] translate-x-[-50%] z-10"></div>
                    </div>  
                    <div class="relative">
                        <div class="shadow-common h-[220px] sm:h-[250px]  rounded-[32px] bg-white px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                                <div class="pb-3 sm:pb-5 flex justify-center">
                                    <img src="~/assets/images/verifier/subscription.png" alt="image">
                                </div>
                                <h2 class="text-sm sm:text-[17px] text-center font-bold text-[#333672] leading-loose">Detailed verification status</h2> 
                            </div>
                        <div class="absolute shadow-common  rounded-[32px] bg-white -bottom-4 sm:-bottom-8 h-24 w-[80%] left-[50%] translate-x-[-50%] z-10"></div>
                    </div>  
                    <div class="relative">
                        <div class="shadow-common h-[220px] sm:h-[250px]  rounded-[32px] bg-white px-5 2xl:px-10 py-6 sm:py-12 relative z-20"> 
                                <div class="pb-3 sm:pb-5 flex justify-center">
                                    <img src="~/assets/images/verifier/subscription.png" alt="image">
                                </div>
                                <h2 class="text-sm sm:text-[17px] text-center font-bold text-[#333672] leading-loose">No credit card needed for the free tier</h2> 
                            </div>
                        <div class="absolute shadow-common  rounded-[32px] bg-white -bottom-4 sm:-bottom-8 h-24 w-[80%] left-[50%] translate-x-[-50%] z-10"></div>
                    </div>  
                </div>  
            </div> 
        </div>
   </section> 
         <!-- start coding for Sign Up Now for FREE  area-->
   <section class="px-4 pt-20 sm:pt-48 md:pt-32 pb-48  bg-[url(~/assets/images/verifier/faq-bg.png)] bg-no-repeat bg-cover bg-top-center">
        <div class="container mx-auto">
            <div class="w-[980px] mx-auto max-w-full relative pb-8"> 
                <h2 class="text-[30px] leading-[1.3] sm:text-[40px] font-bold font-arimo text-center text-white pb-7">F.A.Q</h2>
            </div>
          <VerifierFaq/>
        </div>
   </section>  
     <!-- start coding for Test VerifyEmail now!  area-->
   <section class="-mt-48  pb-32 sm:bg-[url(~/assets/images/verifier/circle-bg.png)] bg-no-repeat  bg-right-top">
        <div class="container mx-auto">
            <div class="">
                <div class="bg-[url(~/assets/images/verifier/verifyemail-bg-mobile.png)] sm:bg-[url(~/assets/images/verifier/verifyemail-bg.png)] bg-no-repeat bg-center sm:bg-cover px-10 sm:px-10 pb-64 pt-40 sm:py-20 lg:py-32 xl:pt-40 xl:pb-40 2xl:pb-48">
                    <div class="w-[300px] sm:w-[500px] lg:w-[700px] xl:w-[900px] 2xl:w-[1100px] max-w-full mx-auto 2xl:pt-10">
                        <h2 class="text-2xl xl:text-[40px] font-roboto text-black text-center font-bold pb-2 lg:pb-6">"Do you have questions?</h2>
                        <p class="text-base xl:text-xl 2xl:text-[25px] font-poppins text-center text-[#7B7B7B] !leading-loose">You can review some of the commonly asked questions we receive, or you may contact or chat with us if you'd like further information."</p>
                        <div class="flex justify-center pt-6">
                            <a href="#" class="inline-block px-5  2xl:px-8 py-3 bg-gradient-to-tr to-brand-blue from-brand-lime  shadow-sign-up  rounded-full text-base 2xl:text-lg text-white font-semibold"> Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
</template>

<script> 
definePageMeta({
  layout: "verifier",
});  
import { useMediaQuery } from '@vueuse/core' 
export default { 
    head: {
        title: "Verifier",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Build up your premium, digital and responsive restaurant menu in minutes."
            }
        ]
    }, 
    setup() {
        const isLargeScreen = useMediaQuery('(min-width: 961px)') 
        const isSm = useMediaQuery('(max-width: 960px)') 
        return {
            isLargeScreen,
            isSm
        }
    }
}
</script>
