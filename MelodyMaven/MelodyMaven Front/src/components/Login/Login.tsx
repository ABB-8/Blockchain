import { BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoginState } from '../../stores/atom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import {
	LoginPageContainer,
	LoginPageTitle,
	LoginPageInput,
	LoginPageSideWrap,
	LoginPageSnip,
	LoginPageButton,
	LoginPageExplain,
	LoginPageMovementSignin,
} from './style';

const Login = () => {
	axios.defaults.baseURL = 'http://192.168.0.145:8000';
	const [getEmail, setEmail] = useState<string>('');
	const [getPw, setPw] = useState<string>('');
	const [getIsLogin, setIsLogin] = useRecoilState(isLoginState);

	const navigate = useNavigate();
	const handleInputEmail = (e: BaseSyntheticEvent) => {
		setEmail(e.target.value);
	};
	const handleInputPw = (e: BaseSyntheticEvent) => {
		setPw(e.target.value);
	};

	const loginButtonEvent = async () => {
		await axios
			.post('/login', {
				email: getEmail,
				password: getPw,
			})
			.then((res) => {
				console.log(res);
				localStorage.setItem('isLogin', 'true');
				navigate('/');
			})
			.catch((err) => {
				console.error(err);
			});
	};
	return (
		<LoginPageContainer>
			<LoginPageSideWrap>
				<LoginPageTitle>사랑의 연결로 더 나아가요.</LoginPageTitle>
				<LoginPageInput
					placeholder="Email"
					onChange={handleInputEmail}
					value={getEmail}
				/>
				<LoginPageInput
					type="password"
					placeholder="Password"
					onChange={handleInputPw}
					value={getPw}
				/>
				<LoginPageButton onClick={loginButtonEvent}>
					Continue
				</LoginPageButton>
				<LoginPageExplain>
					If you lose your password, you can't find it Help yourself.
				</LoginPageExplain>
				<LoginPageExplain>
					Don't have an account?{' '}
					<LoginPageMovementSignin to="/signup">
						Sign up
					</LoginPageMovementSignin>
				</LoginPageExplain>
			</LoginPageSideWrap>
		</LoginPageContainer>
	);
};

export default Login;
