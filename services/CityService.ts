import { estados } from "../data/cidades.json"
import { API_KEY, API_URL, CITY_ENDPOINT } from "../config/api"
import axios from "axios"

export const loadCities = () => {
	const cities: string[] = []
	estados.forEach((e) => {
		e.cidades.forEach((c) => {
			const cityName = `${c}-${e.sigla}`
			cities.push(cityName)
		})
	})

	cities.sort()
	return cities
}

const http = axios.create({ baseURL: API_URL })

export const findCityCode = async (filter: string) => {
	const response = await http.get(CITY_ENDPOINT, {
		params: {
			apikey: API_KEY,
			q: filter.replace("-", " "),
			language: "pt-BR",
		},
	})

	const { data } = response
	const key = data[0].Key
	return Number(key)
}
