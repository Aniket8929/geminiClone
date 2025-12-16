import Sidebar from "./component/Sidebar"
import Main from "./component/Main"
import Userprovider from "./context/context"

function App() {

  return (
    <Userprovider>
      <Sidebar />
      <Main />
    </Userprovider>
  )
}

export default App
