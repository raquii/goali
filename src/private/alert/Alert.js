import Button from "../../components/button/Button";


export default function Alert({ message = "Are you sure?", confirmHandler, cancelHandler }) {
    return (
        <div className='alert'>
            {message}
            <Button
                className="confirm-action"
                type="button"
                clickHandler={confirmHandler}
                text="OK"
            />
            <Button
                className="cancel-action"
                type="button"
                clickHandler={cancelHandler}
                text="Cancel"
            />
        </div>
    )
}
