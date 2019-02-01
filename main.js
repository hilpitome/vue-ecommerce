Vue.component('product',{
    template:" <div class=\"product\">\n" +
        "         <div class=\"product-image\">\n" +
        "             <img :src=\"image\" height=\"150\" width=\"120\">\n" +
        "         </div>\n" +
        "         <div class=\"product-info\">\n" +
        "             <div v-for=\"(variant, index) in variants\"\n" +
        "                  :key=\"variant.variantId\"\n" +
        "                  class=\"color-box\"\n" +
        "                  @mouseover=\"updateProduct(index)\"\n" +
        "                  :style=\"{backgroundColor:variant.variantColor}\"\n" +
        "             >\n" +
        "\n" +
        "             </div>\n" +
        "             <h1>{{title}}</h1>\n" +
        "             <p v-if=\"instock\">In stock</p>\n" +
        "             <p v-else>Out of stock</p>\n" +
        "             <p>shipping {{shipping}}</p> \n" +
        "             <ul>\n" +
        "                 <li v-for=\"detail in details\">{{detail}}</li>\n" +
        "             </ul>\n" +
        "\n" +
        "             <div>\n" +
        "                 <button v-on:click=\"addToCart\" :disabled=\"!instock\">Add to cart</button>\n" +
        "             </div>\n" +
        "         </div>\n" +
        "         \n" +
        "     </div>",
        props:{
            premium:{
                type: Boolean,
                required:false
            }
        },
        data(){
        return {
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

        }
    },
        methods:{
            addToCart: function(){
                this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
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
            },
            shipping(){
                if(this.premium) {
                    return "free";
                }

                    return '$2.99'

            }
        }
    }
    );





var app = new Vue({
    el: '#app',
    data:{
        premium:false,
        cart:[]
    },
    methods:{
        updateCart : function(id){
            this.cart.push(id);
        }
    }
})
