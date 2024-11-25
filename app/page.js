import Link from "next/link";
import NavbarHome from "./components/NavbarHome.js";
import ButtonLarge from "./components/ButtonLarge.js";

const Home = () => {
  return (
    <>
      <NavbarHome />
      <div className=" flex flex-col justify-center h-full t-1/2">
        <div className="flex justify-center text-2xl m-6">
          A portfolio of professional and personal creative work.
        </div>
        <div className="flex flex-wrap justify-center">
          <ButtonLarge text={"WORK"} link={"/work"} />
          <ButtonLarge text={"WEB DEV"} link={"/webdev"} />
          <ButtonLarge text={"MUSIC"} link={"/music"} />
          <ButtonLarge text={"ABOUT"} link={"/about"} />
          <ButtonLarge text={"CONTACT"} link={"/contact"} />
        </div>
      </div>
    </>
  );
};

export default Home;
