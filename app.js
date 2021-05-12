new Vue({
    el: "#app",

    data: {

        eMailList: [],
        times: "",
        tempList: [],
        loading: false

    },

    methods: {

        eMailGenerator(times) {
            this.times = ""
            this.eMailList = ""
            const secTempList = [];
            this.loading = true;

            for (let index = 0; index < times; index++) {
                axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {

                    secTempList.push(resp.data.response);

                    if (secTempList.length == times) {
                        this.tempList = secTempList;
                        this.render();
                    }
                });
            }
        },

        render() {
            this.eMailList = this.tempList;
            console.log(this.eMailList);
            this.loading = false;
        }
    },

    mounted() {


    },
})