import Link from "next/link";
const Card = (props) => {
  return (
    <>
      <Link href={props.link} target="_blank">
        <div className="flex flex-col mt-2 p-4 border-2 border-zinc-600 border-l-8 rounded-lg bg-zinc-900 bg-opacity-50 text-2xl hover:border-l-yellow">
          <div className="card-title">{props.title}</div>
          <div className="text-lg">{props.description}</div>
        </div>
      </Link>
    </>
  );
};

export default Card;
