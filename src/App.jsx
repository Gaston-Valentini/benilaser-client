import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Treatments from "./views/Treatments/Treatments";
import FrequentlyQuestions from "./views/FrequentlyQuestions/FrequentlyQuestions";
import Contact from "./views/Contact/Contact";
import Terms from "./views/Terms/Terms";
import Footer from "./sections/Footer/Footer";
import Whatsapp from "./components/Whatsapp/Whatsapp";

export default function App() {
    return (
        <Router anchorScrolling={true}>
            <div className={style.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/treatments" element={<Treatments />} />
                    <Route path="/frequently-questions" element={<FrequentlyQuestions />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
                <Footer />
                <Whatsapp />
            </div>
        </Router>
    );
}
