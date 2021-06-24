import './'
import './pins.css'
import CallMadeIcon from '@material-ui/icons/CallMade'
import { Container } from '@material-ui/core'
import Masonry from 'react-masonry-css'



function Pins(props) {
    const { pins } = props

    const breakPoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
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
                        alt={p.description}
                        >
                        </img>
                        <a className='save-button'>Save</a>
                        <a className='visit-link' href={p.link}><CallMadeIcon fontSize='small'/></a> 
                        </div>
                    })}
            </Masonry>
        </Container>
    )
}

export default Pins
