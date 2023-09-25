import EmailIcon from "./icons/Email";

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="grid grid-cols-2 items-center gap-12 py-16 bg-main px-8 text-white mt-12"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium">
          Subscribe for our latest updates
        </h3>
        <p className="text-sm w-4/5 text-justify">
          By subscribing you will get the update of new articles and posts. You
          can unsubcribe anytime
        </p>
      </div>
      <form className="h-10 flex gap-4">
        <div className="flex items-center h-full w-full border-2 border-white rounded-full">
          <EmailIcon size={32} className="mx-4" />
          <input
            className="bg-transparent rounded-full w-full pr-4 py-2 h-full placeholder-gray-200 focus:outline-none"
            placeholder="Email address"
          />
        </div>
        <button className="bg-black px-4 rounded-full text-white font-medium h-full">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
