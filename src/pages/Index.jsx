import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box p={8}>
      <VStack spacing={8}>
        <Heading>Todo App</Heading>
        <HStack>
          <Input placeholder="Add new todo" value={inputValue} onChange={handleInputChange} />
          <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="blue" aria-label="Add todo" />
        </HStack>
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
              <Box flex="1">{todo}</Box>
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default Index;
