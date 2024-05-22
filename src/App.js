import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import GetStarted from "./routes/get-started/get-started.component";
import Contact from "./routes/contact/contact.component";
import About from "./routes/about/about.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="get-started" element={<GetStarted />} />
      </Route>
    </Routes>
  );
}

export default App;
