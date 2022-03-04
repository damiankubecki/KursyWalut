import React from 'react'
import styles from './OptionsList.module.scss'
import Option from './Option/Option'

const OptionsList = ({
  listName,
  currencies,
  selectedCurrency,
  otherSelectedCurrency,
  selectFn,
  children,
}) => {
  return (
    <div>
      <p className={styles.title}>{children}</p>
      <select
        className={styles.select}
        name={listName}
        onChange={selectFn}
        value={selectedCurrency.code}
      >
        <option value="default">Wybierz walutę</option>
        {currencies
          .filter(currency => !currency.used || currency !== otherSelectedCurrency)
          .map(currency => {
            return <Option key={currency.code} {...currency} />
          })}
      </select>
    </div>
  )
}

export default OptionsList
