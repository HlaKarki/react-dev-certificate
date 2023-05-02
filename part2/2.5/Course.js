const courses = [
    {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
]

const Header = ({ name }) => <h1>{name}</h1>

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Total = ({ parts }) => {
    const totalExercises = parts.reduce(
        (acc, cur) => acc + cur.exercises, 0
    )
    return <h4>total of {totalExercises} exercises</h4>
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const Courses = () => {
    return (
        <div>
            {courses.map(course =>
                <Course key={course.id} course={course}/>
            )}
        </div>
    )
}
export default Courses
