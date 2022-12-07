import { Link } from "react-router-dom";
import BeerImage from "../assets/beers.png";
import NewBeerImage from "../assets/new-beer.png";
import RandomBeerImage from "../assets/random-beer.png";

const Home = () => {
  return (
    <div>
      <div>
        <img src={BeerImage} alt="beers" />
        <Link to={"/beers"}>
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet. In quia labore aut quia rerum vel placeat
          unde. Et doloribus distinctio et velit expedita qui modi animi. Qui
          dolorem praesentium est amet quaerat et corporis deserunt qui
          similique quisquam est voluptatem nulla. Ea molestiae sapiente qui
          mollitia iure est quod molestiae et sunt Quis.
        </p>
      </div>
      <div>
        <img src={RandomBeerImage} alt="beers" />
        <Link to={"/random-beer"}>
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet. In quia labore aut quia rerum vel placeat
          unde. Et doloribus distinctio et velit expedita qui modi animi. Qui
          dolorem praesentium est amet quaerat et corporis deserunt qui
          similique quisquam est voluptatem nulla. Ea molestiae sapiente qui
          mollitia iure est quod molestiae et sunt Quis.
        </p>
      </div>
      <div>
        <img src={NewBeerImage} alt="New beers" />
        <Link to={"/new-beer"}>
          <h1>New Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet. In quia labore aut quia rerum vel placeat
          unde. Et doloribus distinctio et velit expedita qui modi animi. Qui
          dolorem praesentium est amet quaerat et corporis deserunt qui
          similique quisquam est voluptatem nulla. Ea molestiae sapiente qui
          mollitia iure est quod molestiae et sunt Quis.
        </p>
      </div>
    </div>
  );
};

export default Home;
