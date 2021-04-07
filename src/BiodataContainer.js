import Photo from "@components/Photo"
import Name from "@components/Name"
import Age from "@components/Age"
import Address from "@components/Address"
import Button from "@components/Button"

function BiodataContainer(props) {
    return (
        <div className="biodata">
          <Photo src={props.src} />
          <Name fullname={props.fullname} />
          <Age age={props.age} />
          <Address address={props.address} />
          <Button handleClick={props.randomizePerson} text="randomize" />
        </div>
    )
}

export default BiodataContainer;