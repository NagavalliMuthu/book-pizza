import { observable } from 'mobx'

const pizzaStore = observable({
    smallCount: 0,
    mediumCount: 0,
    largeCount: 0,
    children: 0,
    adult: 0,
})

export default pizzaStore
export { pizzaStore }