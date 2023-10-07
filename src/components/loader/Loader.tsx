import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3182ed"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin: "-20px 0",
        }}
        visible={true}
      />
    </>
  );
};

export default Loader;
