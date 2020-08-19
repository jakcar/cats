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

const Ol = styled.ol`
  list-style-type: none;
  padding: 0;
`

function FilteredCats(props) {
  const [cats, setCats] = useState([])
  const [fetchInProgress, setFetchInProgress] = useState(false)

  useEffect(() => {
    setFetchInProgress(true)
    fetch(
      `https://api.thecatapi.com/v1/images/search?category_ids=${props.filterCategory}&limit=${props.filterAmount}`
    )
      .then((response) => response.json())
      .then((result) => {
        setCats(result)
        setFetchInProgress(false)
      })
  }, [props.filterAmount, props.filterCategory])

  return (
    <div>
      {fetchInProgress ? (
        <p>Laddar...</p>
      ) : (
        <Ol>
          {cats.map((cat) => (
            <li key={cat.id}>
              <br />
              <CatFrame>
                <Img src={cat.url} alt="Förmodligen en katt" />
              </CatFrame>
            </li>
          ))}
        </Ol>
      )}
    </div>
  )
}

export default FilteredCats
