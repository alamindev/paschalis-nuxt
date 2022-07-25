import noto from   "typeface-noto-sans";
import poppins from "typeface-poppins";
import  roboto from "typeface-roboto"; 
import fira from "typeface-fira-sans"; 
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(noto);
    nuxtApp.vueApp.use(poppins);
    nuxtApp.vueApp.use(roboto);
    nuxtApp.vueApp.use(fira);
});
