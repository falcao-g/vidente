import { getWeatherIconUri } from "../../assets/weather"
import {
	CityName,
	Container,
	CurrentTemperature,
	OtherTemperatures,
	WeatherDescription,
	WeatherImage,
	WeatherInfoArea,
} from "./styles"

type Props = {
	cityName: string
	description: string
	currentTemperature: number
	maxTemperature: number
	minTemperature: number
	iconNumber: number
}

const Resume = ({
	cityName,
	description,
	currentTemperature,
	maxTemperature,
	minTemperature,
	iconNumber,
}: Props) => {
	const weatherIcon = getWeatherIconUri(iconNumber)

	return (
		<Container>
			<CityName>{cityName}</CityName>

			<WeatherInfoArea>
				<WeatherImage source={weatherIcon} style={{ resizeMode: "contain" }} />
				<CurrentTemperature>{currentTemperature}°C</CurrentTemperature>
				<WeatherDescription>{description}</WeatherDescription>
				<OtherTemperatures>
					Min: {minTemperature}°C | Max: {maxTemperature}°C
				</OtherTemperatures>
			</WeatherInfoArea>
		</Container>
	)
}

export default Resume
