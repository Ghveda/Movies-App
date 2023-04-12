import CinemaList from "components/CinemaList";
import Filter from "components/Filter";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState<string>();

  return (
    <main className="flex flex-row gap-5 px-3">
      <section>
        <Filter setCategory={setCategory} category={category} />
      </section>
      <section className="w-full">
        <CinemaList category={category} />
      </section>
    </main>
  );
};

export default Home;
