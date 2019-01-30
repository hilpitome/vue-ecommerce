var app = new Vue({
    el: '#app',
    data: {
        product: 'boots',
        inStock:true,
        image:'./assets/socks.png',
        details:["gender nuetrol", "80% cotton", "20% polyester"],
        variants:[
            {
                variantId:120,
                variantColor:"blue"
            },
            {
                variantId:122,
                variantColor:"greed"
            }
        ]
    }
});