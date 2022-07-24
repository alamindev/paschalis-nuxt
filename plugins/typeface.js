import noto from   "typeface-noto-sans";
import poppins from "typeface-poppins";
import  roboto from "typeface-roboto"; 
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(noto);
    nuxtApp.vueApp.use(poppins);
    nuxtApp.vueApp.use(roboto);
});
