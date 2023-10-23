import Player from "./components/player"
import Gameboard from "./components/Gameboard"
function App() {
  return (
    <main>
      <div id="game-container">

        <ol id="players">
          <Player initialName={'player-1'} symbol={'X'} />
          <Player initialName={'player-2'} symbol={'O'}/>
        </ol>
        <Gameboard />
      </div>
      LOG
    </main>
  )
}

export default App
