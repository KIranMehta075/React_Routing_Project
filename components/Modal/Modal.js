import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <section>
      <div
        className="modal fade show"
        id="exampleModal"
        tabIndex="-1"
        aria-hidden="false"
        style={{ display: "block" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Processing Video</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress" role="progressbar">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "5%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
