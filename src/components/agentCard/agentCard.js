import { useEffect, useState } from "react"
import { fetchDB } from "../../scripts/services/fetchs"
import { firstCardName, urlAgents } from "../../scripts/variables"
import { AgentList } from "../agentList/agentList"
import { AbilitiesList } from "../abilities/abilities"
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
    if (!agent) {
        return
    } else {
        return (
            <section className="container">
                <div className="card">
                    <div className="agent-art">
                        <div className="background-art"></div>
                        <img id="agentPortrait" src={agent.bustPortrait} alt={`Personagem ${agent.displayName}`} />
                        <span className="name">{agent.displayName}</span>
                    </div>
                    <div className="skills">
                        <div className="card-center"></div>
                        <AbilitiesList props={agent.abilities} />
                    </div>
                </div>
                <AgentList clickEvent={handleClick} props={data} />
            </section>
        )
    }

}

export { AgentCard }