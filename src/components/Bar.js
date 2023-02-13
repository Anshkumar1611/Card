import React from "react";

const Bar = ({ tag, index, len }) => {
    return (
        <div
            style={{
                background: tag.color,
                width: tag.percent,
                height: "100%",
            }
            }
        ></div>
    );
};

export default Bar;