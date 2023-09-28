import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, currencyLogoUrl, usdValue, euroValue} = currencyDetails
  return (
    <li className="list-container">
      <div className="title-container">
        <img
          className="currency-logo"
          alt={currencyName}
          src={currencyLogoUrl}
        />
        <p className="name">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
