const PageHeadingTitle = ({ title, margin }) => {
  return (
    <>
      {title === "MUSIC" ? (
        <div>
          <span>MUSIC</span>
        </div>
      ) : (
        <div>
          <span
            className={`${margin} flex flex-col border-b-2 border-slate-200 justify-start`}
          >
            {title}
          </span>
        </div>
      )}
    </>
  );
};

export default PageHeadingTitle;
