const baseUrl = import.meta.env.VITE_BASE_URL;


export const dummyServices = {
    getUsers: async () => {
        return await fetch(baseUrl + '/users')
            .then(res => res.json());
    },
    getPosts: async () => {
        return await fetch(baseUrl + '/posts')
            .then(res => res.json());
    }
}