import { Howl } from 'howler'
import hoverSound from '../../assets/sounds/hoverSound.mp3'
import clickSound from '../../assets/sounds/clickSound.mp3'
import "./agentList.css"

const AgentList = ({ clickEvent, props }) => {

    const hover = new Howl({
        src: [hoverSound],
        html5: true,
        preload: true,
        volume: 1
    })

    const click = new Howl({
        src: [clickSound],
        html5: true,
        preload: true,
        volume: 1
    })

    return (
        <ul className="agent-list">
            {props
                .filter(data => data.isPlayableCharacter)
                .map((agent, index) =>
                    <li
                        onMouseEnter={() => hover.play()}
                        onClick={() => {
                            clickEvent(agent.displayName);
                            click.play();
                        }}
                        className="agent"
                        name={agent.displayName}
                        key={index}
                    >
                        <img src={agent.displayIconSmall} alt={`Personagem ${agent.displayName}`} />
                    </li>
                )}
        </ul>
    );
}

export { AgentList }