export const findProjectById = (id: number | string, projects: any) => {
  return projects.find((project: any) => project.pId === id);
};
