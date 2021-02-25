import { snakeCase } from "change-case";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import death from "../images/topics/death.png";
import love from "../images/topics/love.png";
import motivational from "../images/topics/motivational.png";
import { groupBy } from "../utils/Helper";

const Topics = ({ quotes, isLoading }) => {
  if (isLoading) return <Loading />;
  const topicsA = groupBy(quotes, (quote) => quote.topics);
  return (
    <>
      <div className="pt-20 mx-32">
        <h1 className="text-3xl font-black uppercase">Topics</h1>
      </div>

      <div className="grid mx-32 bg-background">
        <div className="flex flex-wrap items-center">
          {Object.keys(topics).map((key) => (
            <Link to={`/topics/${snakeCase(key)}`}>
              <button
                className="flex flex-col items-center justify-center m-4 rounded-lg w-80 h-80 hover:underline"
                style={{
                  backgroundImage: `linear-gradient(rgba(11, 22, 34, 0.5), rgba(11,22,34,0.5)), url(${topics[key].image})`,
                  backgroundSize: "cover",
                }}
              >
                <i className={` fas fa-${topics[key].icon} fa-5x`}> </i>
                <p className="text-2xl">{key}</p>
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-32">
        {Object.keys(topicsA)
          .sort()
          .map((key) => (
            <>
              <span className="text-5xl font-black">{key}</span>
              <div>
                {topicsA[key].map((quote) => (
                  <div className="py-4 text-2xl font-normal">
                    "{quote.text}" - {quote.author.name}
                  </div>
                ))}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Topics;

const topics = {
  Death: {
    icon: "skull-crossbones",
    image: death,
  },
  Motivational: {
    icon: "fire",
    image: motivational,
  },
  Love: {
    icon: "heart",
    image: love,
  },
};