import { Item } from "../../types/item";

type Props = {
  item: Item;
}

export const AccordionItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="notification is-info">
      <div className="is-flex is-justify-content-space-between">
        <h3 className="has-text-black">{item.title}</h3>
        <span className="icon is-clickable">
          <i className="fas fa-solid fa-angle-down"></i>
          {/* <i className="fas fa-solid fa-angle-up"></i> */}
        </span>
      </div>

      {item.description}
    </div>
  );
}