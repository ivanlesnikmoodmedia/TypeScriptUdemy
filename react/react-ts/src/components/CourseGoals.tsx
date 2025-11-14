//import { FC } from "react";

type Goal = {
    id: string;
    text: string;
    description: string;
};


interface CourseGoalsProps {
    goals: Goal[];
}

export default function CourseGoals({ goals }: CourseGoalsProps) {
//const CourseGoals: FC<CourseGoalsProps> = () => {
    return (
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
            <article>
              <h2>{goal.text}</h2>
              <p>{goal.description}</p>
              <div>
                <button>Delete</button>
              </div>
            </article>
            </li>
          ))}
        </ul>
     );
}

//export default CourseGoals;