<template>
  <div>
    <div class="" v-if="!isMobile"> Please use mobile device for using this application </div>
    <Nuxt class="header-spacer main-layout" v-else/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isMobile: true,
    };
  },
  mounted(){
    this.getScreen();
     window.addEventListener('resize', (e)=>{
        this.getScreen()
        console.log("resize");

        });
  },
  methods:{
    getScreen(){
      (window.innerWidth < 767) ? this.isMobile = true : this.isMobile = false;
        console.log(this.isMobile , window.innerWidth);
    }
  }
}
</script>
