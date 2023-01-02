import React, { useEffect, useState, useMemo } from 'react';

import TableContainer from '../TableContainer/TableContainer';
import { SelectColumnFilter } from '../Filter';

const URL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

const Table = () => {
  const [data, setData] = useState<any[]>([]); // specify the type of data as an array of any type
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch(URL);
      const body = await response.json();
      console.log(body);
      setData(body);
    };
    doFetch();
  }, []);

  const columns = useMemo(
    () => [
      
      {
        Header: 'organization',
        accessor: 'orgName',
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: 'equals'
      },
      {
        Header: 'Username',
        accessor: 'userName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Phone number',
        accessor: 'profile.phoneNumber'
      },
      {
        Header: 'Date joined',
        accessor: 'createdAt'
      },
      {
        Header: 'Status',
       accessor: 'Status'
      },

    ],
    []
  );

  return (
    <div style={{ marginTop: 50 }}>
      <TableContainer
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default Table;