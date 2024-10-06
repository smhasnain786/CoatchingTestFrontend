import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert2";

import PageTitle from "./../layouts/PageTitle";
import CounterSection from "../elements/CounterSection";
import NewsLetter from "../components/NewsLetter";
import bg2 from "./../assets/images/background/bg2.jpg";
import { addDataTranslateFormDetails } from "../services/datatranslate.service";
import { HotToaster } from "../utils/Toaster";

const DataTranslate = () => {
  const form = useRef();

  // State for the custom form inputs
  const [subject, setSub] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");


  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Send email using emailjs


  // Handle form submission to backend service
  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("subject", subject);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("file", file);
    formData.append("message", message);

    let result = await addDataTranslateFormDetails(formData);
    HotToaster(result.status, result.message);
  };

  return (
    <>
      <div className="page-content">
        <PageTitle parentPage="Home" childPage="Translate" />
        <section className="content-inner shop-account">

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 mb-4">
                <div className="login-area">
                  <div className="section-head style-1">
                    <h6 className="sub-title text-primary">DATA TRANSLATE</h6>
                    <h3 className="title m-b20">Add Your Query Here</h3>
                  </div>
                  <form ref={form} >
                    <input
                      type="hidden"
                      className="form-control"
                      name="dzToDo"
                      defaultValue="Contact"
                    />
                    <div className="input-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="dzName"
                        placeholder="Subject"
                        onChange={(e) => setSub(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="dzName"
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="dzEmail"
                        placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="file"
                        className="form-control"
                        name="file"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="input-group">
                      <textarea
                        required
                        name="dzMessage"
                        rows="5"
                        className="form-control"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <button
                        name="submit"
                        type="button"
                        value="submit"
                        className="btn w-100 btn-primary btnhover"
                        onClick={handleSubmit}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>









        <section className="content-inner">
          <div className="container">
            <div className="row sp15">
              <CounterSection />
            </div>
          </div>
        </section>
        <NewsLetter />
      </div>
    </>
  );
};

export default DataTranslate;
