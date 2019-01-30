var app = new Vue({
    el: '#app',
    data: {
        product: 'boots',
        inStock:true,
        image:'./assets/blue-socks.jpeg',
        details:["gender nuetrol", "80% cotton", "20% polyester"],
        variants:[
            {
                variantId:120,
                variantColor:"blue",
                variantImage:'./assets/blue-socks.jpeg'
            },
            {
                variantId:122,
                variantColor:"green",
                variantImage:'./assets/green-socks.png'
            }
        ],
        cart:0
    },
    methods:{
        addToCart: function(){
            this.cart +=1;
        },
        updateProduct: function(variantImage){
            this.image = variantImage;
        }
    }
});