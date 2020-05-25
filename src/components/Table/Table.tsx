import React, { useEffect, useState } from 'react';

import { Table as RTable, Spinner } from 'react-bootstrap';
import { coronaService } from '../../services/Corona.service';

import TableRow, { TableItem } from './TableRow';

import { useRecoilState } from 'recoil';
import { coronaDataAtom } from '../../App';

const Table = () => {
  const [data, setData] = useRecoilState<TableItem[]>(coronaDataAtom);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      const data = await coronaService.getCountries();

      setData(data)
      setIsLoading(false);
    }

    getData();
  }, [setData]);

  if (isLoading) {
    return <Spinner animation="border" />
  }

  return (
    <>
      <RTable striped bordered>
        <thead>
          <tr>
            <td>№</td>
            <td>Country</td>
            <td>
              Cases
            </td>
            <td>Deaths</td>
            <td>Flag</td>
          </tr>
        </thead>

        <tbody>
          {data?.length > 0 && data.map((item, idx) => (
            <TableRow key={item.country}
              idx={idx}
              data={item}
            />
          ))}
        </tbody>
      </RTable>
    </>
  )
}

export default Table;