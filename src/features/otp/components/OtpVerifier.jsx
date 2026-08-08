import { useState } from "react";
import { OtpInput } from "./OtpInput";
import "./OtpVerifier.css";

function OtpVerifier() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const onOtpChange = (value) => {
    setOtp(value);
    if (status) {
      setStatus("");
    }
  };

  const verifyOtp = (value) => {
    setLoading(true);
    setTimeout(() => {
      if (value === "356733") {
        setStatus("Valid Otp");
      } else {
        setStatus("Invalid Otp");
      }
      setLoading(false);
    }, 1000);
  };

  const isComplete = otp.every(Boolean);
  return (
    <div className="otp-actions">
      <OtpInput
        length={6}
        otp={otp}
        onChange={onOtpChange}
        onComplete={verifyOtp}
      />
      <div className="otp-error">
        <p>{status}</p>
      </div>
      <div className="otp-buttons">
        <button
          className="btn btn-primary"
          onClick={() => verifyOtp(otp?.join(""))}
          disabled={!isComplete || loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
        <button className="btn btn-secondary">Resend Code</button>
      </div>
    </div>
  );
}

export default OtpVerifier;