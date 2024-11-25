import ButtonSmall from "../components/ButtonSmall.js";
import "../styles/App.styles.scss";

const MusicSubMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center pr-2 pl-2">
      <div>
        <div className="ps">
          Support my work and get Ableton Live project files on{" "}
          <a href="https://patreon.com/johnbartmann" target="_blank">
            Patreon.
          </a>
        </div>
        <span>
          <ButtonSmall text={"USAGE FAQ"} link={"/faq"} size={"0.8"} />
          <ButtonSmall
            text={"RATECARD"}
            link={"/ratecard.pdf"}
            size={"0.8"}
            target={"_blank"}
          />
          <ButtonSmall
            text={"METADATA"}
            link={
              "https://docs.google.com/spreadsheets/d/1lSEnqwGfV7shU5GsO8Cf6FSbFAf73gCFOlyzhbLuamo/edit#gid=1537321504"
            }
            size={"0.8"}
            target={"_blank"}
          />
          <ButtonSmall
            text={"SUPPORT"}
            link={"https://patreon.com/johnbartmann"}
            size={"0.8"}
            target={"_blank"}
          />
        </span>
      </div>
    </div>
  );
};
export default MusicSubMenu;
