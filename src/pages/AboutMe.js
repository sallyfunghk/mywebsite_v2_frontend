import "../styles/global.css"
import "../styles/about_me.css"

import Myself from "../images/about_me_imgs/myself.jpg"
import Code from "../images/about_me_imgs/code.jpg"
import Book from "../images/about_me_imgs/book.jpg"

export default function AboutMe() {

    const articles = [
        {
            key: 1,
            title: <>My name is Sally, am now 27</>,
            image: Myself,
            content: <>
                <p>
                    I was graduated from the Hong Kong Institute of Vocational Education in 2015. Majoring in Mobile Applications Development. After graduation, I worked at serveral companies in different industry.
                </p>
                <p>
                After working for several companies, I found that it is not very meaningful to work in a career that I am not interested in. Every time I think I need to work until my retirement in a career that I am not interested in. I would be very upset. I am still willing to fight for a chance to work as a programmer. This is the reason why I dive into programmer job now.
                </p>
            </>
        },
        {
            key: 2,
            title: <>Why I love coding?</>,
            image: Code,
            content: <>
                <p>
                    When I was about eight years old, my first time learning more about coding was in my computer lesson. That lesson is to teach us how to use Dreamweaver for building a website. At that time, I didn’t feel interested in it. Maybe it is because I regard it as a lesson for examinations only.
                </p>
                <p>
                    Back in my last year of primary school, I had another chance to dig deeper in coding by learning HTML through two platforms. One of them is a website game called Neopets. Another one is a blog called Xanga. I used HTML, CSS, and JavaScript to designed and created my user web page and my user interface in Neopets and Xanga, respectively. At that moment, I felt HTML and CSS are pretty interesting. It can design a website and show it as what I wanted.
                </p>
                <p>
                    Coding makes me think logically. Sometimes it may be painful when I get a bug. I have to ask others to help or search the solutions on the internet. This can improve my ability of problem-solving. It is such an achievement that I am improving day by day in coding. I realize that coding is very engaging and challenging. And I can get a sense of success from it.
                </p>
                <p>
                    My dream is to become a full-stack developer. At this moment, I still have no idea what kind of developer I want to be, website developer, or computer game developer, or software developer, etc. However, I know that I enjoy coding, and I hope coding is included in my career.
                </p>
            </>
        },
        {
            key: 3,
            title: <>I like reading books</>,
            image: Book,
            content: <>
                <p>
                    Reading can broaden my knowledge and develop creativity.
                </p>
                <p>
                    I like reading fiction, especially suspense and social science. Suspense and wit fictions make me feel tense and curious, willing to read until the end. Social sciences make me know more about this society, including politics and culture, improving my knowledge.
                </p>
                <p>
                    Recently, I bought an electronic reading device called Kindle. It is convenient for reading wherever and whenever. Also, it can translate different languages in the text to Chinese. I hope that one day I can improve my English through this method.
                </p>
            </>
        }

    ];

    return (
        <div id="about-me">
            <div className="heading">
                <h1>About Me</h1>
            </div>
            <div className="content">

                {
                    articles.map( article =>
                            <article key={article.key}>
                                <h2>{article.title}</h2>
                                    <img src={article.image} ></img>
                                    {article.content}
                                
                            </article>
                        )
                }

            </div>

        </div>
    );
}