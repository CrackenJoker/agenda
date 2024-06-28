<template>
       <div>
        <Message :msg="msg" v-show="msg" />
        <div class="main-container">
            <div v-for="tarefa in tarefaPendente" :key="tarefa.id">
                <div class="tarefas" v-if="tarefa.estado==='Pendente'" @click="TrocarImagem(tarefa.id)">
                    <div class="icon">
                        <img :src="imagem" alt="Concluido" class="iconSvg">
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
import Message from './Message'
export default{
    name:'Pendente',
    components:{
        Message
    },
    data(){
        return{
            msg:'',
            tarefa:'',
            tarefaPendente:[],
            imagem:'/img/circulo.png',
        }
    },
    methods:{
        async tarefasCriadas(){
            const req = await fetch('http://localhost:3000/tarefas')
            const res = await req.json()
            this.tarefaPendente=res
        },
        async TrocarImagem(id){
            const data='Concluida'
            const dataJson=JSON.stringify({estado:data})
            const req = await fetch(`http://localhost:3000/tarefas/${id}`,{
                method:'PATCH',
                headers:{"Content-Type":"application/json"},
                body:dataJson
            })
            const res = await req.json()
            if(id){
                const data = JSON.stringify(res)
                const concluida = await fetch(`http://localhost:3000/concluidas`,{
                    method:"POST",
                    headers:{"Content-type":"application/json"},
                    body:data
                })
                const resposta = await concluida.json()
                console.log(resposta)
            }
                this.imagem ='/img/ok.svg'
                this.msg=res.nome + ' Concluida'
                setTimeout(()=>{
                    this.msg=''
                },3000)   
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