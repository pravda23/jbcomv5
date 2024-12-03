const PageHeadingTitle = ({ title, margin }) => {
  return (
    <>
      {title === "MUSIC" ? (
        <div>
          <span className="text-xl">MUSIC</span>
        </div>
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
