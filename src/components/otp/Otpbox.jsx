import OtpInput from "react-otp-input";
import React, { useState } from "react";

function OtpI() {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);

  const handleSuccess = () => {
    console.log("Success!");
    // do something after successful OTP verification
  };

  const renderInput = (props, index) => {
    return (
      <input
        key={index}
        {...props}
        autoComplete="off"
        maxLength={1}
      />
    );
  };

  return (
    <div className="rounded-md p-4 text-lg text-center mx-auto">
      <div className="flex justify-center items-center space-x-4">
        <OtpInput
          value={code}
          onChange={handleChange}
          numInputs={4}
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          inputStyle={{
            border: "none",
            borderRadius: "20px",
            width: "54px",
            height: "54px",
            fontSize: "16px",
            color: "#000",
            fontWeight: "400",
            backgroundColor: "#F7FAFC",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            letterSpacing: "1.25rem",
            textAlign: "center"
          }}
          containerStyle={{
            justifyContent: "space-evenly",
            display: "flex",
            width: "100%",
            maxWidth: "240px",
            gap: "20px",
          }}
          focusStyle={{
            border: "px solid #CFD3DB",
            outline: "none"
          }}
          renderInput={renderInput}
          onComplete={handleSuccess}
        />
      </div>
    </div>
  );
}

export default OtpI;
