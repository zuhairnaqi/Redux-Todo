const initialState = {
    sentence: '',
    todoList: [],
    editMode: false,
    position: 0
}

const reducerName = (state = initialState, action) => {
    const newState = { ...state };
    const { type, value } = action;
    const { sentence, todoList } = newState;
    switch (type) {
        case 'INPUTCHANGE':
            newState.sentence = value;
            break;
        case 'ADD':
            newState.todoList.push(sentence);
            newState.sentence = "";
            break;
        case 'DELETE':
            newState.todoList = todoList.filter(val => val !== value);
            break;
        case 'EDIT':
            newState.position = value;
            newState.sentence = todoList[value];
            newState.editMode = true;
            break;
        case 'UPDATE':
            newState.todoList[newState.position] = sentence;
            newState.sentence = "";
            newState.editMode = false;
            break;
        default: console.log('Empty');
    }
    return newState;
}


export default reducerName;