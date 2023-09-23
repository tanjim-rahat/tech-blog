import { useState } from "react";
import Corousel from "./Corousel";
import Header from "./Header";

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
    <div>
      <div className="px-4 2xl:max-w-5xl mx-auto">
        <Header />

        <main className="mt-2">
          <Corousel />

          <section>
            <h1 className="text-2xl text-center uppercase tracking-wider mt-20">
              Explore
            </h1>

            <div className="grid grid-cols-3 gap-12 py-12">
              {data.map((datum) => (
                <div key={datum.id} className="flex flex-col gap-4">
                  <img src={datum.image} className="rounded-md" />

                  <h3 className="font-medium">{datum.title}</h3>
                  <p className="text-sm">{datum.exerpt}</p>
                  <section className="text-xs text-gray-600 flex items-center gap-6">
                    <date className="">{datum.createdAt}</date>
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
        </main>
      </div>
    </div>
  );
};

export default App;
