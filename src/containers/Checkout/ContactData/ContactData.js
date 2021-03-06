import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Łukasz',
        email: 'lukasz.szmelc@netguru.pl',
        street: 'Wojskowa 6',
        city: 'Poznań',
        zipCode: '60-297'
      }

    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ loading: false });
      })
  }

  render () {
    let form = (
      <form>
        <input className={classes.Input} type='text' name='name' placeholder='Your name' />
        <input className={classes.Input} type='text' name='email' placeholder='Your email' />
        <input className={classes.Input} type='text' name='street' placeholder='Street' />
        <input className={classes.Input} type='text' name='city' placeholder='City' />
        <input className={classes.Input} type='text' name='zipcode' placeholder='Zip Code' />
        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data:</h4>
        {form}
      </div>
    );
  }
}


export default ContactData;
