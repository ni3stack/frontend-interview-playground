import { useRef, useState } from "react";
import "./OtpInput.css";
export function OtpInput({ length, otp, onComplete, onChange, autoFocus }) {
  const OTP_INPUT_REGEX = /^\d?$/;
  const OTP_PASTE_REGEX = /^\d+$/;
  const inputRefs = useRef([]);
  const handleChange = (event, i) => {
    const enteredVal = event.target.value?.trim();
    if (!OTP_INPUT_REGEX.test(enteredVal)) {
      return;
    }
    let copy = [...otp];
    copy[i] = enteredVal;
    onChange(copy);
    if (enteredVal.length === 1) {
      let nextPrvIdx = i + 1;
      if (nextPrvIdx < length) {
        inputRefs.current[nextPrvIdx]?.focus();
      }
    }
    if (copy.every(Boolean)) {
      onComplete?.(copy.join(""));
    }
  };
  const handleKeyDown = (event, i) => {
    switch (event.key) {
      case "ArrowLeft":
        if (i > 0) {
          inputRefs.current[i - 1]?.focus();
        }
        break;
      case "ArrowRight":
        if (i < length - 1) {
          inputRefs.current[i + 1]?.focus();
        }
        break;
      case "Backspace":
        if (event.target.value === "" && i > 0) {
          inputRefs.current[i - 1]?.focus();
        }
      default:
        break;
    }
  };

  const handlePaste = (event, startIdx) => {
    event.preventDefault();
    const pastedValue = event.clipboardData
      .getData("text")
      .replace(/\s+/g, "")
      .replace(/-/g, "");

    if (!OTP_PASTE_REGEX.test(pastedValue)) {
      return;
    }
    const values = pastedValue.slice(0, length - startIdx).split("");

    const copy = [...otp];
    values.forEach((digit, offset) => {
      let idx = offset + startIdx;
      if (idx < length) {
        copy[idx] = digit;
      }
    });
    onChange(copy);
    let lastFilledIdx = startIdx + values.length - 1;
    inputRefs.current[lastFilledIdx]?.focus();
    if (copy.every(Boolean)) {
      onComplete?.(copy.join(""));
    }
  };
  return (
    <div className="otp-input-container">
      {Array.from({ length: length }).map((_, idx) => (
        <input
          key={idx}
          aria-label={`OTP digit ${idx + 1}`}
          className="otp-input"
          type="text"
          onFocus={(e) => e.target.select()}
          autoFocus={autoFocus && idx === 0}
          autoComplete={idx === 0 ? "one-time-code" : "off"}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          inputMode="numeric"
          maxLength={1}
          value={otp[idx]}
          ref={(elm) => (inputRefs.current[idx] = elm)}
          onChange={(event) => handleChange(event, idx)}
          onKeyDown={(event) => handleKeyDown(event, idx)}
          onPaste={(event) => handlePaste(event, idx)}
        />
      ))}
    </div>
  );
}
