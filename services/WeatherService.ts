import axios from "axios"
import Weather, { getWeather } from "../models/Weather"

const API_KEY = "FxmEIh1jvcTvnIPeaaPBmvnAuLwLyL7y"
const API_URL = "http://dataservice.accuweather.com"
const WEATHER_ENDPOINT = "forecasts/v1/hourly/12hour"
const CITY_CODE = 38802

const http = axios.create({ baseURL: API_URL })

export const findWeathers = async () => {
	const response = await http.get(`${WEATHER_ENDPOINT}/${CITY_CODE}`, {
		params: {
			apikey: API_KEY,
			language: "pt-BR",
			metric: true,
		},
	})

	const weathers: Weather[] = []

	if (response.status == 200) {
		const { data } = response

		data.forEach((d: any) => getWeather(d))
	}

	return weathers
}
