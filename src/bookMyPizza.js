import React, { useState } from 'react'
// import './styles.scss'

function Incrementor(props) {
    return <button className="incrementor" onClick={props.onIncrement} children="+" />
}
function Decrementor(props) {
    return <button className="decrementor" onClick={props.onDecrement} children="-" />
}

function pizzaOrderView(props) {
    const { store, list } = props
    let pizzaView = []
    for(let item in list) {
        const count = store[item+'Count']
        const countHandler = item+'CountHandler'
        pizzaView.push(
            <li>
                {item}:
                <Decrementor onDecrement={() => count > 0 && store[countHandler](--count) } />
                {count}
                <Incrementor onIncrement={() => count < 10 && store[countHandler](++count)} />
            </li>)
    }
    return pizzaView
}

function pizzaStore() {
    const [smallCount, smallCountHandler] = useState(0)
    const [mediumCount, mediumCountHandler] = useState(0)
    const [largeCount, largeCountHandler] = useState(0)
    const [childrenCount, childrenCountHandler] = useState(0)
    const [adultCount, adultCountHandler] = useState(0)

    return {
        smallCount, smallCountHandler,
        mediumCount, mediumCountHandler,
        largeCount, largeCountHandler,
        childrenCount, childrenCountHandler,
        adultCount, adultCountHandler
    }
}

function BookMyPizza(props) {
    const {
        pizzaVarietyWithPrice = {
            small: 100,
            medium: 200,
            large: 300,
        },
        maxQuantityPerPerson = {
            children: 100,
            adult: 200,
        },
        minimumPay = 200,
    } = props

    const store = pizzaStore()
    
    return (
        <div className="wrapper">
            <h2 style={{textAlign: 'center'}}>Book your yummy PIZZA...</h2>
            {pizzaOrderView({list: pizzaVarietyWithPrice, minimumPay, store})}
            {pizzaOrderView({list: maxQuantityPerPerson, minimumPay, store})}
        </div>
    )
}

export default BookMyPizza
export { BookMyPizza }