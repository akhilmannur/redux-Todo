import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { edit, save, cancel,deletetodo } from "../../features/TodoSlice";
import {
  MDBCheckbox,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBTooltip,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";

const ListToDo = () => {
  const Todos = useSelector((state) => state.todo.todos);
  // console.log(Todos);
  const editedTextRef = useRef(null);
  const dispatch = useDispatch();

  const handleSave = (todo) => {
    dispatch(
      save({ todo: todo.value, editedText: editedTextRef.current.value })
    );
  };

  const handleCancelEdit = (todo) => {
    dispatch(cancel({ todo: todo.value }));
  };
  
  

  return (
    <div>
      <MDBCard>
        {Todos.map((todo, index) => (
          <MDBCardBody key={index}>
            <MDBListGroup horizontal className="rounded-0 bg-transparent">
              <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                {todo.isEditing ? (
                  <>
                 <h4>EDIT YOUR TODD</h4>
             
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder={todo.value}
                    ref={editedTextRef}
                  />
                  </>
                ) : (
                  <h2 className="lead fw-normal mb-0" >{todo.value}</h2>
                )}
              </MDBListGroupItem>
              <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent"></MDBListGroupItem>
            </MDBListGroup>
            <div className="d-flex flex-row justify-content-end mb-1">
             
              {todo.isEditing ? (
                <>
                 <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#!" }}
                title="save"
              >
                  <MDBIcon
                    fas
                    icon="check"
                    size="2x"
                    className="me-3"
                    color="success"
                    onClick={() => handleSave(todo)}
                  />
                  </MDBTooltip>
                  <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#!" }}
                title="cancel"
              >
                  <MDBIcon
                    fas
                    icon="times"
                    size="2x"
                    className="me-3"
                    color="secondary"
                    onClick={() => handleCancelEdit(todo)}
                  />
                  </MDBTooltip>
                </>
              ) : (
                <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#!" }}
                title="Edit"
              >
                <MDBIcon
                  fas
                  icon="pencil-alt"
                  className="me-3"
                  color="info"
                  onClick={() => {
                   dispatch(edit(todo.id))
                  }}
                />
                </MDBTooltip>
              )}

              <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#!" }}
                title="Delete todo"
              >
                <MDBIcon fas
                 icon="trash-alt"
                 color="danger"
                 onClick={()=>{dispatch(deletetodo(todo.id))}} />
              </MDBTooltip>
            </div>
          </MDBCardBody>
        ))}
      </MDBCard>
    </div>
  );
};

export default ListToDo;
