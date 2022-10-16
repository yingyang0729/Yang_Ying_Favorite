(() => {
 
    const { createApp } = Vue

    createApp({
        created(){
            console.log('vue instance is created');
            //fetch the remote date here and pass it to the data object

            fetch('./data.json')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                //push the data into the vue instance
                // the "this" keyword inside of the vue instance always refers to the instance itself

                    this.remoteData = data;
            })

            .catch(error => console.error(error));
        },

        data() {
          return {
            welcome: 'my hobby, my passion, my loving',
            topic: 'My name is Ying. I list all my favorite things as below. You will understand more information about me if you want to click on the button.',

            //this is a array//
            //profs: ['joe','john','justin','jarrod'],//
            member: ['Design','Markting','Writing','Drama','Yoga','Travel'],
            remoteData: {}

          }
        },

        methods: {
            logicbutton() {
                console.log('clicked!');
            }
        }

      }).mount('#app');



})();