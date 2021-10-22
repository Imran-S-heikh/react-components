import React, { useContext } from 'react';
import './App.scss';
import Table from './components/table/Table.component';
import TableBody, { RowContext } from './components/table/TableBody.component';
import TableCell from './components/table/TableCell.component';
import TableHead from './components/table/TableHead.component';
import TableRow from './components/table/TableRow.component';
import TableRowChild from './components/table/TableRowChild.component';
import TableRowWithChild from './components/table/TableRowWithChild.component';

const tabledata = [
    {
      name: 'Imran',
      age: 21
    },
    {
      name: 'Shakib',
      age: 21
    },
    {
      name: 'Mushi',
      age: 21
    }
];
const tableDataWithChild = [
  [
    {
      name: 'Imran',
      age: 21
    }
    ,
    [

      {
        name: 'Imran Child',
        age: 23
      },
      {
        name: 'Imran Child',
        age: 65
      },
    ]
  ],
  [
    {
      name: 'Imran',
      age: 21
    }
    ,
    [
      {
        name: 'Imran Child',
        age: 23
      },
      {
        name: 'Imran Child',
        age: 65
      },
    ]
  ],
  [
    {
      name: 'Imran',
      age: 21
    }
    ,
    [
      {
        name: 'Imran Child',
        age: 23
      },
      {
        name: 'Imran Child',
        age: 65
      },
    ]
  ],

];

const NameElement = ({ name }: { name?: string }) => {
  

  return (
    <th>{name}</th>
  )
}

const AgeElement = ({ age,className }: { age?: string,className?: string }) => {

  return (
    <th className={className}>{age}</th>
  )
}

const HobbyElement = ({ hobby }: { hobby?: string }) => {

  return (
    <th>{hobby}</th>
  )
}

const BodyElements = ()=>{

  const {name,age,hobby} = useContext(RowContext);

  return (
    <React.Fragment>
      <NameElement name={name} />
      <AgeElement age={age} />
      <HobbyElement hobby={hobby} />
    </React.Fragment>
  )
}


function App() {

  return (
    <div >
      <Table data={tabledata} className="W(100%) Bgc(purple)">
        <TableHead>
          <TableCell>Name:</TableCell>
          <TableCell>Age:</TableCell>
        </TableHead>
        <TableBody>
            <TableRow className="Bgc(orange) H(4rem)">
              <BodyElements/>
            </TableRow>
        </TableBody>
      </Table>
      <img src="" alt="" />
    </div>
  );
}

export default App;
