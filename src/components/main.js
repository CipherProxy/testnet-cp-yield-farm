import React, { Component } from 'react'
import dai from '../dai.png'

class Main extends Component {

  render() {
    return (
      <div id="content" className="card border-dark shadow-lg text-white bg-dark mt-4">

        <table className="table table-borderless text-secondary text-center">
          <thead>
            <tr>
              <th scope="col">Staking Beans</th>
              <th scope="col">Reward Beans</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</td>
              <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} CPTT</td>
            </tr>
          </tbody>
        </table>

        <div className="card text-white bg-dark mb-4" >

          <div className="card-body">

            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)
              }}>
              <div>
                <label className="float-left text-secondary"><b>Stake Beans</b></label>
                <span className="float-right text-secondary">
                  Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text text-light">
                    <img src={dai} height='32' alt=""/>
                    &nbsp;&nbsp;&nbsp; mDAI
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-dark text-secondary border-secondary btn-block btn-lg">STAKE AND RAKE!</button>
            </form>
            <button
              type="submit"
              className="btn btn-dark text-secondary border-secondary btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault()
                this.props.unstakeTokens()
              }}>
                UN-STAKE Your Magic Beans...
              </button>
          </div>
        </div>

      </div>
    );
  }
}

export default Main;