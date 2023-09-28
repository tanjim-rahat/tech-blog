const Logo = ({ dark = false }) => {
  return (
    <a href="/">
      <h1 className="text-2xl font-medium tracking-wide text-main">
        TR<span className={dark ? "text-white" : "text-black"}>Blog</span>
      </h1>
    </a>
  );
};

export default Logo;
