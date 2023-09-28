import {Component} from 'react'

import CryptocurencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCurrenciesHeader = () => (
    <div className="list-header">
      <p className="type">Coin Type</p>
      <div className="value-con">
        <p className="value">USD</p>
        <p className="value">EURO</p>
      </div>
    </div>
  )

  renderCurrencyView = () => {
    const {cryptocurrienciesData} = this.props

    return (
      <div className="currencies-container">
        {this.renderCurrenciesHeader()}
        <ul className="lists">
          {cryptocurrienciesData.map(eachCurrency => (
            <CryptocurencyItem
              key={eachCurrency.id}
              currencyDetails={eachCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="img"
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        {this.renderCurrencyView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
