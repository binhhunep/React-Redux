import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import todosSlice from "../TodoList/todosSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, priority, completed }) {
  const [checked, setChecked] = useState(completed);
  const disPatch = useDispatch();
  const toggleCheckbox = () => {
    disPatch(todosSlice.actions.toggleTodoStatus(id));
    setChecked(!checked);

    console.log(
      "Check state.todoList.completed (item ticked) from ui",
      checked
    );
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
