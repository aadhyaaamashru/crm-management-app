import { Link, useParams } from "react-router-dom";

const SingleStudent = () => {
  const { username } = useParams();
  return (
    <div>
      <h5>HELLO {username}</h5>
    </div>
  );
};

export default SingleStudent;
