import './'
import pins from './pins.json'

function Pins() {
  console.log(pins)
  return (
    <div className="Pins">
        {pins ? pins.map((pin) => (
            <div key={pin.id}>
              <img className="pin-image"
                src={pin.images.orig.url}
                alt="pin"
              ></img>
              {pin.description}
            </div>
          )) : null}
    </div>
  );
}

export default Pins;
