var posts = {
    state: {
        data: [],
    },
    getters: {
        posts: function posts(_ref) {
            var data = _ref.data;
            return data;
        },
    },
    mutations: {
        addBlogPost: function addBlogPost(state, post) {
            state.data.push(post);
        },
    },
    actions: {},
};

export default posts;