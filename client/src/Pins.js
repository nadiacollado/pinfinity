import './'
import { Container } from '@material-ui/core'
import Masonry from 'react-masonry-css'
import "./App.css"

function Pins(props) {
    const { pins } = props

    const breakPoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return (
        <Container>
            <Masonry
            breakpointCols={breakPoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
                {pins.map(p => {
                    console.log(p)
                    return<div className='pin' key={p.id}>
                        <img 
                        src={p.images.orig.url} 
                        alt='cat-pins'
                        >
                        </img>
                        <a className='save-button'>Save</a>
                        <a className='link' href={p.link}>Visit Me</a> 
                        </div>
                    })}
            </Masonry>
        </Container>
    )
}

export default Pins;
