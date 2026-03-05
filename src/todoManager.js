

import { getCurrentProject } from './projectManager';

export function addTodo({ title, description = '', dueDate = '', priority = 'low' }) {
  const project = getCurrentProject();
  if (!project) return;

  const todo = {
    title,
    description,
    dueDate,
    priority,
    completed: false,
  };

  project.todos.push(todo);
  return todo;
}

export function getTodos() {
  const project = getCurrentProject();
  return project ? project.todos : [];
}

export function removeTodo(index) {
  const project = getCurrentProject();
  if (project) {
    project.todos.splice(index, 1);
  }
}

//checkbox
export function toggleTodoComplete(index) {
    const project = getCurrentProject();
    if (project && project.todos[index]) {
      project.todos[index].completed = !project.todos[index].completed;
    }
  }
  
