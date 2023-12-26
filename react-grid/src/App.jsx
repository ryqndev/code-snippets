import { News } from "./ pages/News/News";
import { Navigation } from "./components/Navigation";
import cn from "./App.module.css";

function App() {
  return (
    <div className={cn.container}>
      <Navigation />

      <main>
        <News />
      </main>
    </div>
  );
}

export default App;
