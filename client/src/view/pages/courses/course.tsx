import { Link } from "react-router-dom";
import "./course.scss";

export interface coursesProps {
  name: string;
  hours: number;
  lessons: number;
  participants: string;
  cost: number;
  description: string;
}
const Course = (props: coursesProps) => {
  const { name, hours, lessons, participants, cost, description } = props;

  return (
    <div className="course">
      <h4>    {name}</h4>
      <div>     {hours} hours</div>
      <div>      {lessons} lessons</div>
      <div>     {participants} participants</div>
      <div>
        cost per participant :{cost}</div>
      {/* <div>  <button className="btnreg">register</button></div>  */}

      <p>{description}   </p>

    </div >
  );
};

export default Course;
