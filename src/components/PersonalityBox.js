import PersonalityFrame from './../images/personality_frame_2.svg'

export default function PersonalityBox(props){
    return (
        <div className="personality-box">
            <img width={500} src={PersonalityFrame} alt="Personality frame"/> 
            <div className="content">
                <div className="icon">
                    <img src={props.icon} alt="Icon" />
                </div>
                <div className="text">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="body">
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
        
    );
}