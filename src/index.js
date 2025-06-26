import './style.css'
import { createLayout } from './domManager'
import { addProject, getProjects, setCurrentProject, getCurrentProject } from './projectManager';


createLayout();

addProjectBtn.addEventListener('click', () => {
    const name = prompt('Project name?');
    if (!name) return;
  
    addProject(name);
    renderProjects();
    setCurrentProject(name);
    renderCurrentProject();
  });
  