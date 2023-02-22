import React, { useState } from 'react'

const App = () => {
  const [details, setDetails] = useState([[]])


  const onSelect = (type) => {
    console.log('type---->', type)
    const selectType = details[details.length - 1][0]
    console.log('details.length :>> ', details.length);
    if (selectType !== type) {
      console.log('selectType', selectType)
      details.push([])
    }
    details[details.length - 1].push(type)
    console.log('details :>> ', details);
    setDetails([...details])
  }

  return (
    <>
    
      <div className="dropdown">
      <h1>Select HEAD-TAILS</h1>
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
          <li><a className="dropdown-item" onClick={() => onSelect("HEAD")} >HEAD</a></li>
          <li><a className="dropdown-item" onClick={() => onSelect("TAILS")}>TAILS</a></li>
        </ul>
      </div>
      <div style={{ display: "flex", color: "white", marginTop: "30px", fontWeight: "bold", fontFamily: "sans-serif -Times New Roman", marginTop: "3%" }} >
        {details.map(item => (
          <div style={{ marginLeft: 30 }}>
            {item.map(i => (
              <div>{i}</div>
            ))}
          </div>
        ))}
      </div>

    </>
  )
}

export default App