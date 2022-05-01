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
    <div class="container p-4 flex flex-wrap justify-between">
        <SingleProduct
          v-for="(prod,index) in products"
          :key="index"
          :productLink="prod.url"
          :productName="prod.name"
          :productPrice="prod.price"
          :productImage="prod.image"
        />
    </div>
  </div>
</template>

<script>
import SingleProduct from "../components/SingleProduct";
export default {
    name: "IndexPage",
    data() {
        return {
            filters: [
                "Popular",
                "Best Seller",
                "New",
                "Special"
            ],
            products: [
                {
                    name: "Leather Jacket",
                    price: "49.00",
                    desc: "Very cool leather jacket.",
                    url:"/qweq",
                    image: "https://d1wqzb5bdbcre6.cloudfront.net/971e3d041fc7abb6f1724ee7be2d874bba6661ed71b888788f1c032463ad0d2a/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333557a616c5249536b52754f474e7051546c4866475a735833526c633352666330744e645664316446525062465a5364306b325456525352584233554842493030464d63494a657236"
                },
                {
                    name: "Leather Jacket",
                    price: "49.00",
                    desc: "Very cool leather jacket.",
                    url:"/qweq",
                    image: "https://d1wqzb5bdbcre6.cloudfront.net/971e3d041fc7abb6f1724ee7be2d874bba6661ed71b888788f1c032463ad0d2a/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333557a616c5249536b52754f474e7051546c4866475a735833526c633352666330744e645664316446525062465a5364306b325456525352584233554842493030464d63494a657236"
                },
                {
                    name: "Leather Jacket",
                    price: "49.00",
                    desc: "Very cool leather jacket.",
                    url:"/qweq",
                    image: "https://d1wqzb5bdbcre6.cloudfront.net/971e3d041fc7abb6f1724ee7be2d874bba6661ed71b888788f1c032463ad0d2a/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333557a616c5249536b52754f474e7051546c4866475a735833526c633352666330744e645664316446525062465a5364306b325456525352584233554842493030464d63494a657236"
                }
            ]
        };
    },
    components: { SingleProduct }
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