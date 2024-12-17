const Stars = (props) => {
  const rating = props.rating;

  const arr = Array(5).fill(0);

  return (
    <div>
      {arr.map((_, index) => {
        if (index <= rating - 1) {
          return "⭐";
        } else {
          return "☆";
        }
      })}
    </div>
  );
};
export default Stars;
