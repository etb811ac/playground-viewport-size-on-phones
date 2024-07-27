import './button.scss'

export default function Button({btnText, onBtnClicked}){

    const onClick = () => {
        onBtnClicked(btnText)
    }
    return(
        <button onClick={onClick}>{btnText}</button>
    )
}