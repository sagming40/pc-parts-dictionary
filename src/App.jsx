import React, { useState } from 'react';
import cpuData from './cpuData.json'; // CPU 데이터 가져오기

function App() {
  // 어떤 브랜드를 보여줄지 결정하는 상태값 (기본값: 'All')
  const [selectedBrand, setSelectedBrand] = useState('All');

  // 사용자가 선택한 브랜드에 따라 데이터를 필터링하는 로직
  const filteredCpu = selectedBrand === 'All'
  ? cpuData
  : cpuData.filter(cpu => cpu.brand === selectedBrand);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto'}}>
      <header>
        <h1>💻 PC 부품 스펙 사전 (CPU)</h1>
        <p>현역 및 중고 인기 CPU의 정확한 스펙을 비교해 보세요.</p>
      </header>

      {/* 1. 필터 버튼 영역 */}
      <div style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
        <button onClick={() => setSelectedBrand('All')} style={{ padding: '8px 16px', cursor: 'pointer' }}>전체 보기</button>
        <button onClick={() => setSelectedBrand('Intel')} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#0066cc', color: 'white', border: 'none', borderRadius: '4px' }}>Intel</button>
        <button onClick={() => setSelectedBrand('AMD')} style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: '#cc0000', color: 'white', border: 'none', borderRadius: '4px' }}>AMD</button>
      </div>

      {/* 현재 선택된 브랜드가 뭔지 보여주는 안내판 */}
      <p style={{ fontWeight: 'bold' }}>필터링 결과: {selectedBrand}</p>

      {/* 2. CPU 리스트 출력 영역 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {filteredCpu.map(cpu => (
          <div key={cpu.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '6px', backgroundColor: '#f9f9f9' }}>
            <span style={{ fontSize: '12px', color: '#666' }}>{cpu.brand} | {cpu.generation}</span>
            <h3 style={{ margin: '5px 0 10px 0', color: '#333' }}>{cpu.name}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
              <li><strong>코어 구성:</strong> {cpu.cores}</li>
              <li><strong>부스트 클럭:</strong> {cpu.clock}</li>
              <li><strong>지원 소켓:</strong> {cpu.socket}</li>
            </ul>
          </div> 
        ))}
      </div>
    </div>
  );
}

export default App;