import './abilities.css'

const AbilitiesList = ({ props }) => {
    return (
        <ul className="list">
            {props.map((ability, index) =>
                <li className="skill" key={index}>
                    {
                        ability.displayIcon ? <img src={ability.displayIcon} alt="Skill Symbol" /> : <div></div>
                    }
                    <div className="description">
                        <h4>{ability.displayName}</h4>
                        <p>{ability.description}</p>
                    </div>
                </li>
            )}
        </ul>
    );
}

export { AbilitiesList } 