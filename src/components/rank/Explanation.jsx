import styled from 'styled-components';
import Sub from '../common/Sub';

function Explanation() {
  return (
    <>
      <PageName>3월 TMI 랭킹</PageName>
      <Line />
      <Sub>
        <span>랭킹 산정기간</span>
        2022년 03월 01일 00:00:00 ~ 2022년 03월 31일 24:00:00
      </Sub>
      <Sub>
        <span>최근 업데이트</span>
        2022년 03월 24일 09:15:14
      </Sub>
      <RankGuide>랭킹가이드</RankGuide>
    </>
  );
}

export default Explanation;

const PageName = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding-left: 10px;
  margin-bottom: 10px;
  color: #fff;
`;

const Line = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 35px;
  height: 3px;
  background-color: #fff;
`;

const RankGuide = styled.button`
  position: absolute;
  top: 110px;
  right: 10px;
  border: 1px solid #fff;
  color: #fff;
  background-color: #005fcc;
  font-size: 12px;
  font-weight: 500;
  padding: 2px;
`;
