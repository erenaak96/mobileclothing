<template>
  <div>
    <!-- TOP BAR -->
    <div class="flex justify-between items-center w-full p-4">
      <div class="search w-4/5 relative">
        <input placeholder="Search" type="text" class="bg-softGray rounded-xl h-10 focus:outline-none pl-10 w-full">
        <span class="svg-icon icons-search bg-blue absolute"></span>
      </div>
       <nuxt-link to="/cart" class="bg-softGray rounded-full h-10 w-10 flex items-center justify-center">
                <span class="svg-icon icons-bag bg-blue"></span>
       </nuxt-link>
    </div>
    <div class="flex w-full px-4 pb-4 overflow-x-auto">
      <span v-for="(filter, index) in filters" :key="index" v-bind:class="{'text-white bg-blue' : index === 0 }"
       class="mr-3.5 px-4 min-w-max py-2 rounded-xl  font-medium text-base border border-blue">{{filter}}</span>
    </div>
    <!-- TOP BAR END  -->
    <div class="w-full p-4 flex flex-wrap justify-between">
        <SingleProduct
          v-for="(prod,index) in products"
          :key="index"
          :productLink="prod.slug"
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
            products: [//ELİMİZDE APİ SERVİSİ OLMADIĞI İÇİN DEMO DATA KOYUYORUZ
                {
                    name: "Leather Jacket",
                    price: "49.00",
                    desc: "Very cool leather jacket.",
                    slug:"leather-jacket",
                    image: "https://d1wqzb5bdbcre6.cloudfront.net/971e3d041fc7abb6f1724ee7be2d874bba6661ed71b888788f1c032463ad0d2a/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333557a616c5249536b52754f474e7051546c4866475a735833526c633352666330744e645664316446525062465a5364306b325456525352584233554842493030464d63494a657236"
                },
                {
                    name: "Purple Hoodie",
                    price: "48.00",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    slug:"purple-hoodie",
                    image: "https://d1wqzb5bdbcre6.cloudfront.net/106af32feee3b76918ccb50937b91d8176a504bb7269136b58812ce93568dbaf/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333557a616c5249536b52754f474e7051546c4866475a735833526c63335266617a6450543368364d465661595659325232466c556b46614e586f794d485a68303030554a6d6a483238"
                }
            ],
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