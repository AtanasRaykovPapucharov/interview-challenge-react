/**
 * MapSearch
 * 
 * @returns React Element MapSeach
 * 
 */
import React, { useEffect, useState } from "react";

import { getData } from "../../services/requester";
import { MapDataType, IncludedItemType, ItemType, ResponseType, MapStateType } from "../types";
import usa from "./usa-states.json";
import { MapColor, URL } from "../../constants";
import { randomStringGenerator } from "../../services/random";
import ItemsMapper from "../ItemsMapper";
import { listingItems } from "../Listings";

import "./index.css";

const uniqueId = randomStringGenerator(24); // random string with length 24 symbols
 
const MapSearch = () => {
  const [state, setState] = useState({ id: "NY", name: "New York" })
  const [items, setItems] = useState([] as ItemType[]);

  const listingMapItems = (resp: ResponseType): ItemType[] => {
    const listItems: ItemType[] = [];
  
    resp.data.forEach((dataItem:  MapDataType) => {
      if(dataItem.attributes.location.state === state.id) {
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
      }
    });
  
    return listItems;
  }

  useEffect(() => {
    getData(URL)
      .then((response: ResponseType) => {
        setItems(listingMapItems(response));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state]);

  function onClickHandler(e: any) {
      const id = e.target.id.replace("US-", "");
      const name = e.target.getAttribute("name");

      setState({ id, name });

      console.log(state.id + " " + state.name)
  }

  function onMouseEnterHandler(e: any) {
    e.target.style.opacity = "0.5";
  }

  function onMouseLeaveHandler(e: any) {
    e.target.style.opacity = "1";
  }

  return (
    <main className="app-listings">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="477 421 593.3779761904764 318.2870370370371"
        width="600"
        height="320"
        fill="green"
        stroke="white"
        strokeWidth={1}

        >
        {
            usa.states.map((s: MapStateType) => {
              return <path 
                  key={ s.id } 
                  id={ s.id } 
                  name={ s.name } 
                  d={ s.d } 
                  onClick={ onClickHandler } 
                  onMouseEnter={ onMouseEnterHandler } 
                  onMouseLeave={ onMouseLeaveHandler } 
                  fill={ `US-${state.id}` !== s.id ? MapColor.PURPLE : MapColor.RED }
              >
                  <title>{s.name}</title>
              </path>
            })
        }
      </svg>
      <h2 className="state-name">{state.name}</h2>
      <br />
      { ItemsMapper(items) }
    </main>
  )
}

export default MapSearch;
 