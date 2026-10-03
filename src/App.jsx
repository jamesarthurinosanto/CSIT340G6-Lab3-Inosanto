const App = () => {
  const course = 'Information Technology'
  const parts = [
    {
      name: 'Information Management 1',
      units: 3
    },
    {
      name: 'OObject-Oriented Programming',
      units: 3
    },
    {
      name: 'Application Development',
      units: 3
    }
  ]

  const fullName = 'James Arthur D. Inosanto'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer
        fullName={fullName}
        courseCode={courseCode}
        section={section}
      />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.parts[0].name}
        units={props.parts[0].units}
      />
      <Part
        name={props.parts[1].name}
        units={props.parts[1].units}
      />
      <Part
        name={props.parts[2].name}
        units={props.parts[2].units}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.parts[0].units +
        props.parts[1].units +
        props.parts[2].units}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      {props.fullName} - {props.courseCode} - {props.section}
    </footer>
  )
}

export default App
