import Container from "./Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <Container className="h-[100px] flex items-center justify-between">
        <section aria-label="logo section">
          <Logo dark={true} />
        </section>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <nav className="sm:flex hidden sm:gap-6 md:gap-8">
            <a href="#explore">Latest</a>
            <a href="#explore">Explore</a>
          </nav>

          <button aria-label="search button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
