<template>
    <div>

        <!-- ***** Header Area Start ***** -->

        <!-- ***** Header Area End ***** -->

        <!-- ***** Main Banner Area Start ***** -->
        <div class="page-heading" id="top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner-content">
                            <h2>Check Our Products</h2>
                            <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ***** Main Banner Area End ***** -->


        <!-- ***** Products Area Starts ***** -->
        <section class="section" id="products">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading">
                            <h2>Our Latest Products</h2>
                            <span>Check out all of our products.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4" v-for="(item,index) in pageOfItems" :key="index">
                        <div class="item">
                            <router-link  :to="{name:'SingleProduct', query:{id:item.id} }">
                                <div class="thumb">
                                    <div class="hover-content">
                                        <ul>
                                            <li><router-link :to="{name:'SingleProduct', query:{id:item.id} }"><i class="fa fa-eye"></i></router-link></li>
                                            <li><a href="single-product.html"><i class="fa fa-star"></i></a></li>
                                            <li><router-link :to="{name:'Login',query: {id:item.id} }"><i class="fa fa-shopping-cart"></i></router-link></li>
                                        </ul>
                                    </div>
                                    <img :src="item.image" alt="">
                                </div>
                                <div class="down-content">
                                    <h4>{{item.title}}</h4>
                                    <span>${{item.price}}</span>
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-12 text-center">
                        <jw-pagination :pageSize=6 :items="data" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
                    </div>
                </div>
            </div>
        </section>
        <!-- ***** Products Area Ends ***** -->
        

    </div>
</template>

<script>
import setHeader from '../utils/setFuncAxiosHeader'

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
export default {
    name:'Products',
    components:{},
    data(){
        return{
            data:[],
            pageOfItems:[],
            customLabels
        }
    },
    created(){
        this.getAllProducts();
        // console.log(window.localStorage.getItem('token'))
    },
    methods:{
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },

        async getAllProducts(){
            await this.axios.get(`https://fakestoreapi.com/products`,setHeader(window.localStorage.getItem('token')))
            .then((response) => {
                this.data = response.data
            })
            console.log(window.localStorage.getItem('token'))
        },
    }

}
</script>

<style>

.page-link{
    color: black;
    margin: 0 5px;
}
.first, .last{
    display: none !important;
}
.page-item.active .page-link{
    color: white;
    background-color: black;
    border-color: black;
}
</style>
