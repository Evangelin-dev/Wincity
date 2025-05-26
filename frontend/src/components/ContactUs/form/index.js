"use client";
import CustomButton from "@/components/custom/CustomButton";
import { useEffect, useState } from "react";
import SuccessMessage from "./SuccessMsg";
import "react-phone-number-input/style.css";
import PhoneInputWithCountrySelect from "react-phone-number-input";

const ContactUsForm = () => {
  const [loc, setLoc] = useState("");
  const [loader, setLoader] = useState(false);
  const [host, setHost] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isNameValid = (name) => /^[A-Za-z]*$/.test(name);
  const isPhoneValid = /^\d{13}$/.test(phoneValue?.replace(/\D/g, ""));
  const isEmailValid = emailRegex.test(email);

  const saveContactUs = async (e) => {
    e.preventDefault();

    if (!isPhoneValid) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    setLoader(true);
    const formData = new FormData(e.target);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/lead-generate/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        document.getElementById("contact-us-form").reset();
        document.getElementById("success-msg-modal-btn").click();
        setLoader(false);
        setPhoneValue("");
        setFirstName("");
        setLastName("");
        setEmail("");
      })
      .catch(() => {
        setLoader(false);
        alert("Something went wrong, will keep in touch with you!");
      });
  };

  return (
    <>
      {loader && (
        <div className="pt-5 d-flex align-items-center justify-content-center">
          <div className="spinner-border" role="status" aria-hidden="true"></div>
        </div>
      )}

      <SuccessMessage />
      <form
        onSubmit={saveContactUs}
        id="contact-us-form"
        className="d-flex flex-wrap align-items-center row"
      >
        <input type="hidden" value={host} name="source" />
        <input type="hidden" value={loc} name="location" />
        <input type="hidden" value="Other" name="interested_in" />
        <input
          type="hidden"
          value={process.env.NEXT_PUBLIC_CLIENT_ID}
          name="access_key"
        />

        <div className="col-md-12 text-white py-3 fs-2 fw-bold">
          <div>Got questions about our products or want to scale with us?</div>
          <div className="fs-6 fw-normal">
            Take the first step to convert your vision into visibility. Reach
            out to our friendly team — we’ll get back to you as soon as
            possible!
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              name="first_name"
              value={firstName}
              onChange={(e) => {
                if (isNameValid(e.target.value)) setFirstName(e.target.value);
              }}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              name="last_name"
              value={lastName}
              onChange={(e) => {
                if (isNameValid(e.target.value)) setLastName(e.target.value);
              }}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="workEmail"
              placeholder="Work Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="workEmail">Work Email</label>
          </div>
        </div>

       <div className="col-md-4">
  <div className="form-floating mb-3">
    <input type="hidden" value={phoneValue} name="phone" required />
    <PhoneInputWithCountrySelect
      value={phoneValue}
      onChange={(value) => {
        // Remove country code and non-digits
        const digitsOnly = value?.replace(/\D/g, "") || "";

        // Remove country code (assumes IN/91 country code which is 2 digits)
        const numberOnly = digitsOnly.startsWith("91")
          ? digitsOnly.slice(2)
          : digitsOnly;

        // Allow only 10 digits max
        if (numberOnly.length <= 10) {
          setPhoneValue(value);
        }
      }}
      defaultCountry="IN"
      className="form-floating"
      numberInputProps={{
        className: "form-control",
        required: true,
        name: "phone",
        placeholder: "Phone",
      }}
      limitMaxLength={15}
    />
  </div>
</div>


        <div className="col-md-4">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="What tasks would you like to solve?"
              id="note"
              name="note"
              required
            ></textarea>
            <label htmlFor="note">Type your Message here….</label>
          </div>
        </div>

        <div className="mb-3 mt-2 d-flex justify-content-end">
          <CustomButton
            title="Connect With Us"
            className="w-auto"
            disabled={
              !firstName ||
              !lastName ||
              !isEmailValid ||
              !isPhoneValid
            }
          />
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
