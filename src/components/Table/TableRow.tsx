import React from 'react'

export interface TableItem {
  country: string;
  cases: number;
  countryInfo: { flag: string };
  deaths: number;
}


const formatCase = new Intl.NumberFormat().format;

interface Props {
  idx: number;
  data: TableItem;
}

const TableRow: React.FC<Props> = ({ data, idx }) => {
  return (
    <tr>
      <td>{idx}</td>
      <td>
        {data.country}
      </td>
      <td>
        <button>{formatCase(data.cases)}</button>
      </td>
      <td>
        <button>{formatCase(data.deaths)}</button>
      </td>
      <td>
        <span>
          <img src={data.countryInfo.flag} alt={`Flag of ${data.country}`} width="32px" />
        </span>
      </td>
    </tr>
  )
}

export default TableRow
