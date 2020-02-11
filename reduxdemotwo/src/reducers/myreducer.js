
const storereducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return { age: state.age + 1 }
        case 'DEC':
            return { age: state.age - 1 }
        default:
            return state;
    }
}
export default storereducer;