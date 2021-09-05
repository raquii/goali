import Button from "../button/Button"

export default function Home() {

    const userHome = () =>{
        return (
            <>
                <h1>Welcome back, </h1>
            </>
        )
    }
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