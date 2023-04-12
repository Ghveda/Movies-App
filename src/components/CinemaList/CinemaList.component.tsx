import Card from "components/Card";
import { itemsArr } from "./CinemaList.mock";

const CinemaList = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {itemsArr.map((cinema) => (
        <Card {...cinema} key={cinema.id} />
      ))}
    </div>
  );
};

export default CinemaList;
