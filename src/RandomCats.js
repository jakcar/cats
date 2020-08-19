import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CatFrame = styled.div`
  max-width: 400px;
  max-height: 100%;
  margin: auto;
`

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

function RandomCats(props) {
  const [cats, setCats] = useState(null)
  const [value, setValue] = useState(props.initialValue)
  const [fetchInProgress, setFetchInProgress] = useState(false)

  useEffect(() => {
    setFetchInProgress(true)
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((result) => {
        setCats(result[0].url)
        setFetchInProgress(false)
      })
  }, [value])
  return (
    <div>
      {fetchInProgress ? (
        <p>Laddar...</p>
      ) : (
        <div>
          <CatFrame>
            <Img src={cats} alt="Förmodligen en katt" /> <br />
          </CatFrame>
          <div>
            <input
              onClick={() => {
                setValue(value + 1)
              }}
              type="button"
              value="Slumpa katt"
            />
          </div>
          <p>
            Du har tittat på {value} kattbild{value > 1 && <span>er</span>}.
          </p>
        </div>
      )}
    </div>
  )
}

export default RandomCats
