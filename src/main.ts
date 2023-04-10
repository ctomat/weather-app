import { getWeather } from './helpers/weatherServices'
import { buildQueryFromObject } from './helpers/paramParser'

import './styles/main.css'

const weather = getWeather(
  buildQueryFromObject({ q: 'spain' })
)

weather.then((data) =>
  console.log(data?.current.condition.text)
)
