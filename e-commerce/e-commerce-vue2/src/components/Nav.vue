<template>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <router-link to="/Products" class="logo">
                            <img src="@/assets/images/logo.png">
                        </router-link>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li class="scroll-to-section"><router-link to="/Check-out">To card</router-link></li>
                            <li @click="logOut()"><a>logout</a></li>
                            <!-- <li class="scroll-to-section"><a href="index.html">Men's</a></li> -->
                            <!-- <li class="scroll-to-section"><a href="index.html">Women's</a></li>
                            <li class="scroll-to-section"><a href="index.html">Kid's</a></li>
                            <li class="submenu">
                                <a href="javascript:;">Pages</a>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="products.html">Products</a></li>
                                    <li><a href="single-product.html">Single Product</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section"><a href="index.html">Explore</a></li> -->
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
<script>

export default ({
    methods:{
        logOut(){
            this.$store.commit('changeIsLogin', false)
            this.$router.push('/')
        }
    }
})
</script>
