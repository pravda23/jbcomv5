import ButtonSmall from "../components/ButtonSmall.js";
import "../styles/App.styles.scss";

const MusicSubMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4 px-2">
      <div>
        <p>
          Download Creative Commons music tracks for videos, games and more.
        </p>
      </div>
      <div>
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
