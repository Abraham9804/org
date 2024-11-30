import "./MiOrg.css"

const MiOrg = (props) => {
    return <secction className="orgSection">
                <h3 className="title">Mi organizacion</h3>
                <img src="./img/btn-add.png" alt="add" onClick={props.propsMostrar}/>
    </secction>
}

export default MiOrg