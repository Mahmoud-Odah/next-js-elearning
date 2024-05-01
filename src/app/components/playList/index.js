"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import VisaMoadl from "../visa";
import Modal from 'react-modal';

const PlayList = ({ data }) => {
  console.log("data ss ", data);

  const [path, setPath] = useState(
    `http://127.0.0.1:1338${data?.videos[0]?.video}`
  );
  const [list, setList] = useState(data?.videos);
  const [active, setActive] = useState(0);
  const [files, setFiles] = useState(list.map((el) => el.files)[0]);
  const [filesCourse, setFilesCourse] = useState(data.files);
  const [userData] = useState(JSON.parse(localStorage.getItem("user")));
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const changePath = (el, index) => {
    console.log("change el >> ", el);
    setPath(`http://127.0.0.1:1338${el?.video}`);
    setActive(index);
    setFiles(el.files);
  };
  console.log("files :>> ", files);
  useEffect(() => {
    const myVideo = document.querySelector("#videoPlayer");
    const mySource = document.querySelector("#source");
    if (mySource && myVideo) {
      mySource.setAttribute("src", path);
      myVideo.load();
    }
  }, [path]);

  const handleRegister = async () => {

    const apiUrl = `http://localhost:3005/api/users/${userData.user_id}`;

    // Data to be sent in the request body
    const updatedData = {
      courseID: data.id,
      email : userData.email
    };
    axios
      .put(apiUrl, updatedData)
      .then((response) => {
        console.log("Updated successfully:", response.data);
        closeModal();
        toast.success("You have successfully subscribed to the course", {
        });
      })
      .catch((error) => {
        console.error("Error updating resource:", error);
        closeModal()
        toast.error("You are already subscribed to this course", {
        });
      });
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <div className="playList-content container m-auto max-w-screen-xl">
      <ToastContainer position="top-right" />
        <div className="playList-content-left">
          {data?.is_pay && (
            <button
              // onClick={() => handleRegister(data)}
              onClick={openModal}
              className="start-now-playList"
              disabled={userData ? false : true}
            >
              <h1>Pay Now !</h1>
              
            </button>
          )}
          <div className="playList-content-left-sub">
            {list.map((el, index) => (
              <div className="playList-content-list">
                <div
                  className={`playList-box ${active === index ? "active" : ""}`}
                  onClick={() => changePath(el, index)}
                >
                  <h1>{el.Title}</h1>
                  <p>{el.Duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="playList-content-right">
          <video width="640" height="360" controls id="videoPlayer">
            <source src={`${path}`} type="video/mp4" id="source" />
          </video>
        </div>
      </div>
      {(files?.length || filesCourse?.length) && (
        <div className="box-attatchment container m-auto max-w-screen-xl">
          <h1>Attachment</h1>
          <div className="box-attatchment-content">
            {files?.length && (
              <div className="box-att">
                <h2>Lesson Attachments</h2>
                {files?.map((el, index) => (
                  <div className="box-att-item">
                    <div className="box-att-item-left">
                      <img src="/assets/img/pdf.png" alt="pdf" />
                      <h3>{el.name}</h3>
                    </div>
                    <a
                      href={`http://localhost:1338${el.url}`}
                      target="_blank"
                      className="box-att-item-right"
                    >
                      <img src="/assets/img/inbox.png" alt="inbox" />
                    </a>
                  </div>
                ))}
              </div>
            )}
            <div className="box-att">
              <h2>Course Attachments</h2>
              {filesCourse?.map((el, index) => (
                <div className="box-att-item">
                  <div className="box-att-item-left">
                    <img src="/assets/img/pdf.png" alt="pdf" />
                    <h3>{el.name}</h3>
                  </div>
                  <a
                    href={`http://localhost:1338${el.url}`}
                    target="_blank"
                    className="box-att-item-right"
                  >
                    <img src="/assets/img/inbox.png" alt="inbox" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {data.description && (
        <div className="playList-content-text container m-auto max-w-screen-xl">
          <h1>About the Course</h1>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <VisaMoadl action={handleRegister}/>

      </Modal>
    </>
  );
};

export default PlayList;
