<template>
  <div>
    <div class="" v-if="!isMobile"> 
      <div class="bg-softGray h-screen w-screen flex justify-center items-center flex-col p-4">
                <img :src="require('@/static/img/empty.png')">
                <p class="text-textSecondary font-normal text-center mt-2 tracking-wide text-sm leading-8">Please use mobile device for using this application</p>
               
        </div>
    </div>
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
        this.getScreen();

        });
  },
  methods:{
    getScreen(){
      (window.innerWidth < 767) ? this.isMobile = true : this.isMobile = false;
    }
  }
}
</script>
