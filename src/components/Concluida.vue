<template>
    <div>
     <div class="main-container">
         <div v-for="tarefa in tarefaPendente" :key="tarefa.id">
             <div class="tarefas" v-if="tarefa.estado==='Concluida'">
                 <div class="icon">
                     <img :src="feita" alt="Concluido" class="iconSvg">
                 </div>
                 <div class="nome">
                     <p>{{ tarefa.nome }}</p>
                 </div>
             </div>
         </div>
         
     </div>
    </div>
</template>
<script>
export default{
 name:'Concluida',
 data(){
     return{
         tarefa:'',
         tarefaPendente:[],
         feita:'/img/ok.svg'
     }
 },
 methods:{
     async tarefasCriadas(){
         const req = await fetch('http://localhost:3000/concluidas')
         const res = await req.json()
         this.tarefaPendente=res
     }
 },
 mounted(){
     this.tarefasCriadas()
     setInterval(()=>{
         this.tarefasCriadas()
     },2000)
     
 }
}
</script>
<style scoped>
.main-container{
 max-width: 1200px;
 margin: 0 auto;
 border-radius: 8px;
 border: 1px solid black;
 margin-top: 20px;
 padding: 30px;
 display: flex;
 flex-direction: column
}

.tarefas{
 display: flex;
 margin: 25px;
 border-radius: 8px;
 border: 1px solid black;
 justify-content: space-between;
 width: 80%;
 padding: 20px;
 margin: 20px;
 align-items: center;

}
.tarefas .icon{
 margin-left: 10px;
}
.tarefas .nome{
 max-width: 200px;
 display: flex;
 flex-wrap: wrap;
}
.iconSvg{
 width: 40px;
 height: 40px;
}

</style>