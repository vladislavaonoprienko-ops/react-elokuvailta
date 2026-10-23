function EventCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Paikka: {props.location}</p>
      <p>Alkamisaika: {props.time}</p>
      <p>Hinta: {props.price}</p>
    </div>
  );
}

export default EventCard;
