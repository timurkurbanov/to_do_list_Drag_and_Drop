const initialData = {
    task: {
        'task-1': { id: 'task-1', content: 'Learn React'},
        'task-2': { id: 'task-2', content: 'Practice new skills'},
        'task-3': { id: 'task-3', content: 'Learn JavaScript'},
        'task-4': { id: 'task-4', content: 'Enjoy free time'},
    },
    columns: {
        'column-1': {
        id: 'column-1',
        title: 'To do',
        taskId: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1'],
};
export default initialData;