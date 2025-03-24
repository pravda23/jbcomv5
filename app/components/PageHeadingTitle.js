import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const PageHeadingTitle = ({ title, margin }) => {
  return (
    <>
      {title === "MUSIC" ? (
        <>
          <div className="fixed top-5 left-0">
            <span>
              <Link href="/">
                <BsChevronLeft
                  style={{
                    fontSize: "20px",
                    display: "inline",
                    marginBottom: "7px",
                    marginRight: "20px",
                  }}
                />
              </Link>
            </span>
          </div>
          <div>
            <span
              className="text-responsive"
              style={{
                whiteSpace: "nowrap", // Prevent text wrapping
              }}
            >
              JOHN BARTMANN FREE MUSIC
            </span>
          </div>
        </>
      ) : (
        <div>
          <span
            className={`${margin} text-xl flex flex-col border-b-2 border-slate-200 justify-start`}
          >
            {title}
          </span>
        </div>
      )}
    </>
  );
};

export default PageHeadingTitle;
