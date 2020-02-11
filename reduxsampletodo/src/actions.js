const addItemAction = (data) => {
    return { type: "ADD_TODO", text: data }
}
const deleteItemAction = (index) => {
    return { type: "DELETE_TODO", delindex: index }
}
export { addItemAction, deleteItemAction };