import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import axios from 'axios';
import NavBar from '../common/NavBar/NavBar';
const Donate = () => {
	const navigate = useNavigate();
	const [getName, setName] = useState('');
	const [getValue, setValue] = useState('');
	const submitButton = async () => {
		const money = Number(localStorage.getItem('money')) - Number(getValue);
		localStorage.setItem('money', money.toString());
	};
	return (
		<>
			<NavBar />
			<S.DonatePageBackground>
				<S.DonatePageTitle>
					Donate for 꽃밭정이노인복지관:
				</S.DonatePageTitle>
				<div style={{ display: 'flex', gap: '10px' }}>
					<S.DonatePageInput
						placeholder="이름"
						value={getName}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<S.DonatePageInput
						placeholder="기부액"
						value={getValue}
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
					<S.DonatePageInput
						value={`보유액: ${localStorage.getItem('money')}`}
						onChange={(e) => {
							setValue(e.target.value);
						}}
						disabled
					/>
				</div>
				<S.DonatePageButton onClick={submitButton}>
					Donate
				</S.DonatePageButton>
			</S.DonatePageBackground>
		</>
	);
};

export default Donate;
