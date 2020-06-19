import Header from '../header'
import SubHeader from '../subheader'

const layoutStyle = {
  height:"100%",
  width: "100%",
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header/>
    <SubHeader/>
    {props.children}
  </div>
)

export default Layout
