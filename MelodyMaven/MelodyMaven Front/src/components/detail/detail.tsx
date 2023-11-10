import { useRef } from 'react';
import * as S from './style';
import NavBar from '../common/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
	const navigate = useNavigate();
	const descriptionRef = useRef<HTMLDivElement>(null);
	const planRef = useRef<HTMLTableElement>(null);
	const infoRef = useRef<HTMLTableElement>(null);
	const scroll = (
		ref: React.RefObject<HTMLDivElement | HTMLTableElement>
	) => {
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<>
			<NavBar />
			<S.DetailPageBackground>
				<S.DetailPageContainer ref={descriptionRef}>
					<div>
						<S.DetailPageCategories>
							어르신 &gt; 생계 및 기초생활지원
						</S.DetailPageCategories>
						<S.DetailPageTitle>
							김장김치, 겨울 장독을 채워주세요.
						</S.DetailPageTitle>
					</div>
					<S.DetailPageThumbnail
						src={
							'https://happybean-phinf.pstatic.net/20231102_164/1698916904150xvpfo_JPEG/KakaoTalk_20231102_172317847_03.jpg?type=w720'
						}
					/>
					<S.DetailPageDescription>
						<p>
							<S.DetailPageDescriptionTitle>
								냉장고 속 비워져가는 김치
							</S.DetailPageDescriptionTitle>
							<S.DetailPageDescriptionText>
								갑자기 쌀쌀해진 날씨에 온 몸이 웅크러드는 것을
								보니 김장의 계절이 찾아왔습니다. 혹시 직접
								김장김치를 담아 본 적이 있으신가요? 무거운
								배추를 날라 소금으로 한나절 절이고, 물에 행군 뒤
								양념을 입히는 과정으로, 김장을 하고 나면 몸살이
								올 만큼 많은 수고와 정성이 들어가는 작업입니다.
								과거에는 동네 이웃들의 손길을 모아 다 함께
								김장을 담고, 나누어 먹는 정을 나누는 축제와 같은
								문화가 있었지만, 1인 독거 가구 증가와 물가 상승
								탓에 이웃을 살필 여유가 사라진 요즘 시대입니다.
								이런 막막한 시대에 특히 노쇠해져가는 저소득 독거
								어르신들은 김장은 엄두가 나지 않고, 떨어져 가는
								김치를 바라보는 것이 전부입니다.
							</S.DetailPageDescriptionText>
						</p>
						<p>
							<S.DetailPageDescriptionTitle>
								이번 겨울에 혹시 김치 받을 수 있어요?
							</S.DetailPageDescriptionTitle>
							<S.DetailPageDescriptionText>
								김영복(가명)어르신은 냉장고 속 김치 통으로도
								겨울이 다가옴을 체감합니다. 밥에 물 말아 마음
								편히 꺼내 먹었던 김치 반찬이었지만 그마저도 다
								떨어져 가니 내일의 점심을 위해 오늘의 점심은
								김치 국물로 아쉬움을 대신해봅니다. “다람쥐들도
								겨울 잠 자겠다고 열심히 자기 먹을 음식 땅에 파
								묻어두고 맘 편히 자는데... 이번 겨울엔 또 어떻게
								먹고 살아야 하나 막막하고 비참하네.” 어렵게
								김치를 받을 수 있는지 전화 주셨던 어르신
								목소리의 가는 떨림에 같이 마음이 무너집니다.
							</S.DetailPageDescriptionText>
						</p>
						<p>
							<S.DetailPageDescriptionTitle>
								김치는 대한민국 국민이면 누구든 마음껏 먹을수
								있어야 해요
							</S.DetailPageDescriptionTitle>
							<S.DetailPageDescriptionText>
								겨울이면 기온이 떨어져 체온 유지를 위해 적절한
								건강 관리가 필수입니다. 특히 면역력이 낮은
								어르신들은 저체온증이나 동상과 같은 한랭 질환에
								걸리기 쉽기 때문에 더욱 주의가 필요합니다.
								영양분을 가진 적절한 식사만으로도 겨울철
								체온유지에 효과가 있는데, 이 때 김장 김치는
								어르신들의 건강을 유지하는 데 많은 도움을 줄 수
								있습니다. 김치 속 유산균과 식이섬유는 당뇨병과
								심장질환 등을 예방하고, 비타민을 통한
								항산화작용은 노화 억제와 식욕증진, 혈액순환에
								좋은 영향을 줍니다. 또한, 김치는 겨울철 반찬이
								없어 끼니를 거르는 저소득 어르신들의 결식을
								예방해줄 수 있습니다. 김장김치로 겨울철
								어르신들의 건강을 지켜주세요. 김치만 있어도
								마음이 든든하다고 하시는 어르신께 여러분의
								나눔은 김치 한 포기 가격 그 이상의 따뜻한
								사랑으로 전달될 것입니다.
							</S.DetailPageDescriptionText>
						</p>
					</S.DetailPageDescription>
					<hr></hr>
					<S.DetailPagePlanTitle>사용계획</S.DetailPagePlanTitle>
					<S.DetailPagePlanTable ref={planRef}>
						<tr>
							<th>총 집행금액</th>
							<th colSpan={2}>3,750,000 원</th>
						</tr>
						<tr>
							<td>사업비</td>
							<td>김장김치10KG 70,000원 * 50명</td>
							<td>3,500,000원</td>
						</tr>
						<tr>
							<td>사업비</td>
							<td>김치통 5,000원 * 50개</td>
							<td>250,000원</td>
						</tr>
					</S.DetailPagePlanTable>
					<hr></hr>
					<S.DetailPageInfoTitle>후원정보</S.DetailPageInfoTitle>
					<S.DetailPageInfoTable ref={infoRef}>
						<tr>
							<th>사업 기간</th>
							<td>2023.12.18 ~ 2024.02.29</td>
						</tr>
						<tr>
							<th>사업 대상</th>
							<td>취약계층 어르신</td>
						</tr>
						<tr>
							<th>대상 수</th>
							<td>50명</td>
						</tr>
						<tr>
							<th>기대 효과</th>
							<td>
								<p>
									ㆍ겨울철 어르신의 결식을 예방하고 영양을
									보충한다.
								</p>
								<p>
									ㆍ소외 어르신에게 모금을 통한 김치지원으로
									따뜻한 이웃의 정을 전달한다.
								</p>
							</td>
						</tr>
					</S.DetailPageInfoTable>
				</S.DetailPageContainer>
				<S.DetailPageDonateBar>
					<S.DetailPageButton
						onClick={() => {
							scroll(descriptionRef);
						}}
					>
						소개
					</S.DetailPageButton>
					<S.DetailPageButton
						onClick={() => {
							scroll(planRef);
						}}
					>
						사용계획
					</S.DetailPageButton>
					<S.DetailPageButton
						onClick={() => {
							scroll(infoRef);
						}}
					>
						후원정보
					</S.DetailPageButton>
					<S.DetailPageDonateButton
						onClick={() => {
							navigate('/donate');
						}}
					>
						후원하기
					</S.DetailPageDonateButton>
				</S.DetailPageDonateBar>
			</S.DetailPageBackground>
		</>
	);
};

export default Detail;
