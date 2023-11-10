import styled from 'styled-components'

export const DonatePageBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
  box-sizing: border-box;
  gap: 20px;
`

export const DonatePageInput = styled.input`
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  background-color: beige;
  padding: 10px;
  &:focus {
    border: 1px solid blue;
  }
`

export const DonatePageTitle = styled.span`
  font-size: 4vw;
  font-family: 'Pretendard-Bold';
`

export const DonatePageButton = styled.button`
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vh;
  padding: 2vh;
  padding-left: 4vh;
  padding-right: 4vh;
  border: none;
  border-radius: 30px;
  font-family: 'Pretendard-Thin';
  transition: 150ms ease;
  font-weight: lighter;
  cursor: pointer;
  &:hover {
    background-color: beige;
    border: 1px solid gray;
    color: black;
  }
`;