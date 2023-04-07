import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
  };

  addTodo = evt => {
    const todo = {
      id: nanoid(),
      text: evt,
    };
    this.setState(({ todos }) => ({
      todos: [...todos, todo],
    }));
  };

  render() {
    return (
      <>
        <SearchForm onSubmit={this.addTodo} />
        <Grid>
          {this.state.todos.map(({ text, id }, idx) => {
            return (
              <GridItem key={id}>
                <Todo value={text} item={idx + 1} />
              </GridItem>
            );
          })}
        </Grid>
      </>
    );
  }
}
