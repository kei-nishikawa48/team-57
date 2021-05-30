const Item = ({message}) => {
  return (
    <li>
      {message?.user} : {message?.content}
    </li>
  );
}

export default Item;