var app = new Vue({
    el: '#app',
    data: {
        product: 'boots',
        brand:'hlnation',
        selectedVariant:0,
        details:["gender nuetrol", "80% cotton", "20% polyester"],
        variants:[
            {
                variantId:120,
                variantColor:"blue",
                variantImage:'./assets/blue-socks.jpeg',
                variantQuantity: 10
            },
            {
                variantId:122,
                variantColor:"green",
                variantImage:'./assets/green-socks.png',
                variantQuantity: 0
            }
        ],
        cart:0
    },
    methods:{
        addToCart: function(){
            this.cart +=1;
        },
        updateProduct: function(index){
            this.selectedVariant = index;
            console.log(index)
        }
    },
    computed:{
        title(){
            return this.brand+' '+this.product+" here";
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        instock(){
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
});