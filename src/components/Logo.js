import React from "react";

export default function Logo({img, full}) {
    return (
        <span className="logo">
            {
                img ?
                    <img src={window.location.origin + "/k-circle-bw.png"}
                         id="k-img"
                         alt="logo"
                         // style={{"height": "5em"}}
                    />
                    :
                    <>
                    <span
                        style={{
                            "font-family": "Phetsarath OT",
                            "fontWeight": "999"
                        }}
                    >|</span>
                        <span
                            style={{
                                "font-family": "Noto Mono",
                                "fontWeight": "999"
                            }}
                        >{"{"}</span>
                    </>

            }
            {" "}
            {
                full && <span className="logo-text">tonal</span>
            }
        </span>
    )
        ;
}
