// 接收两个参数：state和action
const initState = {
  count: 0
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'add_action':
      return {
        count: state.count + 1
      }
    default:
      return state;
  }
}

export default reducer