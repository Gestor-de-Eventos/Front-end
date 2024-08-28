import ReactLoading from "react-loading";
export const Loader = ({ type, color }) => {
  return (
    <ReactLoading
      type="spokes"
      color="green"
      width={75}
      height={75}
      className="block m-auto mt-10"
    />
  );
};
