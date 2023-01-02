import React, { Fragment, useReducer } from 'react';
import {
  useTable,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from 'react-table';
import { Filter, DefaultColumnFilter } from '../Filter';
import { useNavigate } from 'react-router-dom';
import './tableContainer.scss';

type TableContainerProps = {
  columns: any;
  data: any;
}

const TableContainer = ({ columns, data, }: TableContainerProps) => {
  const {
    getTableBodyProps,
    headerGroups,
    // @ts-ignore
    page,
    prepareRow,
    // @ts-ignore
    canPreviousPage,
    // @ts-ignore
    canNextPage,
    // @ts-ignore
    pageOptions,
    // @ts-ignore
    nextPage,
    // @ts-ignore
    previousPage,
    // @ts-ignore
    setPageSize,
    state: { 
      // @ts-ignore
      pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { 
        // @ts-ignore
        Filter: DefaultColumnFilter },
      initialState: { 
        // @ts-ignore
        pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );


  const [showOptions, toggleShowOptions] = useReducer((show) => !show, false);
  const navigate = useNavigate();

  const onChangeInSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(event.target.value));
  };

  
  return (
    <Fragment>
      <table>
        

        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>
                  <div className='header' {...column.getSortByToggleProps()}>
                    {column.render('Header')}
                    <svg width="14" height="10" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.22222 11.3333H9.77778V9.55555H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z" fill="#545F7D"/>
                    </svg>
                  </div>
                </th>
              ))} 
            <th>{''}</th>
            </tr>
            
          ))}
        </thead>

        {headerGroups.map((headerGroup: any) => (
            <div className='filterContainer'>
              {headerGroup.headers.map((column: any) => (
                <>
                  {/* {console.log(column)} */}
                  <Filter column={column} />
                </>
              ))}
              <div className="filter-footer">
                <button className='btn reset-btn'>Reset</button>
                <button className='btn filter-btn'>Filter</button>
              </div>
              
            </div>
          ))}

        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <Fragment key={row.getRowProps().key}>
                <tr>
                  {row.cells.map((cell: any) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                  <td className="table-options">
                    <svg className='option-icon' width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleShowOptions}>
                     <path d="M1.99992 4.1111C2.92214 4.1111 3.66658 3.36666 3.66658 2.44444C3.66658 1.52222 2.92214 0.777771 1.99992 0.777771C1.0777 0.777771 0.333252 1.52222 0.333252 2.44444C0.333252 3.36666 1.0777 4.1111 1.99992 4.1111ZM1.99992 6.33333C1.0777 6.33333 0.333252 7.07777 0.333252 7.99999C0.333252 8.92221 1.0777 9.66666 1.99992 9.66666C2.92214 9.66666 3.66658 8.92221 3.66658 7.99999C3.66658 7.07777 2.92214 6.33333 1.99992 6.33333ZM1.99992 11.8889C1.0777 11.8889 0.333252 12.6333 0.333252 13.5555C0.333252 14.4778 1.0777 15.2222 1.99992 15.2222C2.92214 15.2222 3.66658 14.4778 3.66658 13.5555C3.66658 12.6333 2.92214 11.8889 1.99992 11.8889Z" fill="#545F7D"/>
                    </svg>
                  </td>
                  
                </tr>
              </Fragment>
            );
          })}
          {showOptions && (
                    <div
                      className='options-wrapper'
                      onClick={toggleShowOptions}
                      // ref={ref}
                      data-testid='popup-options'
                    >
                      <div className='options-item' onClick={() => navigate(`/user/`)}>
                        {/* <AiOutlineEye />  */}
                        View Details
                      </div>

                      <div className='options-item'>
                        {/* <FiUserX /> */}
                        Blacklist User
                      </div>

                      <div className='options-item'>
                        {/* <RiUserFollowLine /> */}
                        Activate User
                      </div>
                    </div>
                  )}
        </tbody>
      </table>

      <div style={{ width: "100%", margin: 'auto', display: "flex", alignItems: 'center', justifyContent: "space-between"}}>
        <div style={{ display: "flex", alignItems: 'center', gap: "10px"}}>
          <p className="">Showing</p>
          <select
            value={pageSize}
            onChange={onChangeInSelect}
          >
            
            {[10, 20, 30, 40, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <p className="">out of {pageOptions.length}</p>
        </div>

        <div className='' style={{ display: "flex", alignItems: 'center', gap: "10px"}}>
         
          <button className="btn paginate-btn"
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.00609 10.0573C7.84719 10.8984 6.54344 12.1595 5.745 11.3184L0.994244 6.56759C0.61581 6.23127 0.61581 5.64282 0.994244 5.3065L5.61858 0.640017C6.45967 -0.158963 7.72082 1.10267 6.87967 1.94322L2.8859 5.937L7.00609 10.0573Z" fill={'#213F7D'}/>
            </svg>

          </button>
        
          <button className='btn paginate-btn' onClick={nextPage} disabled={!canNextPage}>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.993905 1.94274C0.152813 1.10165 1.45656 -0.159498 2.255 0.68165L7.00576 5.43241C7.38419 5.76873 7.38419 6.35718 7.00576 6.6935L2.38142 11.36C1.54033 12.159 0.279177 10.8973 1.12033 10.0568L5.1141 6.063L0.993905 1.94274Z" fill="#213F7D"/>
            </svg>
          </button>

        </div>
      </div>
    </Fragment>
  );
};

export default TableContainer;