import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import More from './pages/More';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { cn } from './lib/utils';
import './globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main
            className={cn(
                "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-[#0a101a] max-sm:pt-20 bg-[radial-gradient(#22304a_1px,transparent_1px)] [background-size:16px_16px] text-white",
            )}
        >
            <Navbar />
            {children}
        </main>
    );
};

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/more" element={<More />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
