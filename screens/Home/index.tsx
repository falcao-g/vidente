import Resume from "../../components/Resume"
import {
	Container,
	NextWeathersArea,
	NextWeathersButton,
	NextWeathersText,
} from "./styles"

const Home = () => {
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

			<NextWeathersButton>
				<NextWeathersArea>
					<NextWeathersText>Próximos climas</NextWeathersText>
				</NextWeathersArea>
			</NextWeathersButton>
		</Container>
	)
}

export default Home
