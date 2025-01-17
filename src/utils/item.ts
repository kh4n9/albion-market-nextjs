// từ file items.json lấy dữ liệu
import items from "@/data/items.json";

const GetAllItems = () => {
  return items as { Index: number; UniqueName: string }[];
};

export { GetAllItems };
