import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

import filtersSlice from "./filtersSlice";

const { Search } = Input;

export default function Filters() {
  const disPatch = useDispatch();
  const [search, setSearch] = useState();
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState();

  const changeSearch = (e) => {
    setSearch(e.target.value);
    disPatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
    disPatch(filtersSlice.actions.statusFilterChange(e.target.value));
  };

  const changePriority = (value) => {
    setPriority(value);
    disPatch(filtersSlice.actions.prioritiesFilterChange(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={search}
          onChange={changeSearch}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={changeStatus} value={status}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={changePriority}
          value={priority}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
