import { Header } from "../components/header/header";
import { Profile } from "./profile/profile";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Profile
          name={"Leonardo Rosa da Silva"}
          description={
            "Olá, atualmente sou um Desenvolvedor FrontEnd, estudando ciência da computação e entusiasta por novas tecnologias."
          }
          imgProfile={'https://avatars.githubusercontent.com/u/102049207?v=4'}
        />
      </main>
    </>
  );
}
