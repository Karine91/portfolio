const posts = {
    state: {
        data: [],
    },
    getters: {
        posts: ({ data }) => (data),
    },
    mutations: {
        addBlogPost(state, post) {
            state.data.push(post);
        },
        setPosts(state, posts){
            state.data = posts;
        },
    },
    actions: {
        getBlogPosts({state, commit, rootGetters}){
            const $http  = rootGetters.$http;
            $http.get('api/blog').then((res)=>{
                commit('setPosts', res.body);
            });
        },
        addBlogPost({state, commit, rootGetters}, data){
            const $http  = rootGetters.$http;
            commit('addBlogPost', data);
            $http.post('api/blog', data, {emulateJSON: true});
        },
    },
};

export default posts;