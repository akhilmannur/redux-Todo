import React, { useRef } from "react";
import{useDispatch} from "react-redux"
import { add } from "../../features/TodoSlice";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,

  MDBRow,
} from "mdb-react-ui-kit";

const AddToDo = () => {

  const todoRef = useRef(null);
  const dispatch = useDispatch();


  const handleAddTodo = () => {
    const todoText = todoRef.current.value;
    dispatch(add({ todo: todoText }));
    todoRef.current.value = ""; 
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
      <MDBContainer className="py-5">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard
              id="list1"
              style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
            >
              <MDBCardBody className="py-4 px-4 px-md-5">
                <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
           
                  <h2>SUCSESS THROUGH CREATING TO DO</h2>
                </p>
                <div className="pb-2">
                  <MDBCard>
                    <MDBCardBody>
                      <div className="d-flex flex-row align-items-center">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="exampleFormControlInput1"
                          placeholder="Add new..."
                          ref={todoRef} 
                          required
                        />

                        <div>
                          <MDBBtn type="submit">Add</MDBBtn>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </div>
                <hr className="my-4" />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </form>
    </div>
  );
};

export default AddToDo;
