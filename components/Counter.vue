<template>
  <div class="flex items-center counter">
      <button @click="decrementCount()"><span class="svg-icon icons-minus bg-orange"></span></button>
      <p class="mx-4 text-xs font-semibold">{{count}}</p> 
      <button @click="incrementCount()"><span class="svg-icon icons-plus bg-orange"></span></button>
  </div>
</template>

<script>
export default {
    props:["count"],
    methods:{
        incrementCount(){
            this.count++;
        },
        decrementCount(){
            this.count > 0 ? this.count-- : '';
        }
    }
}
</script>

<style lang="scss">
.counter{
    .svg-icon{
        max-width: 12px;
        max-height:15px;
    }
}
</style>