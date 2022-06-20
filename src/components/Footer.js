import FooterStyle from '../styles/footer.css'

export default function Footer() {
    return (
        <section id="footer">
            <div className='container'>
                <div className='about-website'>
                    <h6>ABOUT WEBSITE</h6>
                    <ul>
                        <li><span className="privacy">Privacy Policy</span></li>
                        <li><span className="reference">References</span></li>
                        <li>&copy; 2022 Copyright sallyfunghk.com</li>
                    </ul>
                </div>
                <div className='find-me-on'>
                    <h6>FIND ME ON</h6>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/sallyfunghk/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/sallyfunghk" target="_blank">GitHub</a></li>
                        <li><a href="mailto:sallyfung2018@gmail.com">sallyfung2018@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            
        </section>
    );
}