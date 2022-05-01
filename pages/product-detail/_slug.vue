<template>
    <div>
        <div class="bg-softGray" v-if="($nuxt.$route.path === '/product-detail/leather-jacket') || ($nuxt.$route.path === '/product-detail/purple-hoodie')">
            <!-- TOP BAR -->
            <div class="flex justify-between items-center container p-4">
            <nuxt-link to="/" class="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                <span class="svg-icon icons-chevron-left bg-blue absolute"></span>
            </nuxt-link>
            <nuxt-link to="/card" class="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                <span class="svg-icon icons-bag bg-blue"></span>
            </nuxt-link>
            </div>
            <!-- TOP BAR END -->
            <img class="mx-auto max-h-36 object-contain " :src="pageProduct.image">
            <div class="flex sizes justify-center w-full my-4">
                <div class="relative mr-3.5" v-for="(size, index) in sizes" :key="index" >
                    <input type="radio" name="size" :id="size" :value="size"  v-model="selectedSize">
                    <label :for="size" class="px-4 min-w-max py-2 rounded-xl  font-medium text-xs border border-blue"
                
                    >{{size}}</label>
                </div>
            </div>
            <div class="w-full rounded-t-3xl p-4 bg-white pb-24">
                <div class="w-full flex justify-between items-center">
                    <h2 class="font-bold text-blue text-xl leading-8">{{pageProduct.name}}</h2>
                    <Counter :count.sync="quantity"/>
                    {{quantity}}
                </div>
                <span class="font-semibold text-mango text-xl leading-8">$ {{pageProduct.price}}</span>
                <p class="text-textSecondary font-normal mt-2 tracking-wide text-sm leading-6">{{pageProduct.desc}}</p>
                <!-- RECOMMENDED PROD -->
                <div class="w*100 flex justify-between items-center mt-4">
                    <h2 class="font-semibold text-blue text-xl leading-8">Recommended Products</h2>
                    <nuxt-link to="/" class="text-textSecondary font-normal tracking-wide text-sm leading-6">See all</nuxt-link>
                </div>
                <div class="container flex flex-wrap justify-between">
                    <SingleProduct
                    v-for="(prod,index) in products"
                    :key="index"
                    :productLink="prod.slug"
                    :productName="prod.name"
                    :productPrice="prod.price"
                    :productImage="prod.image"
                    />
                </div>
                <p class="text-textSecondary font-normal mt-2 tracking-wide text-sm mt-4 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lorem at justo fringilla euismod. Nunc et dapibus ipsum. Cras a rhoncus elit. Fusce quis elementum elit. Vestibulum suscipit iaculis magna, sed porta velit iaculis at. Morbi eget metus sed ante malesuada ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
            </div>
            <!-- ADD TO CARD BTNS -->
            <div class="fixed buttons w-full p-4 items-center justify-between flex">
                <button class="bg-blue min-w-min rounded-xl flex items  items-center justify-center mr-5">
                    <span class="svg-icon icons-plus bg-softGray"></span>
                </button>
                <button @click="addToCard()" class="bg-mango text-softGray rounded-xl w-full  flex items-center justify-center">
                Add to card
                </button>
            </div>
        </div>
        <!-- WRONG ROUTE VIEW -->
        <div class="bg-softGray h-screen w-screen flex justify-center items-center flex-col" v-else>
            <img :src="require('@/static/img/empty.png')">
            <p class="text-textSecondary font-normal mt-2 tracking-wide text-sm leading-8">Sorry, we couldn't find this product.</p>
            <nuxt-link to="/" class="bg-mango mt-4 text-softGray rounded-xl w-2/3 h-12 flex justify-center items-center">
                Go Homepage
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Counter from "../../components/Counter.vue";
export default {
    name: "ProductDetail",
    components: { Counter },
    mounted() {
        this.getRouteData();
    },
    data() {
        return {
            sizes: ["S", "M", "L", "XL"],
            pageProduct: [],
            quantity: 0,
            products: [
                {
                    name: "Leather Jacket",
                    price: "49.00",
                    desc: "Very cool leather jacket.",
                    slug: "leather-jacket",
                    image: "https://d1wqzb5bdbcre6.cloudfront.net/971e3d041fc7abb6f1724ee7be2d874bba6661ed71b888788f1c032463ad0d2a/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333557a616c5249536b52754f474e7051546c4866475a735833526c633352666330744e645664316446525062465a5364306b325456525352584233554842493030464d63494a657236"
                },
                {
                    name: "Purple Hoodie",
                    price: "48.00",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    slug: "purple-hoodie",
                    image: "https://d1wqzb5bdbcre6.cloudfront.net/106af32feee3b76918ccb50937b91d8176a504bb7269136b58812ce93568dbaf/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a644638785333557a616c5249536b52754f474e7051546c4866475a735833526c63335266617a6450543368364d465661595659325232466c556b46614e586f794d485a68303030554a6d6a483238"
                }
            ],
            selectedSize: "S",
        };
    },
    methods: {
        getRouteData() {
            const slug = $nuxt.$route.path; //API Servisleri ile çalışırken böyle bir kontrole gerek kalmıyor aslında asenkron olarak servis isteğinden gelen yanıta göre rota check atıyoruz fakat elimde servis olmadığı için böyle basic bi sorgu koydum
            const newSlug = slug.replace("/product-detail/", "");
            for (let prod = 0; prod < this.products.length; prod++) {
                // console.log(this.products[prod]);
                this.products[prod].slug === newSlug ? this.pageProduct = this.products[prod] : "";
            }
        },
        addToCard(){
            const sizedData = {
                    ...this.pageProduct,
                    size: this.selectedSize,
                };
            if(this.quantity > 0){
                for(let qty = 0; qty < this.quantity ; qty++){
                     this.$store.commit("_cardUpdate", sizedData);
                }
            }
            console.log(this.$store.state.cardData);
        }
    },
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