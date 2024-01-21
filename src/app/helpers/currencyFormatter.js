const currencyFormatter = Intl.NumberFormat('es-US', {
  style: 'currency',
  currency: 'USD',
  maximunFractionDigits: 0,
})

export default currencyFormatter
