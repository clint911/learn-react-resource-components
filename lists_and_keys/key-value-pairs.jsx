//using ids as keys, the ids are different from our data
const todoItems1 = todos.map((todo) => 
<li key={todo.id}>{todo.text}</li>);

//using index when you dont have a stable id
const todoItems = todos.map((todo, index) =>
//only do if these items have no stable IDs
<li key={index}>
</li>
);
