import React from 'react'
import { pizzaStore } from './pizzaStore'
// import './styles.scss'

function Incrementor() {
    return <button className="incrementor" onClick={() => console.log('increment')} children="+" />
}
function Decrementor() {
    return <button className="decrementor" onClick={() => console.log('decrement')} children="-" />
}

class BookMyPizza extends React.Component {
    static defaultProps = {
        pizzaVarietyWithPrice: {
            small: 100,
            medium: 200,
            large: 300,
        },
        maxQuantityPerPerson: {
            children: 100,
            adult: 200,
        },
        minimumPay: 200,
    }
    pizzaHandler() {
        let pizzaView = []
        for(let item in this.props.pizzaVarietyWithPrice) {
            pizzaView.push(
                <li>
                    {item}:
                    <Decrementor />
                    <Incrementor />
                </li>)
        }
        return pizzaView
    }
    /* <div style={{display: 'flex'}}>
        {item}:
        <button children="-" />
        0
        <button children="+" />
    </div> */
    render() {
        return (
            <div className="wrapper">
                <h2 style={{textAlign: 'center'}}>Book your yummy PIZZA...</h2>
                {this.pizzaHandler()}
            </div>
        )
    }
}

export default BookMyPizza
export { BookMyPizza }