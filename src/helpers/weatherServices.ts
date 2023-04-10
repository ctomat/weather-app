interface weatherAPIResponse {
  current: {
    condition: {
      text: string
    }
  }
  location: {
    country: string
    name: string
    region: string
  }
}

const getWeather = async (
  param: string
): Promise<weatherAPIResponse | undefined> => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=40b7b5abeda24815afb160853230304&${param}`,
      {
        mode: 'cors',
      }
    )
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export { getWeather }
