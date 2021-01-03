构建 store 和 reducer
1. 创建 reducer/index.js 文件，构建reducer来响应actions
2. 创建 store/index.js 文件，通过 createStore 方法，把我们的 reducer 传入进来
3. 在 app.js 中引入 store

创建页面结构

Provider 组件实现
1. 导入 Provider 组件，在 react-redux 中进行导入
2. 需要利用 Provider 组件，对我们整个结构进行包装
3. 给我们 Provider 组件设置 store 的属性，而这个值就是我们通过 createStore 构建出来的 store 实例对象

利用 connect 方法让组件与 store 关联
connect（mapStateToProps，mapDispatchToProps）（要加强的组件）
1. 接受数据的组件使用 mapStateToProps
2. 传递数据的组件使用 mapDispatchToProps

AddButton 发送 action
1. 导入 connect
2. 利用 connect 对组件进行加强
3. 实现 connect 第二个参数
4. 构建了一个函数 mapDispatchToProps（dispatch），dispatch就是用来发送 action 的
5. 在这个函数里返回一个对象，对象的key是方法名（sendAction），value是一个函数，用来调用 dispatch 去发送 action
6. 此时，组件内就可以通过 this.props 来拿到这个方法了

Count 接受 state
1. 导入 connect 方法
2. 利用 connect 对组件进行加强
3. Count 属于接收方，需要实现connect的第一个参数
4. 把 mapStateToProps 里面的 state 参数 return 出去， 我们才能在组件的内部获取到最新的数据
5. 只有 reducer 里面 return 了新的 state 的时候，我们才能够获取到
