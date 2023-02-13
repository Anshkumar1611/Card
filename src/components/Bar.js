import React from "react";

const Bar = ({ tag, index, len }) => {
    const styles = {}
    if (index === 0) {
        styles.borderTopLeftRadius = '20px'
        styles.borderBottomLeftRadius = '20px'
    }
    else if (index === len - 1) {
        styles.borderTopRightRadius = '20px'
        styles.borderBottomRightRadius = '20px'
    }

    return (
        <div
            style={{
                background: tag.color,
                width: tag.percent,
                height: "100%",
                ...styles
            }
            }
        ></div>
    );
};

export default Bar;