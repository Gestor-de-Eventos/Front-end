const ItemsList = ({ logo, title, children = null }) => {
  return (
    <li className=" rounded-lg">
      <a
        href="#"
        className="flex items-center p-2 text-gray-800 rounded-lg hover:bg-gray-100"
      >
        <i className={logo}></i>
        <span className="ms-3">{title}</span>
        <span className="ms-auto">{children}</span>
      </a>
    </li>
  );
};

export default ItemsList;
