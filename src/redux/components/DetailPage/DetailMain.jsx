import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
// import {v4 as uuidv4} from 'uuid';



function DetailMain() {


        // 생성일시
        const [startDate, setStartDate] = useState(new Date());

        // 마감일시
        const [completionDate, setCompletionDate] = useState(new Date());

        // 내용
        const [text, setText] = useState("");
        const textInput = (event) => {
            setText(event.target.value) 
        }

  return (
    <div>
        {/* 제목 */}
        <TitleBox><input /></TitleBox>
        
    <InformationBox>
        {/* 담당자 */}
        <Information>
            담당자  <Input><input /></Input>
        </Information>

        {/* 진행상태 */}
        <Information>
            진행 상태 <Input><input /></Input>
        </Information>

        {/* 생성일시 */}
        <Information>
            생성 일시  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
            locale={ko}                   // 한글로 변경
            dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
            showPopperArrow={false}       // 화살표 변경
            minDate={new Date()}          // 오늘 날짜 전은 선택 못하게 
            />
        </Information>

        {/* 마감일시 */}
        <Information>   
            마감 일시 <DatePicker selected={completionDate} onChange={(date) => setCompletionDate(date)} 
            locale={ko}                   // 한글로 변경
            dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
            showPopperArrow={false}       // 화살표 변경
            minDate={new Date()}          // 오늘 날짜 전은 선택 못하게
             />
        </Information>
    </InformationBox>

        {/* 내용 */}
        <form>
        <textarea value={text} onChange={textInput} ></textarea>
        <button>추가하기</button>
        </form>

        <div>
            {text}
        </div>


    </div>

  )
}

export default DetailMain




//CSS

const TitleBox = styled.div`
margin-left: 150px;
font-size: 50px;
margin-top: 150px;
`;

const InformationBox = styled.div`
margin-top: 50px;
`

const Information = styled.div`
display: flex;
justify-content: left;
justify-items: center;
margin-left: 150px;
`

const Input = styled.div`
margin-left: 50px;
display: flex;
justify-content: space-between;
`
