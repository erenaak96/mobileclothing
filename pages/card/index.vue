<template>
  <div class="card">
      {{getCardData}}
  </div>
</template>

<script>
export default {
    name:"Card",
    data(){
        return{
            cardData: [],
        }
    },
    computed:{
        getCardData:{
            get(){
                this.cardData= JSON.parse(localStorage.getItem("card"));
                return this.cardData
            },
        }
    },
    mounted(){
        this.calculateCard()
    },
    methods:{
        calculateCard(){
            const sameProduct = this.getCardData.find(cartItem => cartItem.size === cartItem.size);
            console.log(sameProduct);
        }
    },

}
</script>

<style lang="scss">

</style>