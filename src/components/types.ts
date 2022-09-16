export type ResponseType = { 
    data: [], 
    included: [] 
};

export type ListingsDataType = { 
    attributes: { 
        name: string 
    },
    relationships: { 
        primary_image: {
            data: { 
                id: string
            }
        }
    }
};

export type MapDataType = ListingsDataType & { 
    attributes: { 
        location: { 
            state: string 
        } 
    },
};
  
export type IncludedItemType = { 
    id: string, 
    attributes: { 
        url: string 
    } 
};
  
export type ItemType = {
    uniqueKey: string,
    name: string,
    imgUrl: string
};

export type MapStateType = {
    id: string,
    name: string,
    d?: string
}