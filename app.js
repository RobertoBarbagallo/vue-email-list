new Vue({
    el: "#app",

    data:{

        eMailList: [],

    },

    mounted(){
        axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
            this.eMailList.push(resp.data.response)
        console.log(this.eMailList)
        }) 
    }

})