import Vue from "vue";
import vueMq from "vue-mq";

Vue.use(vueMq,{
    breakpoints:{
        mobile:600,
        tablet:960,
        laptop:1120,
        desktop:1904,
    },
    defaultBreakpoint:'xs'
})