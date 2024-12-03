import NavbarHome from "./components/NavbarHome.js";
import Footer from "./components/Footer.js";
import ButtonLarge from "./components/ButtonLarge.js";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavbarHome />
        <div className="flex flex-col justify-center flex-grow t-1/2">
          <div className="flex justify-center text-2xl m-6">
            A portfolio of professional and personal creative work.
          </div>
          <div className="flex flex-wrap justify-center">
            <ButtonLarge text={"WORK"} link={"/work"} />
            <ButtonLarge text={"WEB DEV"} link={"/webdev"} />
            <ButtonLarge text={"MUSIC"} link={"/music"} />
            <ButtonLarge text={"CONTACT"} link={"/contact"} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
