<template>
  <div>
    <h1>TO DO:</h1>
    <todo-list :todos="list" />
  </div>
</template>

<script>
import todoList from "@/components/TodoList";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    todoList,
  },
  methods: {
    ...mapActions({
      fetchTodos: "todo/fetchTodos",
    }),
  },
  computed: {
    ...mapGetters({
      list: "todo/markedTodos",
    }),
  },
  mounted() {
    this.fetchTodos();
  },
};
</script>

<style>
body {
  padding: 0;
}

#app {
  font-family: "Roboto", helvetica, arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  background: linear-gradient(
    135deg,
    rgba(65, 184, 131, 0.9),
    rgba(52, 73, 94, 0.9)
  );

  font-size: 1.5em;
}
</style>
