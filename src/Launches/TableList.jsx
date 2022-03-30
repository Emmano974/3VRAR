import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const TableHeader = (props) => {

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox"></TableCell>
          {props.titleHeader.map(title => (
            <TableCell component="th" key={title}>
              <b>
              {title}
              </b>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
  );
}

const TableBodyContent = (props) => {

  return (
    <TableBody>
      {props.filteredData
        .slice(props.pageNumber * props.rowsNumber, props.pageNumber * props.rowsNumber + props.rowsNumber)
        .map((row) => (
          <TableRow hover onClick={() => props.redirectToDetailLaunch(row.id)}>
            <TableCell padding="checkbox"></TableCell>
            <TableCell>{row.mission_name}</TableCell>
            <TableCell>{new Date(row.launch_date_unix*1000).toLocaleString()}</TableCell>
            <TableCell>{row.launch_site.site_name}</TableCell>
            <TableCell>{row.rocket.rocket_name}</TableCell>
          </TableRow>
        ))
      }
    </TableBody>
  )
}

function TableList(props) {

  const history = useHistory();
  const titleHeader = ["Mission Name", "Launch Date", "Site Name", "Rocket Name"];
  const [pageNumber, setPageNumber] = useState(0);
  const rowsNumber = 10;
  const skeletons = Array.from(Array(10).keys());

  const handleChangePage = (event, page) => {
    setPageNumber(page);
  };

  const redirectToDetailLaunch = (id) => {
    history.push(`/Launch/${id}`);
  }



  return (
    <>{props.load ? (
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }} >
          <TableContainer>
            <Table sx={{ minWidth: 750 }} >
              <TableHeader 
                titleHeader={titleHeader}
              />
              <TableBodyContent 
                filteredData={props.filteredData} 
                pageNumber={pageNumber} 
                rowsNumber={rowsNumber} 
                redirectToDetailLaunch={redirectToDetailLaunch}
              />
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={props.filteredData.length}
            rowsPerPage={rowsNumber}
            page={pageNumber}
            onPageChange={handleChangePage}
          />
        </Paper>
      </Box>
    ) : (
      <>
      {skeletons.map(sk => (
        <Box key={sk}>
          <Skeleton animation="wave" height={64} width='49%' sx={{float:'left', mr:1}}/>
          <Skeleton animation="wave" height={64} width='49%' />
        </Box>
      ))}
        <Skeleton variant="circular" width={40} height={40} sx={{float:'right', mr:2}}/>
        <Skeleton variant="circular" width={40} height={40} sx={{float:'right', mr:1}}/>
        <Skeleton animation="wave" height={40} width={50} sx={{float:'right', mr:2}}/>
      </>
    )}
      
      
      </>
  )
}

export default TableList