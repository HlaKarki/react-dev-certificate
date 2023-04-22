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

export default Course
