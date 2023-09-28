import { useState } from "react";
import Corousel from "./Corousel";
import Header from "./Header";
import Subscribe from "./Subscribe";
import Container from "./Container";
import Logo from "./Logo";
import EmailIcon from "./icons/Email";

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1695282339113-c6edef867cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80&w=200",
      title: "Random title for this article",
      exerpt:
        "Some information about this article. actually this is the main article only cut down to few wor...",
      createdAt: "12 May 2023",
      views: "10k",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1694889649834-91ff242d1763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80&w=200",
      title: "Random title for this article",
      exerpt:
        "Some information about this article. actually this is the main article only cut down to few wor...",
      createdAt: "12 May 2023",
      views: "10k",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1682685797277-f2bf89b24017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80&w=200",
      title: "Random title for this article",
      exerpt:
        "Some information about this article. actually this is the main article only cut down to few wor...",
      createdAt: "12 May 2023",
      views: "10k",
    },
  ]);

  return (
    <div className="bg-dark text-white">
      <Header />

      <main>
        <Container className="mt-2">
          <Corousel />

          <section>
            <h1 className="text-2xl text-center uppercase tracking-wider mt-12">
              Latest
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 py-12">
              {data.map((datum) => (
                <div
                  key={datum.id}
                  className="flex flex-col border rounded-md shadow-sm"
                >
                  <figure className="relative">
                    <img
                      src={datum.image}
                      className="rounded-tr-md rounded-tl-md"
                    />
                    <figcaption
                      style={{
                        background: "rgb(0,0,0)",
                        background:
                          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                      }}
                      className="w-full absolute bottom-0 p-2 pt-12 text-white font-medium text-lg"
                    >
                      {datum.title}
                    </figcaption>
                  </figure>

                  <div className="p-4 flex flex-col gap-4">
                    <p className="text-sm">{datum.exerpt}</p>
                    <section className="text-xs text-gray-600 flex items-center gap-6">
                      <p className="">{datum.createdAt}</p>
                      <p className="bg-gray-500 rounded px-2 py-1 text-white">
                        {datum.views} views
                      </p>
                    </section>
                    <a
                      href="#"
                      className="px-3 py-1.5 rounded bg-main text-white text-center text-sm"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Subscribe />

          <section id="explore">
            <h1 className="text-2xl text-center uppercase tracking-wider mt-12">
              Explore
            </h1>

            <div className="grid grid-cols-3 gap-12 py-12">
              {data.map((datum) => (
                <div key={datum.id} className="flex flex-col gap-4">
                  <img src={datum.image} className="rounded-md" />

                  <h3 className="font-medium">{datum.title}</h3>
                  <p className="text-sm">{datum.exerpt}</p>
                  <section className="text-xs text-gray-600 flex items-center gap-6">
                    <p className="">{datum.createdAt}</p>
                    <p className="bg-gray-500 rounded px-2 py-1 text-white">
                      {datum.views} views
                    </p>
                  </section>
                  <a className="px-3 py-1.5 rounded bg-main text-white w-max text-sm">
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <footer className="bg-black pt-16 pb-4 text-white mt-12">
        <Container className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <Logo dark={true} />

            <section className="flex flex-col gap-2">
              <p className="text-right">Find us on</p>
              <div className="flex gap-3 items-center">
                <a>
                  <EmailIcon size={32} />
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"
                    />
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </div>
          <p className="text-center text-xs">
            &copy; Copyright (2023-current). All rights reserved
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default App;
