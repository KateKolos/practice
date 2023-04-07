import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ value, item }) => {
  console.log(item);
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{item}
      </Text>
      <Text>{value}</Text>
      <DeleteButton type="button">
        <RiDeleteBinLine size={24} />
      </DeleteButton>
    </TodoWrapper>
  );
};
