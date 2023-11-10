import NavBar from '../common/NavBar/NavBar';
import * as S from './style';
const list = () => {
	return (
		<>
			<NavBar />
			<S.ListPageBackground>
				<S.ListPageTitle>
					하나의 작은 도움, 무한한 선사랑.
				</S.ListPageTitle>
				<S.ListPageContainer>
					<S.ListPageRowWrapper to="http://localhost:3000/detail">
						<S.ListPageElementImage
							src={
								'https://media.discordapp.net/attachments/1171999820081283143/1172328143420391435/KakaoTalk_20231102_172317847_01.jpg?ex=655feaaa&is=654d75aa&hm=2893ee83bdb39648410e14d8aa2d7f2332118ab8be2277a4d0824a8b6f3ca348&='
							}
						></S.ListPageElementImage>
						<S.ListPageColumnWrapper>
							<S.ListPageElementTitle>
								김장 김치, 겨울 장독을 채워주세요.
							</S.ListPageElementTitle>
							<S.ListPageElementOrgan>
								꽃밭정이노인복지관
							</S.ListPageElementOrgan>
							<S.ListPageElementCategories>
								어르신
							</S.ListPageElementCategories>
						</S.ListPageColumnWrapper>
					</S.ListPageRowWrapper>
					<S.ListPageRowWrapper to="http://localhost:3000/detail">
						<S.ListPageElementImage
							src={
								'https://images-ext-1.discordapp.net/external/6SGxRjSrhBIoiW2DYOVBO_9JA81yyPw9un089CIzPo8/%3Ftype%3Da360/https/happybean-phinf.pstatic.net/20231101_137/1698815561487r4YC9_PNG/Image_2023-10-24_14_30_23.png'
							}
						></S.ListPageElementImage>
						<S.ListPageColumnWrapper>
							<S.ListPageElementTitle>
								구멍난 솜이불을 바느질 하시는 어르신
							</S.ListPageElementTitle>
							<S.ListPageElementOrgan>
								목포이랜드노인복지관
							</S.ListPageElementOrgan>
							<S.ListPageElementCategories>
								어르신
							</S.ListPageElementCategories>
						</S.ListPageColumnWrapper>
					</S.ListPageRowWrapper>
				</S.ListPageContainer>
			</S.ListPageBackground>
		</>
	);
};

export default list;
