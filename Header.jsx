import React from 'react'




function Header({ setIsAdding }) {

    return (

        <header>

            <h1 >Employee Attendance</h1>

            <div style={{ marginTop: '30px', marginBottom: '18px' }}>

                <button onClick={() => setIsAdding(true)} className='round-button' style={{marginRight:'0px'}}>Add Employee</button>

            </div>

        </header>

    )

}
 export default Header



