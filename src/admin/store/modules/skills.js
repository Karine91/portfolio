
var skills = {
    state: {
        data: [],
    },
    getters: {
        skills: function skills(state) {
            return state.data;
        },
    },
    mutations: {
        addNewSkill: function addNewSkill(state, skill) {
            state.data.push(skill);
        },
        removeSavedSkill: function removeSavedSkill(state, id) {
            state.data = state.data.filter(function (skill) {
                return skill.id != id;
            });
        },
        changePercentData: function changePercentData(state, changeData) {
            state.data.forEach(function (skill) {
                if (skill.id == changeData.id) {
                    skill.percents = changeData.percent;
                }
            });
        },
    },
    actions: {
        fetchSkills: function fetchSkills(_ref) {
            var state = _ref.state,
                rootGetters = _ref.rootGetters;
            var $http = rootGetters.$http;
            // $http.get('/admin/components/about/data.json').then(response =>{
            //     state.data = response.body;
            // }), error =>{
            //     console.error(error);
            // }
            //ajax
        },
    },
};

export default skills;