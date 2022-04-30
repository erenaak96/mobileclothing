<template>
  <div>
    <!-- TOP BAR -->
    <div class="flex justify-between items-center container p-4">
      <div class="search w-4/5 relative">
        <input placeholder="Search" type="text" class="bg-softGray rounded-xl h-10 focus:outline-none pl-10 w-full">
        <span class="svg-icon icons-search bg-blue absolute"></span>
      </div>
      <div class="bg-softGray rounded-full h-10 w-10 flex items-center justify-center">
        <span class="svg-icon icons-bag bg-blue"></span>
      </div>
    </div>
    <div class="flex container px-4 pb-4 overflow-x-auto">
      <span v-for="(filter, index) in filters" :key="index" v-bind:class="{'text-white bg-blue' : index === 0 }"
       class="mr-3.5 px-4 min-w-max py-2 rounded-xl  font-medium text-base border border-blue">{{filter}}</span>
    </div>
    <!-- TOP BAR END  -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
   return{
      filters:[
      "Popular","Best Seller", "New", "Special"
      ]
   }
  }
}
</script>
<style lang="scss">
.search{

  span{
    left:  0.875rem;
    top: calc(50% -  .625rem);
  }
}

</style>