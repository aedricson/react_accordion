import React, { useState } from "react";
import { Item } from "../../types/item";
import { AccordionItem } from "../AccordionItem";


type Props = {
  items: Item[];
}

export const Accordion: React.FC<Props> = ({ items }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="content px-6 mt-6">
      {items.map(item => (
        <AccordionItem
          item={item}
          selectedId={selectedId}
          onSelected={setSelectedId}
          key={item.id}
        />
      ))}
    </div>
  );
};
