<template>
  <div class="card">
       <div class="flex justify-between items-center container p-4">
            <span @click="$router.go(-1)" class="bg-softGray rounded-full h-10 w-10 flex items-center justify-center">
                <span class="svg-icon icons-chevron-left bg-blue absolute"></span>
            </span>
            <nuxt-link to="/" class="bg-softGray rounded-full h-10 w-10 flex items-center justify-center">
                <span class="svg-icon icons-close bg-blue"></span>
            </nuxt-link>
        </div>
        <h2 class="font-bold text-blue text-2xl leading-8 mx-auto text-center">Cart</h2>
        <div class="w-full p-4">
            <div class="cart-item p-4 mt-3.5 bg-softGray rounded-xl flex justify-between w-100 items-center" v-for="(item,index) in getCardData" :key="index"> 
                <div class="flex items-center">
                    <img class="w-14 h-14 object-contain" :src="item.image">
                    <div class="flex flex-col ml-4">
                        <p class="text-sm font-normal text-textSecondary">{{item.name}} ({{item.size}})</p>
                        <div class="rounded-lg bg-white px-2 py-1 max-w-max mt-2">
                            <Counter :count.sync="item.qty" @click.native="log(item)"/>
                        </div>
                    </div>
                </div>
                <span class="text-lg font-bold text-blue">${{item.price}}</span>
            </div>
            <div class="w-100 flex justify-between mt-4">
                <p class="text-sm font-normal text-textSecondary">Total</p>
               <span class="text-xl font-bold text-blue">${{calculatedPrice}}</span>
            </div>
        </div>


  </div>
</template>

<script>
export default {
    name:"Card",
    data(){
        return{
            cardData: [],
            calculatedPrice: 0, 
        }
    },
    computed:{
        getCardData:{
            get(){
                this.cardData= JSON.parse(localStorage.getItem("cart"));
                return this.cardData
            },
        }
    },
    mounted(){
        this.calculateCardTotal()
    },
    methods:{
        calculateCardTotal(){
            this.cardData.map((item) =>{
               let totalPrice = item.qty * item.price; 
               this.calculatedPrice = this.calculatedPrice + totalPrice;
            })
        },
        log(item){
            console.log('changes')
            this.$store.commit('updateCart', item);
            this.cardData = JSON.parse(localStorage.getItem("cart"));
            this.calculatedPrice = 0;
            this.calculateCardTotal();
            console.log(this.$store.state.cart);
        }
    },

}
</script>

<style lang="scss">

</style>