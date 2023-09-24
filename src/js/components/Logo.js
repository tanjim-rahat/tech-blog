const Logo = ({ dark = false }) => {
  return (
    <a href="/">
      <h1 className="text-2xl text-main">
        Tech<span className={dark ? "text-white" : "text-black"}>Know</span>
      </h1>
    </a>
  );
};

export default Logo;
