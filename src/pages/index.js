import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/TimeLine/TimeLine';
import Experience from '../components/Experience/Experience';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';


const Home = () => {

    return (
    <Layout>
        <Section grid>
        <Hero />
        <BgAnimation />
        </Section>
        <Experience/>
        <Projects />
        <Skills />
        <Timeline />
    </Layout>
    );
};

export default Home;
