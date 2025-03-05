import React, { useState } from "react";

const formatPhoneNumber = (input) => {
  const cleaned = input.replace(/\D/g, "");
  if (cleaned.length < 4) return cleaned;
  return `(${cleaned.slice(0, 3)})${
    cleaned.length > 3 ? " " + cleaned.slice(3, 6) : ""
  }${cleaned.length > 6 ? "-" + cleaned.slice(6, 10) : ""}`;
};

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleChange = (e) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  return (
    <input
      type="tel"
      value={phoneNumber}
      onChange={handleChange}
      placeholder="(123) 456-7890"
      maxLength="14"
    />
  );
}

export default PhoneNumberInput;
