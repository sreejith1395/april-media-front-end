

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {

  // useNavigate is hook 

  const navigate=useNavigate()
    const handleNavigate=()=>{

      // navigate to home 

      navigate('/home')

    }

  return (
    <div>

        <Row className='align-items-center'>
            <Col></Col>
            <Col lg={6}>
                <h1>Welcome Videoooo.com</h1>
                <p style={{textAlign:'justify'}}>where user can use their favourite videos user 
                    cam upload any videos by copy and paste their url 
                    videooo.com will allow to add and remove their uploaded 
                    videos and also arrange them in dofferent categories by drag and drop
                    it is free try it now !!
                </p>
                <button onClick={handleNavigate} className='btn btn-success' >Click here to know more </button>
            </Col>

            <Col lg={4}>
                       <img className='img-fluid'  src="https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1519619091416-f5d7e5200702%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DM3wxMjA3fDB8MXxzZWFyY2h8NXx8bXVzaWMlMjBwbGF5ZXJ8ZW58MHx8fHwxNjk2ODI5MDU1fDA%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dmusic%252520player%26blend%3D000000 " alt="no image" />
            </Col>
            
            <Col></Col>

        </Row>

    </div>
  )
}

export default Landingpage