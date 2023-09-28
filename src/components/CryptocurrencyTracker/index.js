import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrienciesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrency()
  }

  getCryptocurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const fetchedData = await response.json()

    const updateData = fetchedData.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      currencyLogoUrl: eachCurrency.currency_logo,
    }))
    this.setState({cryptocurrienciesData: updateData, isLoading: false})
  }

  renderCurrenciesList = () => {
    const {cryptocurrienciesData} = this.state
    return (
      <CryptocurrenciesList cryptocurrienciesData={cryptocurrienciesData} />
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderCurrenciesList()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
