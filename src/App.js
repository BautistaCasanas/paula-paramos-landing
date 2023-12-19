import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { LanguageContextProvider } from './Context/Language';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Comments from './components/Comments/Comments';
import WhyMe from './components/WhyMe/WhyMe';
import Translation from './components/Translation/Translation';

function App() {
  return (
    <LanguageContextProvider>
      <NavBar />
      <Home />
      <AboutMe />
      <Education />
      <WhyMe />
      <Comments />
      <Translation />
    </LanguageContextProvider>
  );
}

export default App;