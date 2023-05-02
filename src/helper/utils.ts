export const findProjectById = (id:number,projects:any)=>{
    return projects.find((project:any)=>project.id===id) 
}