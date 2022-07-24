<template>
    <div class="login">
        <p v-if="isWrong">Username or Password is wrong!!!</p>
        <p v-if="isEmpty">fill the blanks</p>
        <input type="text" v-model="fields.username" placeholder="Username">
        <input type="password" v-model="fields.password" placeholder="Password">
        <button @click="login()">Login</button>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            id:null,
            fields:{
                username:'',
                password:''
            },
            isWrong:false,
            isEmpty:false,
        }
    },
    created(){
        this.id = this.$route.query.id
        if(this.$store.state.isLogin == true){
            this.$router.push('/Products')
        }
    },
    methods:{
        login(){
            // if(Object.keys(this.fields).length <= 1){
            if((this.fields.username && this.fields.password) == ""){
                this.isWrong = false;
                this.isEmpty = true;
            }
            else{
                let dataLogin={}
                dataLogin.username = this.fields.username
                dataLogin.password = this.fields.password

                this.axios.post('https://fakestoreapi.com/auth/login', {
                username: dataLogin.username,
                password: dataLogin.password
                })
                .then(Response=>{
                    console.log(Response.data.token);
                    window.localStorage.setItem('isLogin',true)
                        this.$store.commit('changeIsLogin', true)
                        this.$router.push({name:'Products'})
                        console.log(this.isLogin)
                })
                .catch(err=>{
                    this.isEmpty = false;
                    this.isWrong = true;
                })
            }
        }
    }
}
</script>

<style scoped>
    .login{
        margin: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
    }
</style>