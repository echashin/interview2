import axios from "axios";

export const todoModule = {
  state: () => ({
    todos: [],
    isLoading: false,
    page: 1,
    limit: 10,
    totalPages: 9999
  }),
  getters: {
    markedTodos(state) {
      return [...state.todos];
    }
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    }
  },
  actions: {
    async fetchTodos({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
          {
            params: {
              _page: state.page,
              _limit: state.limit
            }
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setTodos", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
      }
    }
  },
  namespaced: true
};
