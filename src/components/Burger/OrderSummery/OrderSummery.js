import React,{Fragment,Component} from 'react';

import Button from '../../UI/Button/Button';

class OrderSummery extends Component {
    //This could be a funtional componenet. does't have to be a class
    componentWillUpdate(){
        console.log('[Order Summery] will update');
    }
    render(){
        const ingredientSummery =Object.keys(this.props.ingredients).map(igKey=>{
            return(
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
            </li>);
        });
       
        return(
            <Fragment>
            <h3>your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total price:{this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Fragment>
        );
    }
   
}

export default OrderSummery;