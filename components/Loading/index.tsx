import { ActivityIndicator } from "react-native"
import { LoadingArea } from "./styles"

const Loading = () => {
	return (
		<LoadingArea>
			<ActivityIndicator size="large" color="rebeccapurple" />
		</LoadingArea>
	)
}

export default Loading
