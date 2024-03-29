import styled from "styled-components/native"

export const Card = styled.View`
	background-color: #5e548e;
	padding: 10px;
	margin: 5px 0;
	flex-direction: row;
	border-radius: 5px;
	align-items: center;
`

export const WeatherIcon = styled.Image`
	width: 30px;
	height: 30px;
	margin-right: 10px;
`

export const WeatherDescription = styled.Text`
	font-family: "Montserrat_400Regular";
	font-size: 12px;
	margin-right: 80px;
	color: #edede9;
`

export const WeatherTemperature = styled.Text`
	font-family: "Montserrat_700Bold";
	font-size: 15px;
	margin-left: auto;
	color: #edede9;
`
