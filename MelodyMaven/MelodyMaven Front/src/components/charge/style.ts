import { Link } from "react-router-dom";
import styled from "styled-components";


export const ChargePageContainer = styled.div`
  width: 100%;
  height: 1000px;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: beige;
`

export const ChargetaiPageTitle = styled.p`
padding-top: 100px;
  font-size: 4vw;
  font-family: 'Pretendard-Bold';
`

export const ChargePageInput = styled.input`
  width: 15vw;
  height: 50px;
  margin-top: 100px;
  margin-bottom: 20px;
  padding-left: 1.5vw;

  background-color: beige;
  color: black;
  border: 1px solid gray;


  display: flex;
  align-items: center;
  font-size: 1vw;
  justify-content: center;
  border-radius: 30px;
  font-family: 'Pretendard-Thin';
  text-decoration: none;
  transition: 150ms ease;
  cursor: pointer;

  &:focus{
    outline: none;
  }

`

export const ChargePageUrlButton = styled(Link)`
  width: 15vw;
  height: 50px;

  margin-bottom: auto;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  font-size: 1vw;
  justify-content: center;
  border: none;
  border-radius: 30px;
  font-family: 'Pretendard-Thin';
  text-decoration: none;
  transition: 150ms ease;
  cursor: pointer;
  &:hover {
    background-color: beige;
    border: 1px solid gray;
    color: black;
  }
`