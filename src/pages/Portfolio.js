import "../styles/portfolio.css"

export default function Porfolio(){
    const workEXPs = [
        {
            key: 4,
            companyName: <><a href="https://prisec.co/" target="_blank">PriSec Limited</a></>,
            jobTitle: <>Software Engineer</>,
            duration: <>Aug 2022 - Jul 2023</>,
            descr: <>Participant in whole SDLC. Mainly in role of backend development using Golang and gRPC. Sometime in role of frontend development using Flutter.</>
        },
        {
            key: 3,
            companyName: <><a href="https://www.surpasssolution.com/web/page" target="_blank">Surpass Solution (Hong Kong) Limited</a></>,
            jobTitle: <>Junior Web Programmer</>,
            duration: <>Nov 2021 - Jul 2022</>,
            descr: <>Responsible for both frontend and backend web development. Experience in programming languages including HTML5, CSS3, JavaScript, PHP, MySQL, and frameworks including jQuery, Bootstrap, CodeIgniter.</>
        },
        {
            key: 2,
            companyName: <><a href="https://www.loksintong.org/lok-sin-tong-hoi-wang-road-nursing-home" target="_blank">Lok Sin Tong Hoi Wang Road Nursing Home</a></>,
            jobTitle: <>Personal Care Worker</>,
            duration: <>Jun 2020 - Aug 2021</>,
            descr: <>Responsible for organizing nursing home documents, and feeding and caring for the elderly.</>
        },
        {
            key: 1,
            companyName: <>Chi Wo Contractors Limited</>,
            jobTitle: <>Clerk</>,
            duration: <>Dec 2016 - Jun 2018</>,
            descr: <>Preparing construction survey reports and construction site visiting.</>
        },
    ]

    const eductionBackgrounds = [
        {
            key: 2,
            schoolName: <><a href="https://www.hkmu.edu.hk" target="_blank">Hong Kong Metropolitan University</a></>,
            certification: <>Bachelor's degree in Computing</>,
            duration: <>Sep 2021 - Jul 2023</>,
            descr: <>Have studied these courses: Web Site Design, Computer Programming And Problem Solving, and Networks And Distributed Systems.</>
        },
        {
            key: 1,
            schoolName: <><a href="https://www.ive.edu.hk/ivesite/html/en/index.html" target="_blank">Hong Kong Institute of Vocational Education</a></>,
            certification: <>Higher Diploma in Mobile Applications Development</>,
            duration: <>Sep 2013 - Jun 2015</>,
            descr: <>Leart about the basic concept of computer networking, UI/UX design and mobile APPs development including Android and IOS APPs.</>
        },
    ]

    return (
        <>
            <main id="portfolio">
                <div className="heading">
                    <h1>Sally's Portfolio</h1>
                </div>

                <section className="summary">
                    <div className="heading">
                        <h2>Summary</h2>
                    </div>
                    <div className="content">
                        <p>Hong Kong</p>
                        <p><a href="mailto:sallyfung2018@gmail.com">sallyfung2018@gmail.com</a></p>
                        <p><a href="https://www.sallyfunghk.com" target="_blank">https://www.sallyfunghk.com</a></p>

                        <p>A starter on software development with 1.5 years programming work experience. Just finished a part time degree on computing. Enjoy coding and problem solving. Hope to develop myself to become a full stack developer.</p>
                    </div>
                </section>
                
                <section className="experiences">
                    <div className="heading">
                        <h2>Working Experiences</h2>
                    </div>
                    <div className="content">
                    {workEXPs.map(workEXP=>
                        <div key={workEXP.key} className="experience">
                                <hr/>
                                <div className="row">
                                    <span className="company-name">{workEXP.companyName}</span>
                                    <span className="duration">{workEXP.duration}</span>
                                </div>
                                
                                <p className="job-title">{workEXP.jobTitle}</p>
                                <p className="descr">{workEXP.descr}</p>
                        </div>
                    )}
                    </div>
                </section>

                <section className="educations">
                    <div className="heading">
                        <h2>Educations</h2>
                    </div>
                    <div className="content">
                    {eductionBackgrounds.map(eductionBackground=>
                        <div key={eductionBackground.key} className="education">
                            <hr />
                            <div className="row">
                                <span className="school-name">{eductionBackground.schoolName}</span>
                                <span className="duration">{eductionBackground.duration}</span>
                            </div>
                            <p className="certification">{eductionBackground.certification}</p>
                            <p className="descr">{eductionBackground.descr}</p>
                        </div>
                    )}
                    </div>
                </section>
            </main>
        </>
        );
}