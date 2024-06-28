<template>
    <div class="container-message">
        <p>{{ msg }}</p>
    </div>
</template>
<script>
export default{
    name:'Message',
    props:{
        msg:String,
    }
}
</script>
<style scoped>
.container-message{
    color:rgb(105, 82, 82);
    background-color:#ccffe7;
    border:2px solid #B8DAFF;
    border-radius:5px;
    padding:10px;
    max-width: 800px;
    margin:30px auto;
}
.container-message p{
    margin: 0 auto;
    text-align: center;
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    font-weight: bold
}
</style>