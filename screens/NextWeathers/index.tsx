import { NativeStackScreenProps } from "@react-navigation/native-stack"
import WeatherCard from "../../components/WeatherCard"
import Weather from "../../models/Weather"
import { RootStackParamList } from "../../navigation"
import { Container, ScrollPanel } from "./styles"
import { ImageBackground } from "react-native"

type Props = NativeStackScreenProps<RootStackParamList, "NextWeathers">

const NextWeathers = ({ route }: Props) => {
	const { weathers, image, blur } = route.params

	return (
		<ImageBackground
			resizeMode={"cover"}
			style={{ flex: 1 }}
			source={image}
			blurRadius={blur}
		>
			<Container>
				<ScrollPanel>
					{weathers.map((w: Weather, index) => (
						<WeatherCard weather={w} key={index} />
					))}
				</ScrollPanel>
			</Container>
		</ImageBackground>
	)
}

export default NextWeathers
