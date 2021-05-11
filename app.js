new Vue({
    el: "#app",

    data:{

        eMailList: [],
        times: 10

    },

    mounted(){

            for (let index = 0; index < this.times; index++) {
                axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
                this.eMailList.push(resp.data.response)
            }) 
            }
           console.log(this.eMailList)
      
    }

})