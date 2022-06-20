import mainWebsiteImg from './../images/project_imgs/project_main_website.PNG'

import "../styles/projects.css"

export default function Projects() {

    const repositoryItems = [
        {
            key: "mainWebsite",
            element: {
                fileName: <>my_main_website.html</>,
                image: mainWebsiteImg,
                imageAlt: <>main wesite image</>,
                title: <>My main Website</>,
                version: <>v2.0</>,
                link: <><a href="https://www.sallyfunghk.com" target="_blank">sallyfunghk.com</a></>,
                descr: <>This is the website which is to introduce myself and show my infos to others. Using Reactjs to create the frontend. Get and post data to backend which using PHP.<br/>This website designed as theme color blue. That is a color represent technoology and professional.</>
            }
        }
    ]

    return (
        <div id="projects">
            <div className="heading">
                <h1>Projects Repository</h1>
            </div>
            <div className="content">
                {repositoryItems.map( repositoryItem => 
                    <div key={repositoryItem.key} className='repository'>
                        <div className='repository-head'>
                            {repositoryItem.element.fileName}
                        </div>
                        <div className='repository-body'>
                            <div className="photo">
                                <img src={repositoryItem.element.image} alt={repositoryItem.element.imageAlt} />
                            </div>
                            <div className="descr">
                                <p>Title: {repositoryItem.element.title}</p>
                                <p>Version: {repositoryItem.element.version}</p>
                                <p>Location: {repositoryItem.element.link}</p>
                                <p>Description: {repositoryItem.element.descr}</p>
                            </div>
                        </div>
                    </div>
                
                )}
                

            </div>
        </div>
    );
}