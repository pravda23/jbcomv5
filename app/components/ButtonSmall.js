const ButtonSmall = ({ text, link, target, size }) => {
  return (
    <>
      <a href={link} target={target}>
        <div
          style={{ fontSize: `${size}` + "rem" }}
          className="inline-grid grid-cols-1 pr-4 hover:bg-zinc-800 "
        >
          {text}
        </div>
      </a>
    </>
  );
};

export default ButtonSmall;
