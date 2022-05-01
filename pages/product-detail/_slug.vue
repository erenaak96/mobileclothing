<template>
  <div class="bg-softGray">
      <!-- TOP BAR -->
    <div class="flex justify-between items-center container p-4">
      <div class="bg-white rounded-full h-10 w-10 flex items-center justify-center">
        <span class="svg-icon icons-search bg-blue absolute"></span>
      </div>
      <div class="bg-white rounded-full h-10 w-10 flex items-center justify-center">
        <span class="svg-icon icons-bag bg-blue"></span>
      </div>
    </div>
    <!-- TOP BAR END -->
    <img class="mx-auto max-h-36 object-contain " :src="pageProduct[0].image">
    <div class="flex sizes justify-center w-full my-4">
        <div class="relative mr-3.5" v-for="(size, index) in sizes" :key="index" >
            <input type="radio" name="size" :id="size" :value="size"  v-model="selectedSize">
            <label :for="size" class="px-4 min-w-max py-2 rounded-xl  font-medium text-xs border border-blue"
        
             >{{size}}</label>
        </div>
    </div>
    <div class="w-full rounded-t-3xl p-4 bg-white">
        <div class="w-full flex justify-between items-center">
            <h2 class="font-bold text-blue text-xl leading-8">{{pageProduct[0].name}}</h2>
        </div>
        <span class="font-semibold text-mango text-xl leading-8">$ {{pageProduct[0].price}}</span>
        <p class="text-textSecondary font-normal mt-2 tracking-wide text-sm leading-6">{{pageProduct[0].desc}}</p>
        <!-- RECOMMENDED PROD -->
        <div class="w*100 flex justify-between items-center mt-4">
            <h2 class="font-semibold text-blue text-xl leading-8">Recommended Products</h2>
            <nuxt-link to="/" class="text-textSecondary font-normal tracking-wide text-sm leading-6">See all</nuxt-link>
        </div>
        <div class="container flex flex-wrap justify-between">
            <SingleProduct
            v-for="(prod,index) in products"
            :key="index"
            :productLink="prod.url"
            :productName="prod.name"
            :productPrice="prod.price"
            :productImage="prod.image"
            />
        </div>
        <p class="text-textSecondary font-normal mt-2 tracking-wide text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lorem at justo fringilla euismod. Nunc et dapibus ipsum. Cras a rhoncus elit. Fusce quis elementum elit. Vestibulum suscipit iaculis magna, sed porta velit iaculis at. Morbi eget metus sed ante malesuada ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
    </div>
    <div class="fixed buttons w-full p-4 items-center justify-between flex">
        <button class="bg-blue min-w-min rounded-xl flex items-center justify-center mr-5">
            <span class="svg-icon icons-plus bg-softGray"></span>
        </button>
        <button class="bg-mango text-softGray rounded-xl w-full  flex items-center justify-center">
           Add to card
        </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProductDetail",
    data(){
        return{
              sizes:["S","M","L","XL"],
              pageProduct: [{
                    name: "Leather Jacket",
                    price: "49.00",
                    desc: "Very cool leather jacket.",
                    url:"/qweq",
                    image: "https://d1wqzb5bdbcre6.cloudfront.net/971e3d041fc7abb6f1724ee7be2d874bba6661ed71b888788f1c032463ad0d2a/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333557a616c5249536b52754f474e7051546c4866475a735833526c633352666330744e645664316446525062465a5364306b325456525352584233554842493030464d63494a657236"
                }],
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
                }
            ],
            selectedSize: "S",
        }
    }
}
</script>

<style lang="scss">
.buttons{
    bottom: 10px;
    button{
        min-height: 3.25rem;
        min-width: 3.25rem;
    }
}
.sizes{
    div{
        input[type=radio]{
            display: none;
            &:checked{
                + label{
                    background:#181A37;
                    color: white;
                }
            }
        }
    }
}
</style>