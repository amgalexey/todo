const todos = [
  { id: 1, name: 'Купить говно', text: 'Куплю говно, недорого. В хорошем состоянии'},
  { id: 2, name: 'Продать говно', text: 'Продам говно хорошего качества'},
  { id: 3, name: 'Заработать на говне', text: 'Найти покупателя говна'},
]
const TODOS_KEY = 'todos'

const json = JSON.stringify(todos)
localStorage.setItem(TODOS_KEY, json)

const getTodos = () => JSON.parse(localStorage.getItem(TODOS_KEY))
const saveTodos = (todos) => JSON.stringify(TODOS_KEY, todos)

export const api = {
  fetchAll: () => new Promise(resolve => setTimeout(() => resolve(todos), 300)),
  create: (todo) => new Promise((resolve) => {
    const id = Math.floor(Math.random() * 100)

    const todoWithId = { id,...todo }

    saveTodos([...getTodos(), todoWithId])

    setTimeout(() => resolve(todoWithId), 300)
  })
}
