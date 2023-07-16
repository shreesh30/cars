import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices/carsSlice";

function CarSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state, action) => {
    return state.cars.searchTerm;
  });

  const handleSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </h3>
    </div>
  );
}

export default CarSearch;
