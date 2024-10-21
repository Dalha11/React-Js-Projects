
import PropsTypes from "prop-types"
export const Student = (props) => {
  return (
    <div className='student'>
        <table>
            <tbody>
            <tr>
                <th>Name</th> 
                <td>{props.Name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.Age}</td>
            </tr>
            <tr>
                <th>ismarried</th>
                <td>{props.ismarried?"yes":"no"}</td>
            </tr>
            </tbody>
        </table>

    </div>
  )
}
