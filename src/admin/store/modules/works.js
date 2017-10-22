var works = {
    namespaced: true,
    state: {
        data: {},
    },
    actions: {
        addNewWork: function addNewWork(_ref, fields) {
            var state = _ref.state,
                rootGetters = _ref.rootGetters;

            console.log(fields);
        },
    },
};

export default works;