import Image from "next/image";
import HeaderModule from './Components/Header/Header';
import HeroModule from './Components/Hero/Hero';
import InterestsSubjects from "./Components/InterestSubjects/InterestSubjects";
import CV from './Components/CV/CV';
import Proyects from './Components/Proyects/Proyects';
import Fotter from './Components/Fotter/Fotter';
import styles from './globals.css';

export default function Home() {
  return (
    <>
    <HeaderModule/>
    
    <main>
       <HeroModule/>
      <InterestsSubjects/>
      <CV/>
      <Proyects/>
    </main>

    <Fotter/>
    </>

  );
}
