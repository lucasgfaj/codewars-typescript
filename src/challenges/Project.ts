export default class Project {

    private adjenctList: Map<number, number[]>;

    public constructor() {
        this.adjenctList = new Map();
    }

    public addDependency(task1: number, task2: number): void {
                                                                 
        if (!this.adjenctList.has(task1)) {
            this.adjenctList.set(task1, []);
        }
        this.adjenctList.get(task1)!.push(task2);

        if (!this.adjenctList.has(task2)) {
            this.adjenctList.set(task2, []);
        }
    }

    public isPossible(): boolean {

        const visited = new Set<number>();
        const recStack = new Set<number>();

        const hasCycle = (node: number): boolean => {
            if (recStack.has(node)) return true;
            if (visited.has(node)) return false;

            visited.add(node);
            recStack.add(node);

            for (let i = 0; i < (this.adjenctList.get(node) || []).length; i++) {
                const neighbor = this.adjenctList.get(node)![i];
                if (hasCycle(neighbor)) {
                    return true;
                }
            }
            recStack.delete(node);
            return false;
        }

       for(const node of this.adjenctList.keys()) {
            if (!visited.has(node)) {
                if (hasCycle(node)) {
                    return false; 
                }
            }
        }

        return true;
    }
}