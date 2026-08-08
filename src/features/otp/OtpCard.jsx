import { OtpVerifier } from "./OtpVerifier";

function OtpCard({ emailId = "-" }) {
  return (
    <div className="otp-page">
      <div className="otp-card">
        <div className="otp-heading">Confirm Your Identity</div>
        <p className="otp-description">
          {`The verification code was sent to this email address: ${emailId}.
          When you get the code, type the code into the field to confirm your
          identity and complete your job application.`}
        </p>
        <OtpVerifier />
      </div>
    </div>
  );
}
export default OtpCard;
