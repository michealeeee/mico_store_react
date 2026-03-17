import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

function PhoneInput() {
  const phoneRef = useRef(null);

  useEffect(() => {
    const iti = intlTelInput(phoneRef.current, {
      initialCountry: "gh",
      separateDialCode: true,
      preferredCountries: ["ng", "gh", "us", "gb"],
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.7/build/js/utils.js",
    });

    return () => iti.destroy();
  }, []);

  return <input id="phone" ref={phoneRef} type="tel" />;
}

export default PhoneInput;