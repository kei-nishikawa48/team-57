const Item = ({ message }) => { //propsで受け取る
  return (
    <li>
      {message?.user} : {message?.content}
    </li>
  );
}

export default Item;