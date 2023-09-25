import { useEffect, useState } from "react";
import Image1 from "../../img/image1.jpg";
import Image2 from "../../img/image2.jpg";
import Image3 from "../../img/image3.jpg";

const Corousel = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: Image1,
      title: "A simple contect that is trending",
      exerpt:
        "Some description text for the dummy content or blog whatever you say it it haha",
    },
    {
      id: 2,
      image: Image2,
      title: "A simple contect that is trending",
      exerpt:
        "Some description text for the dummy content or blog whatever you say it it haha",
    },
    {
      id: 3,
      image: Image3,
      title: "A simple contect that is trending",
      exerpt:
        "Some description text for the dummy content or blog whatever you say it it haha",
    },
  ]);
  const [shownIndex, setShownIndex] = useState(0);

  useEffect(() => {
    const ivId = setInterval(() => {
      setShownIndex((index) => (index == data.length - 1 ? 0 : index + 1));
    }, 5000);

    return () => {
      clearInterval(ivId);
    };
  }, []);

  return (
    <section className="aspect-[5/2] bg-gray-300 rounded-md overflow-hidden flex relative">
      <div
        className="absolute inset-0 flex duration-500 transition-transform"
        style={{ transform: `translateX(-${shownIndex * 100}%)` }}
      >
        {data.map((datum) => (
          <div key={datum.id} className="w-full h-full relative flex-shrink-0">
            <img
              src={datum.image}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-grad bg-opacity-50 flex flex-col gap-4 justify-center text-white px-12">
              <h1 className="font-medium text-3xl">{datum.title}</h1>
              <p className="text-sm w-1/2">{datum.exerpt}</p>
              <button className="px-3 py-1 bg-main rounded text-white w-max text-sm font-medium mt-4">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 justify-center text-white bg-black bg-opacity-50 px-3 py-1.5 rounded-full">
        {data.map((datum, index) => (
          <button key={datum.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
              className={`${shownIndex == index ? "text-main" : ""}`}
              onClick={() => setShownIndex(index)}
            >
              <path
                fill="currentColor"
                d="M4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z"
              />
            </svg>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Corousel;
