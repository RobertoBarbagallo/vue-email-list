new Vue({
    el: "#app",

    data: {

        eMailList: [],
        times: 10

    },

    mounted() {

        const tempList =[]

        for (let index = 0; index < this.times; index++) {
            axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                tempList.push(resp.data.response);

                if(tempList.length === this.times){
                    this.eMailList = tempList
                }
            });
        }
    }

})