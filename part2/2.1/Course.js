const Header = ({ name }) => {
    return <h1>{name}</h1>
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Part = ({ part }) => {
    return <p>{part.name} {part.exercises}</p>
}

const Total = ({ parts }) => {
    let totalExercise = 0
    parts.map(part =>
        totalExercise += part.exercises
    )
    return (
        <p>Number of exercises {totalExercise}</p>
    )
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
