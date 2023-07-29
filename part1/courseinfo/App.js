const Hearder = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.tag} {props.info}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part tag={props.parts[0].name} info={props.parts[0].info}/>
      <Part tag={props.parts[1].name} info={props.parts[1].info}/>
      <Part tag={props.parts[2].name} info={props.parts[2].info}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercoses {props.ex1 + props.ex2 + props.ex3}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [{name: part1, exercise: exercises1}, {name: part2, exercises2}, {name: part3, exercise: exercises3}]
  return (
    <>
      <Hearder course={course}/>
      <Content parts={parts}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </>
  )
}

export default App