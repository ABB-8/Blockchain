import NavBar from '../common/NavBar/NavBar';
import {
	ChargePageContainer,
	ChargePageInput,
	ChargePageUrlButton,
	ChargetaiPageTitle,
} from './style';

import { useState } from 'react';

const Charge = () => {
	const [money, setMoney] = useState('');

	const saveMoney = (event: { target: { value: string } }) => {
		//localStorage.setItem('money', event.target.value);
		console.log(event.target.value);
		setMoney(event.target.value);
	};

	const reSaveMoney = () => {
		localStorage.setItem('money', money);
	};

	return (
		<>
			<NavBar />
			<ChargePageContainer>
				<ChargetaiPageTitle>
					원하시는 충전액을 입력해주세요.
				</ChargetaiPageTitle>
				<ChargePageInput
					type="text"
					onChange={saveMoney}
					placeholder="금액을 입력해주세요."
				></ChargePageInput>
				<ChargePageUrlButton onClick={reSaveMoney} to="/">
					충전
				</ChargePageUrlButton>
			</ChargePageContainer>
		</>
	);
};

export default Charge;
