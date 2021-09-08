import './Alert.css'
import Button from "../../components/button/Button";

export default function Alert({ message = "Are you sure?", confirmHandler, cancelHandler }) {
    return (
        <div className='modal'>
            <div className='alert'>
                {message}
                <div className='button-container'>
                    <Button
                        className="confirm button"
                        type="button"
                        clickHandler={confirmHandler}
                        text="OK"
                    />
                    <Button
                        className="cancel button"
                        type="button"
                        clickHandler={cancelHandler}
                        text="Cancel"
                    />
                </div>
            </div>
        </div>
    )
}
