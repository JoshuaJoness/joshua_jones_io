import React from 'react';
import ReactPlayer from 'react-player';

const CalorieCam = ({ mobile }) => (
    <div id="code" className={mobile ? "calorieCamContainerMobile" : "calorieCamContainer"}>
        <span className={mobile ? "titleMobile" : "title"}>Calorie Cam</span>
        <div style={mobile ? { padding: 50 } : { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridGap: 150, marginTop: 100 }}>
            <div />
            <ReactPlayer
                className='react-player fixed-bottom'
                url= '/videos/calorieCam.mp4'
                width={mobile ? '100%' : '20vw'}
                height='100%'
                controls={true}
                playing={true}
                loop={true}
                // style={{ display:'block'}}
                muted
            />
            <div className={mobile? "descriptionMobile" : "description"}>
                {mobile ? <br/> : null}
                <span className={mobile? "descriptionMobile" : "description"} style={mobile ? { fontSize: 26, marginTop: 25, lineHeight: 1.5 } : {}}>Simple, easy to use calorie counting app.&nbsp;</span>
                {mobile ? null :
                <>
                    <span className={"calorieCamHighlight"}>
                    <br />
                    <br />
                    No sign up or log-in required.&nbsp;
                    </span>
                    Offers <span className={"calorieCamHighlight"}>image recognition&nbsp;</span>and&nbsp;<span className={"calorieCamHighlight"}>food log.&nbsp;</span>
                    <br />
                    <br />
                    Makes it easy to track your macro and <span className={"calorieCamHighlight"}>micronutrient intake.</span>
                </>
                }
                <br />
                <br />
                <span style={{ color: '#333' }}>Download: </span>
                <a className={ mobile ? "calorie-cam-link-mobile" : "calorie-cam-link"} href="https://apps.apple.com/us/app/calorie-cam/id1511528894?ls=1" target="_blank">https://apps.apple.com/us/app/calorie-cam/</a> 
            </div>
            <div />
        </div>
    </div>
);

export default CalorieCam;