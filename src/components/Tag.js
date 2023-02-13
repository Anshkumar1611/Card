import React from "react";

const Tag = ({ tag }) => {
    return (
        <div
            className="tag flex mr-4 items-center"
        >
            <div
                className="mr-1 w-[12px] h-[12px] rounded-full"
                style={{
                    background: tag.color,
                }}
            ></div>
            <div>{tag.text}</div>
        </div>
    );
};

export default Tag;