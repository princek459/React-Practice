import './Title.css'

// {Props destructuring}
export default function Title( { title,subtitle } ) {
    return (
        <div className="title-block">
            <h1 className='title'>{title}</h1>
            <br />
            <h2 className='subtitle'>{subtitle}</h2>

        </div>
    )
}