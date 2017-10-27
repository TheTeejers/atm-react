import React, { Component } from 'react';

export default class Account extends Component {
constructor(props) {
  super(props);
  this.state ={
    balance: 0
  };

  this.handleDepositClick = this.handleDepositClick.bind(this);
  this.handleWithdrawClick = this.handleDepositClick.bind(this);
}

  handleDepositClick(event) {
    event.preventDefault();
        let amount = parseFloat(this.inputBox.value);
        let newBalance = this.state.balance + amount;
        this.setState({
          balance: newBalance
        });
        this.inputBox.value = '';
  }


  handleWithdrawClick(event) {
    event.preventDefault();
        let amount = parseFloat(this.inputBox.value);
        let newBalance = this.state.balance - amount;
        this.setState({
          balance: newBalance
        })
        this.inputBox.value = '';
  }

  render() {
   let balanceClass = 'balance';
      if (this.state.balance === 0) {
        balanceClass += ' zero';
      }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input}/>
        <input type="button" value="Deposit" onClick={(event) => this.handleDepositClick(event)}/>



        <input type="button" value="Withdraw" onClick={(event) => this.handleWithdrawClick(event)}/>

      </div>
    )
  }
}
