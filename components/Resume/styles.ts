import styled from "styled-components/native"

export const Container = styled.View`
	padding: 0 10px;
`

export const CityName = styled.Text`
	font-family: "Montserrat_700Bold";
	text-align: center;
	margin: 10px 0;
	font-size: 30px;
	color: #edede9;
`

export const WeatherInfoArea = styled.View`
	padding: 10px;
	border: 5px dashed #5e548e;
	width: 300px;
	height: 300px;
	margin: 10px auto;
	border-radius: 150px;
	justify-content: center;
`

export const WeatherImage = styled.Image`
	margin: 0 auto;
	width: 100px;
	height: 100px;
`

export const CurrentTemperature = styled.Text`
	font-family: "Montserrat_700Bold";
	font-size: 50px;
	text-align: center;
	color: #5e548e;
`

export const WeatherDescription = styled.Text`
	font-family: "Montserrat_700Bold";
	font-size: 16px;
	margin-horizontal: 8px
	text-align: center;
	color: #edede9;
`

export const OtherTemperatures = styled.Text`
	font-family: "Montserrat_400Regular";
	font-size: 13px;
	text-align: center;
	color: #edede9;
`
