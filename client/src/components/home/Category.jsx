import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled} from '@mui/material';
import { category } from '../../constants/data';
import { Link, useSearchParams  } from 'react-router-dom';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export default function Category() {

    const [searchParams] = useSearchParams();
    const categories = searchParams.get('category');
  return (
    <>
    <StyledLink to={`/create?category=${categories || ''}`} style={{ textDecoration: 'none' }}>
      < StyledButton>create blog</ StyledButton>
      </StyledLink>

      <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <StyledLink to={"/"}>
                                All Categories
                                </StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                            category.map(categories => (
                                <TableRow key={categories.id}>
                                <TableCell>
                                    <StyledLink to={`/?category=${categories.type}`}>
                                    {categories.type}
                                    </StyledLink>
                                </TableCell>
                                </TableRow>
                            ))
                        }
                   
                </TableBody>
               
    </StyledTable>
    </>
  )
}
