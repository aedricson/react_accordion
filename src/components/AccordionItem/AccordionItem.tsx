import { Item } from "../../types/item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

type Props = {
  item: Item;
  selectedId: number | null;
  onSelected: (value: number | null) => void;
};

export const AccordionItem: React.FC<Props> = ({
  item,
  selectedId,
  onSelected,
}) => {
  const handleChangeId = (id: number | null) => {
    onSelected(id === selectedId ? null : id);
  };
  
  return (
    <div className="notification is-info">
      <div className="is-flex is-justify-content-space-between">
        <h3 className="has-text-black">{item.title}</h3>

        <span
          onClick={() => handleChangeId(item.id)}
          className="icon is-clickable"
        >
          {selectedId === item.id ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </span>
      </div>

      {selectedId === item.id && item.description}
    </div>
  );
};
