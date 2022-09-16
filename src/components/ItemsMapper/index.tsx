/**
 * ItemsMapper
 * 
 * @returns ItemsMapper Element Loader
 * 
 */

import React, { ReactElement } from "react";

import { ItemType } from "../types";
 
const ItemsMapper = (items: ItemType[]): ReactElement => {
    return (
    <>{
        items.length > 0 ?
        items.map((item: ItemType) => <article key={item.uniqueKey} className="item flex-container">
            <aside className="item-img flex-item-1">
            <img src={item.imgUrl} alt="RV image" width="250px" height="150px" />
            </aside>
            <h2 className="item-name flex-item-3">{item.name}</h2>
        </article>) :
        <h2 className="no-results">no results</h2>
    }</>
   )
};
 
export default ItemsMapper;
 