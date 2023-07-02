import React, { useState, useEffect } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import SelectOption from "../../components/SelectOption/SelectOption";
import VideoOptions from "../../assets/images/video-analytics-form.png";
import "./VideoAnalysis.css";
import NavBarLogo from "../../components/NavBar/NavBarLogo/NavBarLogo";
import Modal from "../../components/Modal/Modal";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate, useLocation } from "react-router-dom";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

const VideoAnalysis = () => {

        const navigate = useNavigate();

        const [file, setFile] = useState(null);
        const [uploading, setUploading] = useState(false);
        const [uploaded, setUploaded] = useState(false);
        const [isOpen, setIsOpen] = useState(false);
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const [selectedOption, setSelectedOption] = useState("");

        const options = [
            { value: "File", label: "John" },
            { value: "File Url", label: "Jane" }
        ];

        const handleOptionSelect = event => {

            setSelectedOption(event.target.value);
            navigate(`/${event.target.value}`)

        };

        // useEffect(() => {
        //  if(selectedOption !== ""){
        //    navigate(`/${selectedOption}`);
        //  }
        // },
        // [selectedOption, navigate]);

        const handleSelectChange = e => {
            console.log(e.target.value);
        };

        const handleFileChange = event => {
            const file = event.target.files[0];
            if (file && file.type !== 'video/mp4') {
                event.target.value = null;
                alert("Please select an mp4 file");
            } else {

                setFile(file);
            }
        };

        const handleSubmit = event => {
            event.preventDefault();

            setUploading(true);

            const formData = new FormData();

            formData.append("file", file);
            fetch("/upload", {
                    method: "POST",
                    body: formData
                })
                .then(() => {

                    setUploaded(true);
                    setUploading(false);

                })
                .catch(error => {
                    console.log(error);
                    setUploading(false);
                    // alert("File upload failed");
                });
        };

        const handleClick = () => {
            setIsOpen(true);
        }

        const handleClose = () => {
            setIsOpen(false);
        }

        const handleDropdownToggle = (e) => {
            e.preventDefault();
            setDropdownOpen(!dropdownOpen);
            console.log("onclick clicked")
        }



        return ( <
            div className = "" > { /* <NavBar label="Sponsorship - Video Analytics Suite  " isOpen={dropdownOpen} onClick={handleDropdownToggle}/> */ } <
            DropdownMenu label = "Sponsorship - Video Analytics Suite  " / > { /* <NavBar  label="Sponsorship - Video Analytics Suite" onChange={handleOptionSelect} selectedOption={selectedOption}/> */ } <
            section className = "upload-form" >
            <
            div className = "container" >
            <
            div className = "row g-0 d-flex" >
            <
            div className = "col-lg-5 d-flex flex-column justify-content-center  align-items-center" >
            <
            img src = { VideoOptions }
            className = "img-fluid"
            alt = "Video-analytics-forms" /
            >
            <
            div className = "upload-form-text p-3" >
            Select Video Processing Options <
            /div> <
            /div> <
            div className = "col-lg-7" >
            <
            form onSubmit = { e => handleSubmit(e) } >
            <
            div className = "form-row pt-5" >
            <
            div className = "offset-1 col-lg-10" >
            <
            SelectOption options = { options }
            onChange = { handleSelectChange }
            className = "" /
            >
            <
            /div> <
            /div> <
            small className = " offset-1 text-muted py-2" > OR < /small> <
            div className = "form-row pt-0" >
            <
            div className = "offset-1 col-lg-10" >
            <
            InputField type = "text"
            name = "Enter Data Lake URL"
            value = "Enter Data Lake URL"
            placeholder = "Enter Data Lake URL"
            className = ""
            // onChange={e => handleChange(e)}
            /
            >
            <
            /div> <
            /div> <
            small className = "offset-1 text-muted py-2" > OR < /small> <
            div className = "form-row pt-0" >
            <
            div className = "offset-1 col-lg-10" > {
                /* <InputField
                                      type="file"
                                      className="form-control"
                                      id="formFile"
                                      onChange={ e => handleFileChange(e)}
                                    /> */
            } <
            input id = "file-input"
            type = "file"
            accept = ".mp4, video/mp4"
            className = "form-control"
            onChange = { e => handleFileChange(e) }
            /> <
            /div> <
            /div> <
            div className = "form-row py-3" >
            <
            div className = " offset-1 col-lg-10" >
            <
            Button type = "submit"
            label = "Go"
            className = "btn btn-info"
            onClick = {
                (e) => handleClick(e) }
            /> <
            /div> <
            /div> <
            /form> <
            /div> <
            /div> <
            /div> <
            /section> {
                uploading && < Modal isOpen = { isOpen }
                onClose = { handleClose }
                />} <
                /div>
            );
        };

        export default VideoAnalysis;