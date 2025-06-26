

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
  
    main.append(projectTitle, todoList, addTaskBtn);
  
    container.append(sidebar, main);
    document.body.appendChild(container);
  }
  