import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../js/actions/actions";
const AddMovie = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({
        name: "",
        description: "",
        rating: null,
        URL: "",
    });
    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };
    const handleADD = (e) => {
        e.preventDefault();
        dispatch(addMovie(newMovie));
        setNewMovie({ name: "", description: "", rating: null, URL: "" });
        handleClose();
    };
    const dispatch = useDispatch();

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                add movie
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>movie details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="add">
                        <label>name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                        <label>description</label>
                        <input
                            type="text"
                            name="description"
                            onChange={(e) => handleChange(e)}
                        />
                        <label>rating</label>
                        <input
                            type="number"
                            name="rating"
                            onChange={(e) => handleChange(e)}
                        />
                        <label>URL</label>
                        <input
                            type="text"
                            name="URL"
                            onChange={(e) => handleChange(e)}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => handleADD(e)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddMovie;
