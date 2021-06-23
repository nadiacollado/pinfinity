import './'
import Grid from '@material-ui/core/Grid'

function Pins(props) {
    const { pins } = props

    return (
        <div className="Pins">
            {pins.map(p => {
            return<div key={p.id}>
            <img 
            src={p.images.orig.url}
            alt='cat-pins'
            >
            </img>
          </div>
          })}
        </div>
    )
}

export default Pins;
