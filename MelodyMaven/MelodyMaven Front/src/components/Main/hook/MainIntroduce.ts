import { useEffect, useState } from 'react'

// Movement font function
const useChangeSay = () => {
  const [number, setNumber] = useState(0)
  const [introduce, setIntroduce] = useState('')
  const [fiSe, setFiSe] = useState(false)

  const firstSay =
    '  사랑으로 연결, 세상을 바꾸는 공익 기부의 힘! PITSTOP. '
  const secondSay =
    ' 작은 선물, 큰 변화! 우리의 손길로 세상을 따뜻하게. '

  useEffect(() => {
    if (fiSe === true) {
      if (firstSay.length > introduce.length) {
        setTimeout(() => {
          setIntroduce(introduce + firstSay[number])
        }, 100)
        setNumber(number + 1)
      } else if (firstSay.length === introduce.length) {
        setTimeout(() => {
          setIntroduce('')
        }, 2000)
        setNumber(0)
        setFiSe(false)
      }
    } else {
      if (secondSay.length > introduce.length) {
        setTimeout(() => {
          setIntroduce(introduce + secondSay[number])
        }, 100)
        setNumber(number + 1)
      } else if (secondSay.length === introduce.length) {
        setTimeout(() => {
          setIntroduce('')
        }, 2000)
        setNumber(0)
        setFiSe(true)
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [introduce])

  return { introduce }
}

export default useChangeSay