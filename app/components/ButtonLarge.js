const ButtonLarge = ({ text, link, target }) => {
  return (
    <>
      {/* <div > */}
      <a
        className="m-2 p-4 text-xl border-2 rounded-md hover:border-yellow"
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
