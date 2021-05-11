new Vue({
    el: "#app",

    data:{

        eMailList = []

    },

    mounted(){
        axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
            console.log(resp)
     
        }) 
    }

})