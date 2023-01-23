import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useContext, useEffect, useState } from "react"
import Loading from "../../components/Loading"
import Resume from "../../components/Resume"
import Weather from "../../models/Weather"
import { RootStackParamList } from "../../navigation"
import { findWeathers } from "../../services/WeatherService"
import { ImageBackground } from "react-native"
import {
	Container,
	NextWeathersArea,
	NextWeathersButton,
	NextWeathersText,
} from "./styles"
import { UserContext } from "../../context/UserContext"

type Props = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({ navigation }: Props) => {
	const [weathers, setWeathers] = useState<Weather[]>([])
	const [minTemperature, setMinTemperature] = useState(0)
	const [maxTemperature, setMaxTemperature] = useState(0)
	const [weathersLoaded, setWeathersLoaded] = useState(false)
	const [imageIndex, setImageIndex] = useState(0)
	const [blur, setBlur] = useState(3)

	const { cityCode, cityName } = useContext(UserContext)
	const images = [
		require("../../assets/backgrounds/chilly/day.jpg"),
		require("../../assets/backgrounds/chilly/night.jpg"),
		require("../../assets/backgrounds/cold/day.jpg"),
		require("../../assets/backgrounds/cold/night.jpg"),
		require("../../assets/backgrounds/desert/day.jpg"),
		require("../../assets/backgrounds/desert/night.jpg"),
		require("../../assets/backgrounds/raining/day.jpg"),
		require("../../assets/backgrounds/raining/night.jpg"),
		require("../../assets/backgrounds/tropical/day.jpg"),
		require("../../assets/backgrounds/tropical/night.jpg"),
		require("../../assets/backgrounds/mediterranean/day.jpg"),
		require("../../assets/backgrounds/mediterranean/night.jpg"),
	]

	const findLastWeathers = async () => {
		setWeathersLoaded(false)
		const lastWeathers = await findWeathers(cityCode)
		let max = Number.NEGATIVE_INFINITY
		let min = Number.POSITIVE_INFINITY

		lastWeathers.forEach((w) => {
			if (w.temperature > max) {
				max = w.temperature
			}

			if (w.temperature < min) {
				min = w.temperature
			}
		})

		setMaxTemperature(max)
		setMinTemperature(min)
		setWeathers(lastWeathers)
		setWeathersLoaded(true)
		getBackground(lastWeathers[0])
	}

	const getBackground = async (weather) => {
		var index = 0
		setBlur(3)

		if (weather.raining) {
			index = 6
			setBlur(2)
		} else if (weather.temperature > 35) {
			index = 4
		} else if (weather.temperature > 25) {
			index = 8
		} else if (weather.temperature > 18) {
			index = 10
		} else if (weather.temperature > 12) {
			index = 0
		} else {
			index = 2
		}

		if (!weather.day) {
			setBlur(2)
			index++
		}

		setImageIndex(index)
	}

	useEffect(() => {
		findLastWeathers()
	}, [cityCode])

	return (
		<ImageBackground
			resizeMode={"cover"}
			style={{ flex: 1 }}
			source={images[imageIndex]}
			blurRadius={blur}
		>
			<Container>
				{weathersLoaded && (
					<>
						<Resume
							cityName={cityName}
							currentTemperature={weathers[0].temperature}
							description={weathers[0].description}
							iconNumber={weathers[0].iconNumber}
							maxTemperature={maxTemperature}
							minTemperature={minTemperature}
						/>

						<NextWeathersButton
							onPress={() =>
								navigation.push("NextWeathers", {
									weathers,
									image: images[imageIndex],
									blur,
								})
							}
						>
							<NextWeathersArea>
								<NextWeathersText>Próximos climas</NextWeathersText>
							</NextWeathersArea>
						</NextWeathersButton>
					</>
				)}

				{!weathersLoaded && <Loading />}
			</Container>
		</ImageBackground>
	)
}

export default Home
