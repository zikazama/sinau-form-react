import { useState } from "react"

const HeaderHomeLayout = () => {
    const [checkCondition, setCondition] = useState(true);
    if(checkCondition) {
        setCondition(false);
    }
    return (
        <div className="header-home-layout" style={{backgroundColor: "#343a40", padding: "1px", color: 'white', margin: '0px',}}>
            <div className="header-home-layout__logo">
                {/* <img src="./../assets/react.svg" alt="logo" /> */}
            </div>
            <div className="header-home-layout__title" style={{marginLeft: '10%'}}>
                {checkCondition && <p>Title</p>}
            </div>
        </div>
    )
}

export default HeaderHomeLayout