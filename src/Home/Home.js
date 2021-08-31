import Button from "../Button/Button"

export default function Home() {
    return (
        <>
            <h1 id='home-header'> Welcome to Goalie!</h1>
            <div id='button-container'>
                <Button
                    text='Click'
                    clickHandler={() => console.log('clicked')}
                />
            </div>
        </>
    )
}