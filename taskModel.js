let tasks = []; // armazenamento em memória, pode substituir por DB

export const getTasks = () => tasks;
export const getTaskById = id => tasks.find(t => t.id === id);
export const createTask = task => { tasks.push(task); return task; };
export const updateTask = (id, data) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...data };
  return tasks[index];
};
export const deleteTask = id => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};
