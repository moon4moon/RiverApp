
function onClick() {
  alert("Clicked")
}

function RightCard() {
  return (
    <div className='rightbar'>
      <div className='rightbar-up-fragment'>

        <h2>Mapa</h2>   
        
        <div className='rightbar-button'>
          <button className='map-btn' onClick={onClick }>
            OSM czysta
          </button>
          <button className='map-btn' onClick={onClick }>
            OSM hydro
          </button>
          <button className='map-btn' onClick={onClick }>
            Ortofotomapa
          </button>
        </div>
      
      </div>
      <div className='rightbar-map'>
        <p>Tu będzie mapa</p>
      </div>
    </div>
  )
}

export default RightCard