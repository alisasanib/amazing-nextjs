import Header from '../header'
import SubHeader from '../subheader'

const layoutStyle = {
  height:"100%",
  width: "100%",
}

const Layout = (props) => (
  <div style={layoutStyle}>
    {/* <div style={{display:"flex", flexDirection: "column"}}> */}
    <Header/>
    {/* <SubHeader/> */}
    {/* </div> */}
    {props.children}
  </div>
)

export default Layout
