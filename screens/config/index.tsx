import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../navigation"
import { useContext, useEffect, useState } from "react"
import { findCityCode, loadCities } from "../../services/CityService"
import { Container, CityFilterInput, ScrollPanel } from "./styles"
import CityCard from "../../components/CityCard"
import { UserContext } from "../../context/UserContext"

type Props = NativeStackScreenProps<RootStackParamList, "Config">

const Config = ({ navigation }: Props) => {
	const [filter, setFilter] = useState("")
	const [filteredCities, setFilteredCitites] = useState<string[]>([])

	const cities = loadCities()

	useEffect(() => {
		if (filter) {
			const citiesFound = cities.filter((c) =>
				c.toLowerCase().includes(filter.toLowerCase())
			)
			setFilteredCitites(citiesFound.length > 0 ? citiesFound.slice(0, 5) : [])
		} else {
			setFilteredCitites([])
		}
	}, [filter])

	const { setCityCode, setCityName } = useContext(UserContext)

	const onCitySelected = (cityName: string) => {
		setCityName(cityName)
		findCityCode(cityName).then((cityCode) => {
			setCityCode(cityCode)
			navigation.pop()
		})
	}

	return (
		<Container>
			<CityFilterInput
				placeholder="Digite o nome da cidade"
				value={filter}
				onChangeText={setFilter}
			/>

			{filteredCities.length > 0 && (
				<ScrollPanel>
					{filteredCities.map((c, index) => (
						<CityCard
							key={index}
							cityName={c}
							onPress={() => onCitySelected(c)}
						/>
					))}
				</ScrollPanel>
			)}
		</Container>
	)
}

export default Config
