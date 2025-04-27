
function RiverInfo() {
    return (
        <>
            <div className="water-info">
                <h2>Stan wody</h2>
                <div className="water-info-block">
                    <div className="water-status">
                        <h4>Stan wody - teraz</h4>
                        <p>Liczba</p>
                    </div>
                    <div className="">
                        <h4>Prognoza długoterminowa</h4>
                        <p>Dzień/godzina - lub tabela z danymi</p>
                    </div>
                    <div className="stations-status">
                        <h4>Stacje</h4>
                        <table>
                            <tr>
                                <td>Nazwa stacji</td>
                                <td>Stan wody</td>
                                <td>Podział</td>
                                <td>Status</td>
                            </tr>
                            <tr>
                                <td>Budyń</td>
                                <td>Zły</td>
                                <td>Na trzy</td>
                                <td>Okropny</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="water-temperature">
                <h2>Temperatura wody</h2>
                <div className="water-temp-block">
                    <div className="current-temp">
                        Godzina/data/nazwa rzeki
                    </div>
                    <div className="temp-stats">
                        <p>Minimalna</p>
                        <p>Średnia</p>
                        <p>Maksymalna</p>
                    </div>
                </div>
            </div>
            <div className="water-quality">
                <h2>Jakość wody</h2>
                <div className="water-quality-block">
                    <div className="current-quality">
                        <h4>Jakość wody - stan obecny</h4>
                        <p>Obrazek maybe</p>
                    </div>
                    <div className="quality-note">
                        <p>Opis jakiś</p>
                    </div>
                    <div className="legend-images">
                        <h4>Legenda + obrazki</h4>
                        <p>/10</p>
                        <p>/5</p>
                        <p>/1</p>
                        <p>/0,5</p>
                        <p>0,5</p>
                        <p>b.d</p>
                    </div>
                </div>
            </div>
            <div className="general-info">
                <h2>Wiadomości ogólne</h2>
                <div className="general-info-block">
                    <div className="river-lenght">
                        <h4>Długość:</h4>
                        <p>1</p>
                    </div>
                    <div className="river-flow">
                        <h4>Przepływ:</h4>
                        <p>tak</p>
                    </div>
                    <div className="river-sources">
                        <h4>Żródła:</h4>
                        <p>tak</p>
                    </div>
                    <div className="river-estuaries">
                        <h4>Ujścia:</h4>
                        <p>maybe</p>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default RiverInfo