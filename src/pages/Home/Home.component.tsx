import CinemaList from "components/CinemaList";
import Filter from "components/Filter";

const Home = () => {
  return (
    <main className="flex flex-row gap-5 px-3">
      <section>
        <Filter />
      </section>
      <section>
        <CinemaList />
      </section>
    </main>
  );
};

export default Home;
