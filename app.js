new Vue({
    el: "#app",

    data: {

        eMailList: [],
        times: "",
        loading: false
    },

    methods: {

        eMailGenerator(times) {
            this.times = ""
            this.eMailList = ""
            const tempList = [];
            this.loading = true;

            for (let index = 0; index < times; index++) {
                axios.get(' https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {

                    tempList.push(resp.data.response);

                    if (tempList.length == times) {
                        this.render(tempList);
                    }
                });
            }
        },

        render(tempList) {
            this.eMailList = tempList;
            this.loading = false;
        }
    },

    mounted() {


    },
})