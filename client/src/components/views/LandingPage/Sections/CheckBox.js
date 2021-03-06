import React, { useState } from 'react';
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

function CheckBox(props) {
  // console.log(props.list);
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    // 누른 곳의 index를 구하고
    const currentIndex = Checked.indexOf(value);
    // 전체 Checked된 State에서
    const newChecked = [...Checked];
    if (currentIndex === -1) {
      // 없다면 State 넣어준다.
      newChecked.push(value);
      // 있다면 빼준다.
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          style={{ margin: '3px' }}
          onChange={() => handleToggle(value._id)}
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span style={{ marginRight: '6px' }}>{value.name}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={['0']}>
        <Panel header="Continents" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
