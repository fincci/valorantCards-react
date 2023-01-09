import "./agentList.css"

const AgentList = ({ clickEvent, props }) => {
    return (
        <ul className="agent-list">
            {props
                .filter(data => data.isPlayableCharacter)
                .map((agent, index) =>
                    <li onClick={() => clickEvent(agent.displayName)} className="agent" name={agent.displayName} key={index}>
                        <img src={agent.displayIconSmall} alt={`Personagem ${agent.displayName}`} />
                    </li>
                )}
        </ul>
    );
}

export { AgentList }