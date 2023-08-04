import React from 'react'
import '../Resources/countrypedia.css'
import { Button } from 'antd';
import {
  UnorderedListOutlined
} from '@ant-design/icons';
function Navbar(props) {
  const HandleOnChange = (e) => {
    props.settext(e.target.value);
  }
  const HandleOnClick = () => {
    let x = document.getElementById('dropdownmenu');
    if (x.style.display === "none") {
      x.style.display = "flex"
    } else {
      x.style.display = "none";
    }
  }
  return (
    <>
      <div className='navbar'>
        <ul>
          <li className='heading'>Countrypedia</li>
          <li className='dropdown'><UnorderedListOutlined style={{ fontSize: "150%" }} onClick={HandleOnClick} /></li>
          <div className='navbar_tabs_button'>
            <input type='text' id='ipfeild' value={props.text} onChange={HandleOnChange} />
            <Button type="primary" onClick={() => { props.onClick(props.text, props.loading, props.setLoading) }}>Search</Button>
          </div>

        </ul>

      </div>
      <div id="dropdownmenu">
        <input type='text' id='ipfeild' value={props.text} onChange={HandleOnChange} />
        <Button type="primary" onClick={() => { props.onClick(props.text, props.loading, props.setLoading) }}>Search</Button>
      </div>
    </>
  )
}

export default Navbar
