import { Table } from 'reactstrap';
import Actions from './Actions';
import './Grid.css';

function Grid({data: {header = [], values = [], actions = []}}) {
  return (
    <Table striped responsive>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => <td key={colName} className={`${row[colName] % 1 === 0 ? "text-right" : ""}`}>{row[colName]}</td>)}
            {!!actions.length && 
              <td className='gridActions'>
                <Actions row={row} actions={actions} />
              </td>
            }
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Grid;
