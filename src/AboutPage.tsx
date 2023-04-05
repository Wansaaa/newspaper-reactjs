import minesweeperIcon from './sprites/minesweeper_icon.png';

function AboutPage() {
    return (
        <div style={{'maxWidth': '300px'}}>
            <img src={minesweeperIcon} style={{'width': '64px', 'margin': 'auto', 'display': 'block'}} alt="Game"></img>
            <h1 style={{'textAlign': 'center'}}>Minesweeper in React</h1>
            <p>By Dmitri Tsiu</p>
            <p>
                This is a project written for the internship contest at VK. Around 10 hours total was 
                spent on making this project from scratch.
            </p>
            <p>
                I tried making this project as authentic as possible by using old school fonts and classic Win98 icons, 
                replicating the style of Win98 with CSS.
            </p>
            <p>
                Stuff used for this project:
            </p>
            <ul>
                <li>TypeScript</li>
                <li>Webpack</li>
                <li>React</li>
                <li>Redux</li>
                <li>React Router</li>
            </ul>
            <p>
                Consider supporting me by dropping a star on the <a href="https://github.com/laoqiu233/minesweeper-react" target="_blank" rel="noreferrer noopener">GitHub page</a> of this project!
            </p>
        </div>
    )
}

export default AboutPage;