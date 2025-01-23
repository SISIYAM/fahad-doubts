import React from "react";

function NotFoundAlert() {
    return (
        <>
            <div
                style={{
                    background: "linear-gradient(135deg, #f8d7da, #f5c6cb)",
                    border: "1px solid #f5c2c7",
                    color: "#842029",
                    borderRadius: "10px",
                    padding: "25px 35px",
                    margin: "20px 0",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                    position: "relative",
                    overflow: "hidden",
                    textAlign: "center",
                }}
            >
                {/* Decorative Circle 1 */}
                <div
                    style={{
                        content: '""',
                        position: "absolute",
                        top: "-20px",
                        left: "-20px",
                        width: "150px",
                        height: "150px",
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%",
                        zIndex: "0",
                        animation: "pulse 6s infinite ease-in-out",
                    }}
                />
                {/* Decorative Circle 2 */}
                <div
                    style={{
                        content: '""',
                        position: "absolute",
                        bottom: "-20px",
                        right: "-20px",
                        width: "120px",
                        height: "120px",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50%",
                        zIndex: "0",
                        animation: "pulse 8s infinite ease-in-out",
                    }}
                />
                {/* Content */}
                <div style={{ position: "relative", zIndex: "1" }}>
                    <h4
                        style={{
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            marginBottom: "10px",
                        }}
                    >
                        <i className="fas fa-exclamation-triangle"></i> No
                        doubts available
                    </h4>
                    <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                        Oops! We couldn't find any doubts matching your filters.
                        Please try adjusting your selection or explore other
                        options.
                    </p>
                </div>
            </div>
        </>
    );
}

export default NotFoundAlert;
