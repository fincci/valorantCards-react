import { useEffect, useState } from "react"
import { fetchDB } from "../../scripts/services/fetchs"
import { firstCardName, urlAgents } from "../../scripts/variables"
import { AgentList } from "../agentList/agentList"
import { AbilitiesList } from "../abilities/abilities"
import styled from 'styled-components';
import "./agentCard.css"
import "../../scripts/variables.css"

const AgentCard = () => {

    const [data, setData] = useState([]);
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchDB(urlAgents);
            setData(response.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const firstAgent = data.find(agent => agent.displayName === firstCardName)
            setAgent(firstAgent)
        }
    }, [data, setAgent]);

    const handleClick = (agentName) => {
        const newAgent = data.find(agent => agent.displayName === agentName);
        setAgent(newAgent);
    }

    console.log(agent); //log
    if (!agent) {
        return
    } else {
        return (
            <section className="container">
                <div className="card">
                    <AgentArt props={agent.backgroundGradientColors} className="agent-art">
                        <BackgroundArt props={agent.background} className="background-art" />
                        <img id="agentPortrait" src={agent.bustPortrait} alt={`Personagem ${agent.displayName}`} />
                        <span className="name">{agent.displayName}</span>
                    </AgentArt>
                    <div className="skills">
                        <div props={agent.backgroundGradientColors} className="card-center"></div>
                        <AbilitiesList props={agent.abilities} />
                    </div>
                </div>
                <AgentList clickEvent={handleClick} props={data} />
            </section>
        )
    }

}

const BackgroundArt = styled.div`
    position: absolute;
    background: ${props =>
        `url(${props.props}) center center no-repeat`
    };
    background-size: contain;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    filter: brightness(200%);
`;

const AgentArt = styled.div`
    width: 50%;
    height: var(--cardHeight);
    position: relative;
    background-image: ${props =>
        `linear-gradient(180deg, #${props.props[0]}, #${props.props[1]}, #${props.props[2]}, #${props.props[3]})`
    };
    animation: slide-right-img 1s;
`;

export { AgentCard }