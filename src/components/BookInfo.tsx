import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Heading, IconButton, Text } from '@chakra-ui/react';

import { useAppDispatch } from '../hooks';
import { deleteBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';

const BookInfo = ({
  title,
  author,
  id,
  ...rest
}: {
  title: string | undefined;
  author: string | undefined;
  id: string | undefined;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const redirect = (id: string | undefined) => {
    navigate(`/update-book/${id}`);
  };

  return (
    <Box
      p={5}
      justifyContent="space-between"
      shadow="md"
      borderWidth="1px"
      {...rest}
    >
      <Box flexDirection="column">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{author}</Text>
      </Box>
      <Box>
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<DeleteIcon />}
          marginRight="1rem"
          onClick={() => dispatch(deleteBook({ id }))}
        />
        <IconButton
          color="#1a202c"
          aria-label=""
          icon={<EditIcon />}
          onClick={() => redirect(id)}
        />
      </Box>
    </Box>
  );
};

export default BookInfo;
