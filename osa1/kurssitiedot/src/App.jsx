const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  );
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  );
}

const Content = (props) => {
  return (
    <div>
      <Part part = 'Fundamentals of React' exercises={10} />
      <Part part = 'Using props to pass data' exercises={7} />
      <Part part = 'State of a component' exercises={14} />
    </div>
  );
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
}

const App = () => {
  const course = 'Half Stack application development';

  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  );
}

export default App;
