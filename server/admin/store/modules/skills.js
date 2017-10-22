
const skills = {
    state: {
        data: []
    },
    getters:{
        skills(state){
            return state.data;
        }
    },
    mutations:{
        addNewSkill(state, skill){
            state.data.push(skill)
        },
        removeSavedSkill(state, id){
            state.data = state.data.filter(skill=>skill.id != id);
        },
        changePercentData(state, changeData){
            state.data.forEach(function(skill) {
                if(skill.id==changeData.id){
                    skill.percents=changeData.percent;
                }
            });
        }   
    },
    actions: {
        fetchSkills({state, rootGetters}) {
            const { $http } = rootGetters;
            // $http.get('/admin/components/about/data.json').then(response =>{
            //     state.data = response.body;
            // }), error =>{
            //     console.error(error);
            // }
           //ajax
        }
    }
}

export default skills;