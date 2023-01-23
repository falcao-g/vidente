import Weather from "./models/Weather"

export type RootStackParamList = {
	Home: undefined
	NextWeathers: { weathers: Weather[]; image: any; blur: number }
	Config: undefined
}
