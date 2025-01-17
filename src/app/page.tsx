"use client";

import MainFooterComponent from "@/components/MainFooterComponent";
import MainHeaderComponent from "@/components/MainHeaderComponent";
import { fetchAlbionCategories } from "@/utils/api";
import { useEffect, useState } from "react";
import DropdownButtonComponent from "@/components/DropdownButonComponent";
import { GetAllItems } from "@/utils/item";

interface Category {
  id: string;
  name: string;
  subcategories: { id: number; name: string }[];
}

const HomePage = () => {
  const [albionCategories, setAlbionCategories] = useState<Category[]>([]);
  const [listItem, setListItem] = useState<
    { Index: number; UniqueName: string }[]
  >([]);

  useEffect(() => {
    fetchAlbionCategories().then((categories) => {
      setAlbionCategories(categories.data);
      console.log(categories.data);
    });

    setListItem(GetAllItems());
    console.log(listItem);
  }, [listItem]);

  return (
    <div className="h-screen flex flex-col bg-slate-200">
      <MainHeaderComponent />
      <div className="flex-1 justify-center overflow-auto">
        <h1 className="text-4xl">Items and market prices</h1>
        <div className="flex p-8 space-x-4">
          <div className="w-1/4 rounded-lg">
            {albionCategories.map((category) => (
              // dropdown button
              <DropdownButtonComponent
                key={category.id}
                name={category.name}
                listItem={category.subcategories}
                onClick={({ id }: { id: number }) => {
                  return console.log(id);
                }}
              />
            ))}
          </div>
          <div className="flex-1 h-96 bg-white rounded-lg">
            <p>Item list</p>
            {/* {listItem.map((item) => (
              <p key={item.Index}>
                {" "}
                {item.Index} {item.UniqueName}
              </p>
            ))} */}
          </div>
        </div>
      </div>
      <MainFooterComponent />
    </div>
  );
};

export default HomePage;
