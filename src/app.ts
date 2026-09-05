interface Tasks {
    id: number;
    title: string;
    completed: boolean;
}

let tasks: Tasks[] = [
    {id: 1, title: "Estudar", completed: true}
]


function addTask(title: string): void {
    tasks.push({
        id: tasks.length + 1,
        title,
        completed: false
    });
}

function taskCompleted(id: number): void {
    const taskCompleted = tasks.find(ActualTask => ActualTask.id === id);

    if(taskCompleted){
        taskCompleted.completed = true;
    }
}

addTask("Teste1")
addTask("Teste2")
addTask("Teste3")
taskCompleted(7)
taskCompleted(3)


console.log(tasks)

