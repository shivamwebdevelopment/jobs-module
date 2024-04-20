// const Card = ({ children, bg = "bg-[#303030]" }) => {
//   return <div className={`${bg}  p-6 rounded-md`}>{children}</div>;
// };

// export default Card;

const Card = ({ children, bg = "bg-[#303030]", text = "text-[#FFC470]" }) => {
  return (
    <>
      <div className={`${bg} ${text} p-6 rounded-md`}>
        {children} <br />
        <div>Social Link: facebook | twitter | youtube</div>
        {/* <button className="bg-[#ccc] text-black p-4">Read More</button> */}
      </div>
    </>
  );
};

export default Card;
