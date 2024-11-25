const ButtonLarge = ({ text, link, target }) => {
  return (
    <>
      {/* <div > */}
      <a
        className="m-2 p-4 text-xl hover:border-yellow  border-2 border-slate-800 border-2 border-slate-700 rounded-md"
        href={link}
        target={target}
      >
        {text}
      </a>
      {/* </div> */}
    </>
  );
};

export default ButtonLarge;
