import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
import axios from 'axios';

const { TextArea } = Input;

const Continents = [
  { key: 1, value: 'Africa' },
  { key: 2, value: 'Europe' },
  { key: 3, value: 'Asia' },
  { key: 4, value: 'North American' },
  { key: 5, value: 'South America' },
  { key: 6, value: 'Australia' },
  { key: 7, value: 'Antartica' },
];

function UploadProductPage(props) {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState(0);
  const [Continent, setContinent] = useState(1);
  const [Images, setImages] = useState([]);

  const titleChangeHandler = (e) => {
    setTitle(e.currentTarget.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.currentTarget.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.currentTarget.value);
  };
  const continentChangeHandler = (e) => {
    setContinent(e.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const submitHandler = (event) => {
    // event.preventDefault();

    if (!Title || !Description || !Price || !Continent || !Images) {
      return alert('모든 값을 넣어주셔야 합니다.');
    }
    // 채운 값들을 server에 request로 보낸다.
    const body = {
      // 로그인된 사람의 ID
      writer: props.user.userData._id,
      title: Title,
      description: Description,
      price: Price,
      images: Images,
      continents: Continent,
    };
    axios.post('/api/product', body).then((response) => {
      if (response.data.success) {
        alert('상품 업로드에 성공했습니다.');
        props.history.push('/');
      } else {
        alert('상품 업로드에 실패했습니다.');
      }
    });
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>여행 상품 업로드</h2>
      </div>

      <Form onSubmit={submitHandler}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <label>이름</label>
        <Input value={Title} onChange={titleChangeHandler} />
        <br />
        <br />
        <label>설명</label>
        <TextArea value={Description} onChange={descriptionChangeHandler} />
        <br />
        <br />
        <label>가격($)</label>
        <Input type="number" value={Price} onChange={priceChangeHandler} />
        <br />
        <br />
        <select onChange={continentChangeHandler} value={Continent}>
          {Continents.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button type="submit" onClick={submitHandler}>
          확인
        </Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
