import '../components/container.scss'

import Button from "../components/Button"
import GetInTouch from './GetInTouch'

export default function Container({ viewport, onBtnClicked }) {

    
    return (
        <div className={`container ${viewport}`}>
            {viewport === 'dynamic' ? (
                <>
                    <h1 className="title">Dynamic</h1>
                    <div className="styles">100dvh x 100dvw</div>
                </>
            ) : viewport === 'small' ? (
                <>
                    <h1 className="title">Small</h1>
                    <div className="styles">100svh x 100svw</div>
                </>
            ) : (
                <>
                    <h1 className="title">Standard</h1>
                    <div className="styles">100vh x 100vw</div>
                </>
            )}


            <div className="button-container">
                <Button btnText="standard" onBtnClicked={onBtnClicked}/>
                <Button btnText="small" onBtnClicked={onBtnClicked}/>
                <Button btnText="dynamic" onBtnClicked={onBtnClicked}/>
            </div>

            <GetInTouch/>
        </div>
    )
}