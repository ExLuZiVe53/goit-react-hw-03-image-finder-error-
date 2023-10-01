export const Loader = () => {
  return (
    <div>
      {/* settings library react-loader-spiner */}
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      {/* <p className="loading">Loading...</p> */}
    </div>
  );
};
