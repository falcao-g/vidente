import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useState } from "react"
import Resume from "../../components/Resume"
import Weather from "../../models/Weather"
import { RootStackParamList } from "../../navigation"
import {
	Container,
	NextWeathersArea,
	NextWeathersButton,
	NextWeathersText,
} from "./styles"

type Props = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({ navigation }: Props) => {
	const [weathers, setWeathers] = useState<Weather[]>([
		{
			description: "Frio",
			iconNumber: 31,
			temperature: 18,
			time: "11:00",
		},
		{
			description: "Calorzinho",
			iconNumber: 7,
			temperature: 25,
			time: "12:00",
		},
		{
			description: "Quente",
			iconNumber: 6,
			temperature: 35,
			time: "13:00",
		},
		{
			description: "Muito quente",
			iconNumber: 2,
			temperature: 36,
			time: "14:00",
		},
		{
			description: "Insuportável",
			iconNumber: 3,
			temperature: 38,
			time: "15:00",
		},
		{
			description: "Queimando",
			iconNumber: 4,
			temperature: 38.5,
			time: "16:00",
		},
		{
			description: "Inferno",
			iconNumber: 5,
			temperature: 41,
			time: "17:00",
		},
		{
			description: "?",
			iconNumber: 10,
			temperature: 0,
			time: "18:00",
		},
		{
			description: "Corra",
			iconNumber: 8,
			temperature: 30,
			time: "19:00",
		},
		{
			description: "Você foi avisado",
			iconNumber: 12,
			temperature: 29,
			time: "20:00",
		},
		{
			description: "Boa noite.",
			iconNumber: 11,
			temperature: 28,
			time: "21:00",
		},
	])

	return (
		<Container>
			<Resume
				cityName="Aquidauana-MS"
				currentTemperature={28}
				description="Ensolarado"
				iconNumber={2}
				maxTemperature={33}
				minTemperature={25}
			/>

			<NextWeathersButton
				onPress={() => navigation.push("NextWeathers", { weathers })}
			>
				<NextWeathersArea>
					<NextWeathersText>Próximos climas</NextWeathersText>
				</NextWeathersArea>
			</NextWeathersButton>
		</Container>
	)
}

export default Home
