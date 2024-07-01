import { useNavigate } from 'react-router-dom';
function Err(){
    const navigate = useNavigate();
    function handleSubmit1() {
        navigate('/Login')
        }
    function handleSubmit2() {
        navigate('/Home')
        }    
    return(
        <>
            <div className="nav1">
                <h1>404 ERROR</h1>
            </div>
            <div className="button">
                <button onClick={handleSubmit1}>Login</button>
                <button onClick={handleSubmit2}>Home</button>
            </div>
        </>
    )
 }
 export default Err;