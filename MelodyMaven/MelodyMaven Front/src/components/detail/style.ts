import styled from 'styled-components'

export const DetailPageBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
  box-sizing: border-box;
`

export const DetailPageDonateBar = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: beige;
  box-shadow: -1px -1px 3px 0px grey;
  bottom: 0;
  gap: 5%;
`
export const DetailPageButton = styled.button`
  height: 50%;
  aspect-ratio: 2.5;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
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

export const DetailPageDonateButton = styled(DetailPageButton)`
  aspect-ratio: 3;
  background-color: blue;
  cursor: pointer;
  &:hover {
    color: blue;
    background-color: white;
    font-weight: bold;
  }
`

export const DetailPageContainer = styled.div`
  width: 80%;
  max-width: 800px;
  box-shadow: 0 0 1px 1px grey;
  min-width: 512px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 5vw;
  margin-bottom: 20vh;
  padding: 5vw;
  gap: 3vw;
`

export const DetailPageCategories = styled.p`
  color: grey;
  text-shadow: 1px 1px lightgreen;
  font-size: 1.5vw;
  margin-right: auto;
`

export const DetailPageTitle = styled.p`
  margin-right: auto;
  font-size: 4vw;
  font-family: 'Pretendard-Bold';
`

export const DetailPageThumbnail = styled.img`
  width: 60%;
  aspect-ratio: 1.5;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 2px 1px grey;
`

export const DetailPageDescription = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 2vw;
  line-height: 3vw;
  letter-spacing: .01px;
  gap: 5vw;
`

export const DetailPageDescriptionTitle = styled.p`
  font-size: 2.5vw;
  font-weight: bold;
  margin-bottom: 2vw;
`

export const DetailPageDescriptionText = styled.p`
  font-size: 2vw;
`

export const DetailPageRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3vw;
`

export const DetailPageColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DetailPageElementImage = styled.img`
  width: 40%;
  min-width: 256px;
  aspect-ratio: 1.5;
`

export const DetailPageElementTitle = styled.h1`
  font-size: 4vw;
  font-weight: bold;
`

export const DetailPageElementOrgan = styled.span`
  font-size: 1.5vw;
`

export const DetailPageElementCategories = styled.div`
  display: flex;
  font-size: 2vw;
  margin-top: auto;
`

export const DetailPagePlanTitle = styled.p`
  font-size: 3.5vw;
  font-weight: bold;
`

export const DetailPagePlanTable = styled.table`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid black;;
  border-bottom: 1px solid black;;
  border-collapse: collapse;
  > tr {
    > th, td {
      padding: 1vw;
      text-align: center;
      border-bottom: 0.1px solid black;
    }
    > th {
      background-color: lightgrey;
    }
    > td {
      background-color: white;
    }
  }
`

export const DetailPageInfoTitle = styled.p`
  font-size: 3.5vw;
  font-weight: bold;
`

export const DetailPageInfoTable = styled.table`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid black;;
  border-bottom: 1px solid black;;
  border-collapse: collapse;
  > tr {
    > th, td {
      padding: 1vw;
      text-align: center;
      border-bottom: 0.1px solid black;
    }
    > th {
      background-color: lightgrey;
    }
    > td {
      background-color: white;
    }
  }
`