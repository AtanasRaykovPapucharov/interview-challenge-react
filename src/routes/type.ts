/**
 * Router types
 * 
 */

export type LinkType = {
    id: string,
    name: string,
    path: string
}

export type RouteType = LinkType & { view: any }
