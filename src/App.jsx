import Sidebar from "./components/sidebar/Sidebar";
import Introduction from "./containers/introduction/Introduction";
import About from "./containers/about/About";
import Resume from "./containers/resume/Resume";
import Portfolio from "./containers/portfolio/Portfolio";
import Contact from "./containers/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className="sections">
        <Introduction/>
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
