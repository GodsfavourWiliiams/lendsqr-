import React from 'react';
import './filter.scss';

interface DefaultColumnFilterProps {
  column: {
    Header: string;
    filterValue: any;
    setFilter: (arg: any) => void;
    preFilteredRows: { length: number };
  }
}

export const DefaultColumnFilter: React.FC<DefaultColumnFilterProps> = ({
  column: {
    filterValue,
    setFilter,
    Header
  },
}) => {
  // console.log()
  return (
    <div className='input-group'>
      <label className="label" htmlFor={Header || ''}>{Header || ''}</label>
        <input
          name={Header || ''}
          value={filterValue || ''}
          onChange={(e) => {
            setFilter(e.target.value || undefined);
          }}
          placeholder={Header || ''}
      />
    </div>
    
  );
};

interface SelectColumnFilterProps {
  column: {
    filterValue: any;
    setFilter: (arg: any) => void;
    preFilteredRows: Array<{ values: { [key: string]: any } }>;
    id: string;
    Header: string;
  }
}

export const SelectColumnFilter: React.FC<SelectColumnFilterProps> = ({
  column: { filterValue, setFilter, preFilteredRows, id, Header },
}) => {
  const options = React.useMemo(() => {
    return Array.from(new Set(preFilteredRows.map(row => row.values[id])));
  }, [id, preFilteredRows]);

  return (
    <div className="input-group">
      <label className='label' htmlFor={Header || ''}>{Header || ''}</label>
      <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value=''>select</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    </div>
    
  );
};

interface FilterProps {
  column: {
    filterValue: any;
    setFilter: (arg: any) => void;
    preFilteredRows: Array<{ values: { [key: string]: any } }>;
    id: string;
    canFilter: boolean;
    filterable: boolean;
    render: (arg: string) => JSX.Element;
  }
}

export const Filter: React.FC<FilterProps> = ({ column }) => {
  
  return (
    <div style={{ display: 'flex' }}>
      {column.canFilter && column.render('Filter')}
    </div>
  );
};
