const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  );
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      {props.part.name} {props.part.exercises}
    </div>
  );
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
}

const Total = (props) => {
  console.log(props)
  const totalExercises = props.part + props.part2 + props.part3
  return (
    <div>
      <p>
        Number of exercises {totalExercises}
      </p>
    </div>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part={part1.exercises} part2={part2.exercises} part3={part3.exercises} />
    </div>
  );
}

export default App;