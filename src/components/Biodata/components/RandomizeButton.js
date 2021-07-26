import Button from '../../Button';

function RandomizeButton(props) {
  let bg;
  let bgHover;
  switch (props.theme) {
    case "red":
      bg = "#7b113a";
      bgHover = "#e01f69";
      break;
    default:
      bg = "#1c2b51";
      bgHover = "#3c5caf";
      break;
  }
  return <Button bg={bg} bgHover={bgHover} onClick={props.handleClick}>randomize</Button>
}

export default RandomizeButton