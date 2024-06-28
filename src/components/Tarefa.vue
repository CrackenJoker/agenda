<template>
    <div>
        <Message :msg="msg" v-show="msg" />
        <div class="main-container">
            <div class="tarefa" >
                <input type="text" name="" id="inpTarefa" v-model="tarefa">
                <button id="btnTarefa" @click="criarTarefa()">Criar Tarefa</button>
            </div>

            <div v-show="tarefa" v-for="tarefa in tarefaExistente" :key="tarefa.id">
                <div class="tarefas"  @click="TrocarImagem(tarefa.id)">
                    <div v-if="tarefa.estado==='Concluida'" class="icon">
                        <img :src="feita" alt="Concluido" class="iconSvg">
                    </div>
                    <div v-else class="icon">
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
import { setInterval } from 'core-js';
import Message from './Message.vue'
export default{
    name:'Tarefa',
    components:{
        Message
    },
    data(){
        return{
            feita:'/img/ok.svg',
            imagem:'/img/circulo.png',
            tarefa:'',
            msg:'',
            tarefaExistente:[]

        }
    },
    methods:{
        async tarefasCriadas(){
            const req = await fetch('http://localhost:3000/tarefas')
            const data =await req.json()
            this.tarefaExistente = data
        },
        async criarTarefa(){
            const data = {
                nome:this.tarefa,
                estado:'Pendente'
            }
            const dataJson = JSON.stringify(data)
            const req = await fetch('http://localhost:3000/tarefas',{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:dataJson
            })
            this.tarefa = ''
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
    flex-direction: column;
    background-color: white;
    box-shadow: 10px 10px 10px gray;
}

.tarefa{
    display: flex;
    margin: 25px;
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
    background-color: whitesmoke;
    box-shadow: 5px 25px 25px gray;
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
#inpTarefa{
    width: 80%;
    padding: 10px;
    padding-bottom: 20px;
    border-radius:8px;
}
#btnTarefa{
    width:10%;
    padding:10px;
    margin:5px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-radius:8px;
}
</style>