import Link from "next/link";
const Card = (props) => {
  return (
    <>
      <Link href={props.link} target="_blank">
        <div className="flex flex-col mt-2 p-4 border-2 border-zinc-600 border-l-8 rounded-lg bg-zinc-900 bg-opacity-50  hover:border-l-primarylight">
          <div className="card-title text-xl font-bold">{props.title}</div>
          <div className="text-md">{props.description}</div>
        </div>
      </Link>
    </>
  );
};

export default Card;
