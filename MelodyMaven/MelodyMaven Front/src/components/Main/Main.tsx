import NavBar from '../common/NavBar/NavBar';
import {
	MainPageContainer,
	MainPageRecommendForm,
	MainPageSmallIntroduce,
	MainPageUrlButton,
	MainPageUrlInput,
	MaingPageRecommendTitle,
} from './style';
import useChangeSay from './hook/MainIntroduce';

const Main = () => {
	const { introduce } = useChangeSay();

	return (
		<>
			<NavBar />
			<MainPageContainer>
				<MaingPageRecommendTitle>PITSTOP.</MaingPageRecommendTitle>
				<MainPageSmallIntroduce>{introduce}</MainPageSmallIntroduce>
				<MainPageRecommendForm>
					<MainPageUrlButton to="/list">Go Donate</MainPageUrlButton>
				</MainPageRecommendForm>
			</MainPageContainer>
		</>
	);
};

export default Main;
