import { useState } from "react";

const DropdownButtonComponent = ({
  name,
  listItem,
  onClick,
}: {
  name: string;
  listItem: { id: number; name: string }[];
  onClick: ({ id }: { id: number }) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg">
      <button
        className="w-full bg-white border-2 p-2 font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {name} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="rounded-lg">
          {listItem.map((item) => (
            <button
              key={item.id}
              className="w-full p-2 bg-white border-2"
              onClick={() => {
                onClick({ id: item.id });
                setIsOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButtonComponent;
