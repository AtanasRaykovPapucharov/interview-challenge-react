import { CSSProperties } from "react";
import { MessageType } from "../Logger/type";

enum MessageColor {
    SUCCESS = "#46ac46",
    ERROR = "#c06464",
    WARNING = "rgba(73,104,142, 0.6)"
}

const commonStyle: CSSProperties = {
    display: "none"
}

export const getLogColor = (type: MessageType): CSSProperties => {
    switch(type) {
        case MessageType.ERROR: return {
            ...commonStyle,
            backgroundColor: MessageColor.ERROR
        };
        case MessageType.SUCCESS: return {
            ...commonStyle,
            backgroundColor: MessageColor.SUCCESS
        };
        case MessageType.SUCCESS: return {
            ...commonStyle,
            backgroundColor: MessageColor.WARNING
        };
        default: return commonStyle;
    }
}