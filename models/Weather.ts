type Weather = {
	time: string
	description: string
	temperature: number
	iconNumber: number
	raining: boolean
	day: boolean
}

export const getWeather = (obj: any) => {
	const {
		DateTime,
		WeatherIcon,
		IconPhrase,
		Temperature,
		HasPrecipitation,
		IsDaylight,
	} = obj
	const weather: Weather = {
		description: IconPhrase,
		iconNumber: WeatherIcon,
		temperature: Temperature.Value,
		time: DateTime ? DateTime.split("T")[1].substring(0, 5) : "",
		raining: HasPrecipitation,
		day: IsDaylight,
	}

	return weather
}

export default Weather
