export type ResponseType = { 
    data: [], 
    included: [] 
};

export type DataItemType = { 
    attributes: { name: string },
    relationships: { 
        primary_image: {
            data: { 
                id: string
            }
        }
    }
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