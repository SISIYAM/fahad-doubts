import React from "react";

function PaidUserMessage() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffe0e0",
                    border: "1px solid #ff4d4f",
                    borderRadius: "8px",
                    padding: "16px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    color: "#ff4d4f",
                    fontFamily:
                        "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
            >
                <div>
                    <h3
                        style={{
                            margin: "0 0 8px 0",
                            fontWeight: "600",
                        }}
                    >
                        You're Locked!
                    </h3>
                    <p style={{ margin: 0 }}>
                        You are unable to post doubts at the moment. <br />
                        <strong>
                            Please purchase a subscription to unlock this
                            feature.
                        </strong>
                    </p>
                </div>
            </div>
        </>
    );
}

export default PaidUserMessage;
