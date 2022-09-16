/**
 * App Body Component
 * 
 */

import React, { ReactElement, useState, useEffect } from "react";

import { URL } from "../../constants";
import { getData } from "../../services/requester";
import { randomStringGenerator } from "../../services/random";
import { ListingsDataType, IncludedItemType, ItemType, ResponseType } from "../types";

import "./index.css";
import ItemsMapper from "../ItemsMapper";

const uniqueId = randomStringGenerator(24); // random string with length 24 symbols

const getUrl = (filter: string): string => {
  return `${URL}?filter[keywords]=${filter}`;
};

export const listingItems = (resp: ResponseType): ItemType[] => {
  const listItems: ItemType[] = [];

  resp.data.forEach((dataItem:  ListingsDataType) => {
    let imgId: string;
    let imgUrl: string = "";

    const img = dataItem.relationships.primary_image;
    const name = dataItem.attributes.name;

    if(img) imgId = img.data.id;

    resp.included.forEach((includedItem: IncludedItemType) => {
      if(includedItem.id === imgId) imgUrl = includedItem.attributes.url;
    });

    if(imgUrl !== "") {
      const uniqueKey = uniqueId.next().value;

      listItems.push({ uniqueKey, name, imgUrl });
    }
  });

  return listItems;
}

function Listings(): ReactElement {
  const [filter, setFilter] = useState("trailer")
  const [items, setItems] = useState([] as ItemType[]);

  useEffect(() => {
    const url = getUrl(filter);

    getData(url)
      .then((response: ResponseType) => {
        // console.log(response);
        setItems(listingItems(response));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filter]);

  function onChangeHandler(e: any) {
    const userSearch = e.target.value;
    setFilter(userSearch);
  }
  
  return (
    <main className="app-listings">
      <input className="app-listings-search" type="text" name="search" onChange={onChangeHandler}/>
      <br />
      { ItemsMapper(items) }
    </main>
  )
}

export default Listings;
 