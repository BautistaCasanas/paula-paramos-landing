import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { LanguageContextProvider } from './Context/Language';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Comments from './components/Comments/Comments';
import WhyMe from './components/WhyMe/WhyMe';
import Translation from './components/Translation/Translation';
import DigitalSignature from './components/DigitalSignature/DigitalSignature';

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
      <DigitalSignature />
    </LanguageContextProvider>
  );
}

export default App;