const LoginOptions = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="" key={item.text}>
          <img src={item.img} alt={item.text} />
          <p>{item.text}</p>
        </div>
      ))}
    </>
  );
};

export default LoginOptions;
