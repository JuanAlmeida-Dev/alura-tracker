import Project from "./Project";

export default interface Task{
    time: number,
    desc: string,
    project: Project
};