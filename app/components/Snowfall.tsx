"use client";
import ReactSnowfall from "react-snowfall";

export default function Snowfall() {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 9999,
            }}
        >
            <ReactSnowfall color="#CBACF9" snowflakeCount={50} />
        </div>
    );
}
