

let projects = [];
let currentProject = null;

export function addProject(name) {
  const project = {
    name,
    todos: [],
  };
  projects.push(project);

  if (!currentProject) currentProject = project;
  return project;
}

export function getProjects() {
  return projects;
}

export function getCurrentProject() {
  return currentProject;
}

export function setCurrentProject(name) {
  const found = projects.find(p => p.name === name);
  if (found) {
    currentProject = found;
  }
}
