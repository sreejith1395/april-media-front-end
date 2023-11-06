import React from 'react'
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addhistory, deleteVideo } from '../services/allapi';
import { v4 as uuidv4 } from 'uuid';

function Videocard({ card, handledeleteStatus,insideCategory }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);
       
        // to generate id automatically 
        const uid=uuidv4();
          console.log(uid);
        //  to generate system time and date 
        let cardTime=new Date()

        console.log(cardTime);

        const{caption,url}=card

        if(uid!="",caption!="",url!="",cardTime!=""){
            const body={
                id:uid,cardName:caption,url,date:cardTime
            }

            const response=  await addhistory(body)

            console.log(response);


        }




    }

    const removeItem = async (id) => {
        const response = await deleteVideo(id)
        console.log(response);

        if (response.status >= 200 && response.status < 300) {
            handledeleteStatus(true)
        }



    }

   const dragStarted=(e,id)=>{
        console.log("drag started & source card id :"+id);
        e.dataTransfer.setData("cardId",id)
   }



    return (
        <>
            <div>

                <Card  draggable onDragStart={e=>dragStarted(e,card?.id)}  className='shadow'>
                    <Card.Img onClick={handleShow} variant="top" height={'200px'} src={card?.thumbnail} />
                    <Card.Body>
                        <Card.Title>
                            <span>{card?.caption}</span>
                          <span> 
                                  {
                                    insideCategory?"":
                                        <Trash2 onClick={() => removeItem(card?.id)} style={{ float: 'right' }} color='red' />
                                  } 
                           
                            
                            </span>
                        </Card.Title>

                    </Card.Body>
                </Card>



                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>+


                        <Modal.Title>Video Caption</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe width={'100%'} height={'400px'} src={`${card?.url}?autoplay=1`} title="Namo Namo - Lyrical | Kedarnath | Sushant Rajput | Sara Ali Khan | Amit Trivedi | Amitabh B" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Modal.Body>

                </Modal>

            </div>
        </>
    )
}

export default Videocard