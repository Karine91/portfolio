const works = {
    namespaced: true,
    state: {
        data: {},
    },
    actions: {
        addNewWork({ state, rootGetters }, fields) {
            const $http = rootGetters.$http;
            $http.post('/admin/work', fields);
        },
    },
};

export default works;