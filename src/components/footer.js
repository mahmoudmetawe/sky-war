
export default function Footer() {
    return(
        <footer className="footer">
            <div>
                <img src={require("../logo.png")} alt="logo"/>
            </div>
            <div>
                <a href="https://www.facebook.com/"> <img src={require("./social/face.png")} alt="facebook"/></a>
                <a href="https://www.tiktok.com/"> <img src={require("./social/tik.png")} alt="tiktok"/></a>
                <a href="https://www.instagram.com/"> <img src={require("./social/insta.webp")} alt="instagram"/></a>
                <a href="https://www.linkdin.com/"> <img src={require("./social/in.png")} alt="linkdin"/></a>
            </div>
            <div className="rights" style={{
                marginRight:"20px"
            }}>
            <img src={require("../components/social/copyrights.png")} alt="copy rights"/>
                <p>copy right 2025</p>
            </div>
        </footer>
    )
}