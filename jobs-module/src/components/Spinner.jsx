import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <PacmanLoader
      color="#36d7b7"
      cssOverride={override}
      loading
      size={100}
      speedMultiplier={1}
    />
  );
};
export default Spinner;
