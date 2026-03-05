import { addProject, getProjects, setCurrentProject, getCurrentProject } from './projectManager';
import { addTodo, getTodos, removeTodo, toggleTodoComplete } from './todoManager';

  

export function createLayout() {
    const container = document.createElement('div');
    container.id = 'container';
  
    // Sidebar
    const sidebar = document.createElement('aside');
    sidebar.id = 'sidebar';
  
    const sidebarTitle = document.createElement('h2');
    sidebarTitle.textContent = 'Your Projects';
  
    const projectList = document.createElement('ul');
    projectList.id = 'project-list';
  
    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project-btn';
    addProjectBtn.textContent = '+ New Project';

    addProjectBtn.addEventListener('click', () => {
        const name = prompt('Project name?');
        if (!name) return;
      
        addProject(name);
        renderProjects();
        setCurrentProject(name);
        renderCurrentProject();
      });
      
  
    sidebar.append(sidebarTitle, projectList, addProjectBtn);
  
    // Main content
    const main = document.createElement('main');
    main.id = 'main-content';
  
    const projectTitle = document.createElement('h2');
    projectTitle.id = 'current-project-title';
    projectTitle.textContent = 'Select a project';
  
    const todoList = document.createElement('ul');
    todoList.id = 'todo-list';
  
    const addTaskBtn = document.createElement('button');
    addTaskBtn.id = 'add-task-btn';
    addTaskBtn.textContent = '+ New Task';
    addTaskBtn.addEventListener('click', () => {
        const title = prompt('Task title?');
        if (!title) return;
      
        const description = prompt('Description (optional):');
        const dueDate = prompt('Due date (yyyy-mm-dd):');
        const priority = prompt('Priority (low / medium / high):', 'low');
      
        addTodo({ title, description, dueDate, priority });
        renderCurrentProject(); // refresh task list
      });
      
  
    main.append(projectTitle, todoList, addTaskBtn);
  
    container.append(sidebar, main);
    document.body.appendChild(container);
    


  
   function renderProjects() {
    projectList.innerHTML = ''; // clear
  
    getProjects().forEach(project => {
      const li = document.createElement('li');
      li.textContent = project.name;
  
      li.addEventListener('click', () => {
        setCurrentProject(project.name);
        renderCurrentProject();
      });
  
      projectList.appendChild(li);
    });
  }
  
  function renderCurrentProject() {
    const current = getCurrentProject();
    if (current) {
      projectTitle.textContent = current.name;
      todoList.innerHTML = '';
  
      getTodos().forEach((todo, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if (todo.completed) li.classList.add('completed');
      
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
      
        checkbox.addEventListener('change', () => {
          toggleTodoComplete(index);
          renderCurrentProject(); // re-render
        });
      
        const content = document.createElement('div');
        content.classList.add('todo-content');
        content.innerHTML = `
          <strong>${todo.title}</strong>
          <p>${todo.description}</p>
          <small>Due: ${todo.dueDate} | Priority: ${todo.priority}</small>
        `;
      
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
          removeTodo(index);
          renderCurrentProject();
        });
      
        li.append(checkbox, content, deleteBtn);
        todoList.appendChild(li);
      });
      
    }
  }
  
}