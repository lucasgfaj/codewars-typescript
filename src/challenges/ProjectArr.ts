export default class Project {

    private tasks: number[][];

    public constructor() {
        this.tasks = [];
    }

    public addDependency(task1: number, task2: number): void {

        const maxTask = Math.max(task1, task2);

        while (this.tasks.length <= maxTask) {
            this.tasks.push([]);
        }

        this.tasks[task1].push(task2);
    }

    public isPossible(): boolean {

        const visited = new Array(this.tasks.length).fill(false);
        const recStack = new Array(this.tasks.length).fill(false);

        const hasCycle = (task: number): boolean => {
            if (recStack[task]) return true;
            if (visited[task]) return false;

            visited[task] = true;
            recStack[task] = true;

            for (let i = 0; i < this.tasks[task].length; i++) {
                const neighbor = this.tasks[task][i];

                if (hasCycle(neighbor)) {
                    return true;
                }
            }
            recStack[task] = false;
            return false;
        }

        for (let i = 0; i < this.tasks.length; i++) {
            if (!visited[i]) {
                if (hasCycle(i)) return false;
            }
        }

        return true;
    }
}

// import Project from "./Grafos/Project";

// const myProject = new Project();

// myProject.addDependency(1, 2);
// myProject.addDependency(2, 4);
// myProject.addDependency(3, 4);
// myProject.addDependency(4, 5);
// console.log(myProject.isPossible());

// myProject.addDependency(5, 2);
// console.log(myProject.isPossible());