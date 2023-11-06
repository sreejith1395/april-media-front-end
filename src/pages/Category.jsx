
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getvideo, updateCategory } from '../services/allapi';
import { getallCategories } from '../services/allapi';
import { useEffect } from 'react';
import { Trash2 } from 'react-feather';
import { Col, Row } from 'react-bootstrap';
import Videocard from './Videocard';

function Category() {
  const [allCategory, setallCategory] = useState([])
  const [categoryItem, setcategoryItem] = useState({
    id: "",
    categoryName: "",
    videods: []
  })



  const AddCategoryForm = (e) => {
    const { name, value } = e.target
    setcategoryItem({ ...categoryItem, [name]: value })
  }

  console.log(categoryItem);




  // get category

  const getcategoryList = async () => {
    // to get all category make an api call 
    let response = await getallCategories()

    // console.log(response.data);

    setallCategory(response.data)

  }
  console.log(allCategory);

  useEffect(() => {
    getcategoryList()

  }, [])


  const handleDeleteCategory = async (e, id) => {
    e.preventDefault()
    console.log(id);
    // api call for delete 
    await deleteCategory(id)

    getcategoryList()

  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleAddCategory = async (e) => {

    e.preventDefault()
    const { id, categoryName } = categoryItem
    if (!id || !categoryName) {
      toast.warning("please fill the form completly")
    }
    else {
      const response = await addCategory(categoryItem)
      console.log(response);

      if (response.status >= 200 && response.status < 300) {


        setShow(false)

        toast.success("new category added successfully", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })

        getcategoryList()
      }
      else {
        toast("provide a unique is!!!")
      }


    }


  }

  // dragover 

  const dragover = e => {
    e.preventDefault()
    console.log("dragging over the category board!!!!!!!");
  }

  // dropped
  const dropped = async (e, categoryId) => {
    console.log(categoryId);

    let sourceCardId = e.dataTransfer.getData("cardId")
    console.log("source card id is", sourceCardId);

    //  logic to implement adding card in the given category 
    let { data } = await getvideo(sourceCardId)

    console.log('source video data', data);

    let selectedCategory = allCategory.find(item => item.id == categoryId)

    console.log("target category details ", selectedCategory);

    selectedCategory.videods.push(data)

    console.log("updated target category details ", selectedCategory);

    await updateCategory(categoryId, selectedCategory)

    getcategoryList()


  }


  return (
    <>
      <div className="d-grid">
        <div onClick={handleShow} className="btn btn-dark m-2">Add categories</div>
      </div>

      {
        allCategory?.map(item => (

          <div droppable onDrop={e => dropped(e, item?.id)} onDragOver={e => dragover(e)}>

            <div className='d-flex justify-content-between border rounded mt-2 p-3'>

              <h4>{item.categoryName} </h4>
              <span onClick={e => handleDeleteCategory(e, item?.id)}  > <Trash2 color="red"></Trash2> </span>


              <Row>
                {item?.videods.map((card) => (
                  <Col className='p-3 mb-1 sm={12}'>

                    <Videocard card={card}  insideCategory={true} />
                  </Col>
                ))
                }

              </Row>





            </div>


          </div>

        ))
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <FloatingLabel className='mb-3' controlId="floatingLink" label="Id">
            <Form.Control type="text" placeholder="Id" name='id' onChange={AddCategoryForm} />
          </FloatingLabel>

          <FloatingLabel className='mb-3' controlId="floatingLink" label="category">
            <Form.Control type="text" placeholder="category" name='categoryName' onChange={AddCategoryForm} />
          </FloatingLabel>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

    </>
  )
}

export default Category