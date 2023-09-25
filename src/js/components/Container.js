const Container = ({ className = "", children }) => {
  return (
    <div
      className={`w-full px-4 md:px-0 sm:max-w-2xl 2xl:max-w-5xl mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
