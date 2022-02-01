<template>
  <div v-if="todos.length > 0">
    <todo-item v-for="todo in todos" :todo="todo" :key="todo.id" @toggle="$emit('toggle', todo.id)" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>
