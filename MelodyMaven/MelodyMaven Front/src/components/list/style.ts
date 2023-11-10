import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const ListPageBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: beige;
  box-sizing: border-box;
`

export const ListPageTitle = styled.p`
  margin-bottom: 20px;
  width: 100%;
  font-family: 'Pretendard-Bold';
  font-size: 4vw;
  text-align: center;
`

export const ListPageContainer = styled.div`
  width: 80vw;
  min-width: 512px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 5vw;
  gap: 3vw;
`

export const ListPageRowWrapper = styled(Link)`
  width: 100%;
  display: flex;
  color: black;
  flex-direction: row;
  text-decoration: none;
  gap: 3vw;
`

export const ListPageColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListPageElementImage = styled.img`
  width: 40%;
  min-width: 256px;
  aspect-ratio: 1.5;
`

export const ListPageElementTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
`

export const ListPageElementOrgan = styled.span`
  font-size: 1.5vw;
`

export const ListPageElementCategories = styled.div`
  display: flex;
  font-size: 2vw;
  margin-top: auto;
`