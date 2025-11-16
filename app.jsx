import React, { useState } from 'react';
import { ShoppingBag, MapPin, Clock, Phone, Mail, Star, Filter, X, Menu } from 'lucide-react';

const FruitStoreWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 과일 데이터
  const fruits = [
    {
      id: 1,
      name: '국내산 사과',
      emoji: '🍎',
      category: '국내과일',
      price: 8900,
      unit: 'kg',
      origin: '경북 영주',
      inStock: true,
      rating: 4.8,
      season: '가을',
      description: '아삭하고 달콤한 국내산 사과',
      features: ['비타민 C 풍부', '식이섬유 다량', '아침 공복에 좋음', '껍질째 먹기 추천']
    },
    {
      id: 2,
      name: '신선한 딸기',
      emoji: '🍓',
      category: '제철과일',
      price: 12000,
      unit: '팩(500g)',
      origin: '충남 논산',
      inStock: true,
      rating: 4.9,
      season: '봄',
      description: '달콤한 향이 가득한 프리미엄 딸기',
      features: ['비타민 풍부', '항산화 성분', '디저트 최적', '면역력 강화']
    },
    {
      id: 3,
      name: '제주 한라봉',
      emoji: '🍊',
      category: '제철과일',
      price: 15000,
      unit: 'kg',
      origin: '제주도',
      inStock: true,
      rating: 4.7,
      season: '겨울',
      description: '당도 높은 제주 특산 한라봉',
      features: ['당도 13도 이상', '껍질 벗기기 쉬움', '비타민 C', '선물용 최적']
    },
    {
      id: 4,
      name: '수입 바나나',
      emoji: '🍌',
      category: '열대과일',
      price: 3500,
      unit: 'kg',
      origin: '필리핀',
      inStock: true,
      rating: 4.5,
      description: '숙성도 완벽한 달콤한 바나나',
      features: ['에너지 공급', '칼륨 풍부', '운동 전후 간식', '소화 잘됨']
    },
    {
      id: 5,
      name: '골드 키위',
      emoji: '🥝',
      category: '열대과일',
      price: 6900,
      unit: '개',
      origin: '뉴질랜드',
      inStock: true,
      rating: 4.6,
      description: '새콤달콤한 골드 키위',
      features: ['비타민 C 폭탄', '피부 미용', '소화 촉진', '면역력 증진']
    },
    {
      id: 6,
      name: '태국 망고',
      emoji: '🥭',
      category: '열대과일',
      price: 18000,
      unit: 'kg',
      origin: '태국',
      inStock: true,
      rating: 4.9,
      description: '달콤하고 부드러운 프리미엄 망고',
      features: ['비타민 A', '눈 건강', '피부 개선', '천연 당분']
    },
    {
      id: 7,
      name: '샤인머스켓',
      emoji: '🍇',
      category: '프리미엄',
      price: 25000,
      unit: 'kg',
      origin: '경북 김천',
      inStock: true,
      rating: 5.0,
      season: '가을',
      description: '씨 없는 고당도 청포도',
      features: ['당도 18도 이상', '씨 없음', '껍질째 섭취', '선물 1순위']
    },
    {
      id: 8,
      name: '국내산 배',
      emoji: '🍐',
      category: '국내과일',
      price: 7500,
      unit: 'kg',
      origin: '충남 천안',
      inStock: true,
      rating: 4.7,
      season: '가을',
      description: '아삭하고 시원한 배',
      features: ['수분 풍부', '기관지 건강', '해열 효과', '목 보호']
    },
    {
      id: 9,
      name: '수박',
      emoji: '🍉',
      category: '제철과일',
      price: 15000,
      unit: '통',
      origin: '전남 고흥',
      inStock: true,
      rating: 4.8,
      season: '여름',
      description: '달콤한 여름 수박',
      features: ['수분 공급', '여름 최고', '비타민 풍부', '갈증 해소']
    },
    {
      id: 10,
      name: '파인애플',
      emoji: '🍍',
      category: '열대과일',
      price: 8500,
      unit: '개',
      origin: '대만',
      inStock: true,
      rating: 4.6,
      description: '달콤새콤한 황금 파인애플',
      features: ['브로멜린 효소', '소화 촉진', '항염 효과', '다이어트']
    },
    {
      id: 11,
      name: '체리',
      emoji: '🍒',
      category: '프리미엄',
      price: 35000,
      unit: 'kg',
      origin: '미국 워싱턴',
      inStock: true,
      rating: 4.9,
      season: '봄',
      description: '프리미엄 워싱턴 체리',
      features: ['안토시아닌', '항산화', '수면 개선', '선물용']
    },
    {
      id: 12,
      name: '국내산 감',
      emoji: '🍑',
      category: '국내과일',
      price: 6500,
      unit: 'kg',
      origin: '경남 밀양',
      inStock: true,
      rating: 4.5,
      season: '가을',
      description: '달콤한 단감',
      features: ['비타민 A', '베타카로틴', '눈 건강', '가을 제철']
    },
    {
      id: 13,
      name: '국내산 복숭아',
      emoji: '🍑',
      category: '제철과일',
      price: 9800,
      unit: 'kg',
      origin: '경북 영천',
      inStock: true,
      rating: 4.8,
      season: '여름',
      description: '부드럽고 달콤한 백도 복숭아',
      features: ['수분 가득', '비타민 풍부', '피부 미용', '여름 보양']
    },
    {
      id: 14,
      name: '성주 참외',
      emoji: '🍈',
      category: '제철과일',
      price: 7000,
      unit: 'kg',
      origin: '경북 성주',
      inStock: true,
      rating: 4.7,
      season: '여름',
      description: '향긋하고 시원한 참외',
      features: ['수분 보충', '칼륨 풍부', '저칼로리', '여름 간식']
    },
    {
      id: 15,
      name: '제주 감귤',
      emoji: '🍊',
      category: '제철과일',
      price: 5500,
      unit: 'kg',
      origin: '제주도',
      inStock: true,
      rating: 4.6,
      season: '겨울',
      description: '새콤달콤한 제주 감귤',
      features: ['비타민 C', '면역력 강화', '감기 예방', '겨울 대표']
    },
    {
      id: 16,
      name: '청송 사과',
      emoji: '🍎',
      category: '제철과일',
      price: 11000,
      unit: 'kg',
      origin: '경북 청송',
      inStock: true,
      rating: 4.9,
      season: '가을',
      description: '명품 청송 사과',
      features: ['당도 최고', '아삭한 식감', '프리미엄 품질', '가을 대표']
    },
    {
      id: 17,
      name: '매실',
      emoji: '🟢',
      category: '제철과일',
      price: 4500,
      unit: 'kg',
      origin: '전남 광양',
      inStock: true,
      rating: 4.4,
      season: '봄',
      description: '신선한 청매실',
      features: ['구연산 풍부', '피로 회복', '매실청 제조', '봄 건강']
    },
    {
      id: 18,
      name: '대추',
      emoji: '🌰',
      category: '제철과일',
      price: 8500,
      unit: '500g',
      origin: '충북 보은',
      inStock: true,
      rating: 4.5,
      season: '가을',
      description: '달콤한 생대추',
      features: ['철분 풍부', '면역력 증진', '불면증 개선', '가을 보양']
    }
  ];

  // 카테고리 목록
  const categories = [
    { id: 'all', name: '전체', icon: '🎯' },
    { id: '국내과일', name: '국내과일', icon: '🇰🇷' },
    { id: '열대과일', name: '열대과일', icon: '🌴' },
    { id: '프리미엄', name: '프리미엄', icon: '⭐' },
    { id: '제철과일', name: '제철과일', icon: '🍃' }
  ];

  // 필터링된 과일
  const filteredFruits = selectedCategory === 'all' 
    ? fruits 
    : fruits.filter(f => f.category === selectedCategory);

  // 인기 과일 (메인 페이지용)
  const popularFruits = fruits.filter(f => f.rating >= 4.8).slice(0, 3);

  // 페이지 렌더링
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'fruits':
        return <FruitsPage />;
      default:
        return <HomePage />;
    }
  };

  // 메인 홈페이지
  const HomePage = () => (
    <div>
      {/* 히어로 섹션 - 과일 배경 */}
      <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
        {/* 과일 배경 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">🍎</div>
          <div className="absolute top-5 right-20 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">🍊</div>
          <div className="absolute top-40 left-1/4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">🍇</div>
          <div className="absolute top-32 right-1/3 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">🍓</div>
          <div className="absolute bottom-20 left-1/3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">🍌</div>
          <div className="absolute bottom-10 right-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">🥝</div>
          <div className="absolute top-1/2 left-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">🍉</div>
          <div className="absolute top-1/3 right-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">🍑</div>
          <div className="absolute bottom-1/3 left-1/2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">🍍</div>
          <div className="absolute top-20 left-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">🥭</div>
        </div>

        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/50 to-blue-700/80"></div>

        {/* 콘텐츠 */}
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 animate-bounce">🍎🍊🍇</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">맛나다 과일판매점</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-semibold drop-shadow-md">
            매일 아침 신선하게! 건강하게! 맛있게!
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed px-4">
            엄선된 국내산 과일부터 프리미엄 수입 과일까지<br className="hidden sm:block" />
            20년 전통의 신선함과 품질을 보장합니다
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
            <button
              onClick={() => setCurrentPage('fruits')}
              className="bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-blue-50 transition shadow-2xl hover:scale-105 transform"
            >
              🛒 과일 둘러보기
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold hover:bg-blue-800 transition shadow-xl border-2 border-white/30"
            >
              📍 매장 정보
            </button>
          </div>
        </div>
      </div>

      {/* 특징 섹션 */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          맛나다만의 특별함
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          20년 전통, 고객이 선택한 최고의 과일판매점
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-7xl mb-6">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">신선함 보장</h3>
            <p className="text-gray-600 leading-relaxed">
              매일 새벽 산지에서 직송되는 신선한 과일을 직접 선별하여 입고합니다. 
              최상의 상태로만 판매하여 고객 만족도 99%를 자랑합니다.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-7xl mb-6">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">엄선된 품질</h3>
            <p className="text-gray-600 leading-relaxed">
              20년 경력의 과일 전문가가 직접 검수하여 
              최고 품질의 과일만 제공합니다. 당도, 신선도, 외관까지 완벽하게 체크합니다.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-7xl mb-6">💝</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">합리적 가격</h3>
            <p className="text-gray-600 leading-relaxed">
              산지 직송 시스템으로 중간 마진을 최소화하여 
              고품질 과일을 합리적인 가격에 제공합니다. 대량 구매 시 추가 할인!
            </p>
          </div>
        </div>
      </div>

      {/* 베스트 과일 섹션 */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            🏆 베스트 과일
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            고객님들이 가장 많이 찾는 인기 과일
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularFruits.map(fruit => (
              <div
                key={fruit.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
                onClick={() => {
                  setSelectedFruit(fruit);
                  setCurrentPage('fruits');
                }}
              >
                <div className="text-center py-10 bg-gradient-to-b from-orange-50 via-yellow-50 to-white relative">
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    BEST
                  </div>
                  <div className="text-9xl mb-4 transform hover:scale-110 transition">{fruit.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{fruit.name}</h3>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <Star className="text-yellow-400 fill-yellow-400" size={22} />
                    <span className="font-bold text-gray-700 text-lg">{fruit.rating}</span>
                  </div>
                  <p className="text-gray-600 mb-4 px-4">{fruit.description}</p>
                  <div className="text-3xl font-bold text-green-600">
                    {fruit.price.toLocaleString()}원
                    <span className="text-base text-gray-500"> / {fruit.unit}</span>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 text-center">
                  <button className="text-blue-600 font-bold hover:text-blue-700">
                    자세히 보기 →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('fruits')}
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition shadow-lg hover:scale-105 transform"
            >
              전체 과일 보기 ({fruits.length}종)
            </button>
          </div>
        </div>
      </div>

      {/* 제철 과일 섹션 */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          🍃 지금이 제철!
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          계절별로 가장 맛있는 과일을 만나보세요
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-pink-50 rounded-xl border-2 border-pink-200 hover:shadow-lg transition">
            <div className="text-5xl mb-3">🌸</div>
            <h4 className="font-bold text-gray-800 mb-2">봄 과일</h4>
            <p className="text-sm text-gray-600">딸기, 체리, 매실</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl border-2 border-orange-200 hover:shadow-lg transition">
            <div className="text-5xl mb-3">☀️</div>
            <h4 className="font-bold text-gray-800 mb-2">여름 과일</h4>
            <p className="text-sm text-gray-600">수박, 복숭아, 참외</p>
          </div>
          <div className="text-center p-6 bg-amber-50 rounded-xl border-2 border-amber-200 hover:shadow-lg transition">
            <div className="text-5xl mb-3">🍂</div>
            <h4 className="font-bold text-gray-800 mb-2">가을 과일</h4>
            <p className="text-sm text-gray-600">사과, 배, 포도</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:shadow-lg transition">
            <div className="text-5xl mb-3">❄️</div>
            <h4 className="font-bold text-gray-800 mb-2">겨울 과일</h4>
            <p className="text-sm text-gray-600">귤, 한라봉, 감</p>
          </div>
        </div>
      </div>

      {/* CTA 섹션 */}
      <div className="relative bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 text-white py-20 px-6 overflow-hidden">
        {/* 배경 과일 패턴 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 text-8xl">🍏</div>
          <div className="absolute bottom-10 right-20 text-9xl">🍋</div>
          <div className="absolute top-1/2 left-1/2 text-7xl">🥗</div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">지금 바로 방문하세요!</h2>
          <p className="text-2xl mb-10 opacity-95">
            신선하고 맛있는 과일로 건강한 하루를 시작하세요
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setCurrentPage('about')}
              className="bg-white text-green-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition shadow-2xl hover:scale-105 transform"
            >
              📍 매장 위치 확인
            </button>
            <button
              onClick={() => setCurrentPage('fruits')}
              className="bg-green-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-green-800 transition shadow-xl border-2 border-white/30"
            >
              🛒 온라인 쇼핑
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // 소개 페이지
  const AboutPage = () => (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        맛나다를 소개합니다
      </h1>

      {/* 브랜드 스토리 */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">📖</div>
          <h2 className="text-2xl font-bold text-gray-800">우리의 이야기</h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          맛나다는 2005년 작은 과일 가게로 시작하여, 지난 20년간 지역 주민들과 함께 성장해왔습니다. 
          "신선함과 정직함"이라는 두 가지 원칙을 지키며, 매일 아침 직접 시장에서 최고의 과일을 선별합니다.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          우리는 단순히 과일을 파는 것이 아니라, 건강한 식탁 문화를 만들어가는 동반자가 되고자 합니다. 
          계절마다 가장 맛있는 제철 과일을 추천하고, 고객님들의 건강을 생각하는 마음으로 
          하나하나 정성을 담아 준비합니다.
        </p>
        <p className="text-gray-700 leading-relaxed">
          앞으로도 변함없이 신선하고 맛있는 과일로 여러분의 건강한 일상에 함께하겠습니다.
        </p>
      </div>

      {/* 차별화 포인트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <div className="text-3xl mb-3">🎖️</div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">20년 전통과 신뢰</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ 20년간 한결같은 품질 유지</li>
            <li>✓ 지역 주민 90% 재방문율</li>
            <li>✓ 과일 전문가의 엄격한 선별</li>
            <li>✓ 불량품 100% 교환 보증</li>
          </ul>
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
          <div className="text-3xl mb-3">🚚</div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">신선 유통 시스템</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ 매일 새벽 산지 직송</li>
            <li>✓ 온도 관리 저장 시스템</li>
            <li>✓ 당일 입고된 과일만 판매</li>
            <li>✓ 신선도 보장 패키징</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <div className="text-3xl mb-3">👨‍🌾</div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">산지 직거래</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ 전국 우수 농가와 직거래</li>
            <li>✓ 중간 유통 마진 최소화</li>
            <li>✓ 농가 소득 증대 기여</li>
            <li>✓ 합리적인 가격 제공</li>
          </ul>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
          <div className="text-3xl mb-3">💎</div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">프리미엄 라인</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ 엄선된 수입 과일</li>
            <li>✓ 선물용 고급 포장</li>
            <li>✓ 특급 품질 보증</li>
            <li>✓ 계절별 한정 과일</li>
          </ul>
        </div>
      </div>

      {/* 매장 정보 */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-4xl">🏪</div>
          <h2 className="text-2xl font-bold text-gray-800">매장 안내</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">주소</h4>
                  <p className="text-gray-600">
                    서울특별시 강남구 테헤란로 123<br />
                    맛나다 빌딩 1층
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">영업시간</h4>
                  <p className="text-gray-600">
                    평일: 오전 8시 - 오후 9시<br />
                    주말: 오전 9시 - 오후 8시<br />
                    <span className="text-red-600 font-medium">명절 당일 휴무</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">전화번호</h4>
                  <p className="text-gray-600">
                    02-1234-5678<br />
                    <span className="text-sm">(상담 가능: 오전 9시 ~ 오후 6시)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">이메일</h4>
                  <p className="text-gray-600">info@matnada.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600 mb-4">지도가 여기에 표시됩니다</p>
              <p className="text-sm text-gray-500">
                지하철 2호선 강남역 3번 출구<br />
                도보 5분 거리
              </p>
            </div>
          </div>
        </div>

        {/* 주차 안내 */}
        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            🚗 주차 안내
          </h4>
          <p className="text-gray-700 text-sm">
            건물 지하 1~2층 주차장 이용 가능 (2만원 이상 구매 시 2시간 무료)
          </p>
        </div>
      </div>
    </div>
  );

  // 과일 목록 페이지
  const FruitsPage = () => (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        신선한 과일 목록
      </h1>
      <p className="text-center text-gray-600 mb-10">
        총 {filteredFruits.length}개의 신선한 과일을 만나보세요
      </p>

      {/* 과일 그리드 */}
      {filteredFruits.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFruits.map(fruit => (
            <div
              key={fruit.id}
              className={`bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 flex flex-col h-full ${
                !fruit.inStock ? 'opacity-60' : ''
              }`}
              onClick={() => setSelectedFruit(fruit)}
            >
              {/* 과일 이미지 영역 */}
              <div className="relative bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 rounded-t-2xl p-6">
                <div className="text-center">
                  <div className="text-8xl mb-3 transform hover:scale-110 transition-transform">
                    {fruit.emoji}
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="text-yellow-400 fill-yellow-400" size={18} />
                    <span className="text-base font-bold text-gray-700">{fruit.rating}</span>
                  </div>
                </div>
                
                {/* 품절 배지 */}
                {!fruit.inStock && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    품절
                  </div>
                )}
                
                {/* 카테고리 배지 */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow">
                  {fruit.category}
                </div>

                {/* 계절 배지 */}
                {fruit.season && (
                  <div className="absolute bottom-3 right-3 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md">
                    {fruit.season === '봄' && '🌸 봄'}
                    {fruit.season === '여름' && '☀️ 여름'}
                    {fruit.season === '가을' && '🍂 가을'}
                    {fruit.season === '겨울' && '❄️ 겨울'}
                  </div>
                )}
              </div>
              
              {/* 과일 정보 영역 */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                  {fruit.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                  {fruit.description}
                </p>
                
                {/* 원산지 */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <MapPin size={14} className="flex-shrink-0" />
                  <span className="truncate">{fruit.origin}</span>
                </div>

                {/* 가격 및 버튼 */}
                <div className="flex items-end justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-green-600 line-clamp-1">
                      {fruit.price.toLocaleString()}원
                    </div>
                    <div className="text-xs text-gray-500">
                      / {fruit.unit}
                    </div>
                  </div>
                  <button
                    className={`px-4 py-2.5 rounded-lg font-bold text-sm transition flex-shrink-0 ${
                      fruit.inStock
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!fruit.inStock}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFruit(fruit);
                    }}
                  >
                    {fruit.inStock ? '상세보기' : '품절'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-8xl mb-6">😢</div>
          <p className="text-2xl font-bold text-gray-800 mb-2">
            해당 카테고리에 과일이 없습니다
          </p>
          <p className="text-gray-600 mb-6">다른 카테고리를 선택해보세요</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition"
          >
            전체 과일 보기
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 - 고정 네비게이션 */}
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 w-full z-50">
        {/* 메인 네비게이션 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              onClick={() => {
                setCurrentPage('home');
                setMobileMenuOpen(false);
              }}
            >
              <ShoppingBag className="text-green-600" size={28} />
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">맛나다</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Fresh Fruit Store</p>
              </div>
            </div>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden md:flex gap-2">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-4 lg:px-6 py-2 rounded-lg font-bold transition ${
                  currentPage === 'home'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                홈
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`px-4 lg:px-6 py-2 rounded-lg font-bold transition ${
                  currentPage === 'about'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                맛나다 소개
              </button>
              <button
                onClick={() => setCurrentPage('fruits')}
                className={`px-4 lg:px-6 py-2 rounded-lg font-bold transition ${
                  currentPage === 'fruits'
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-green-50'
                }`}
              >
                과일 목록
              </button>
            </nav>

            {/* 모바일 햄버거 메뉴 버튼 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="메뉴"
            >
              {mobileMenuOpen ? (
                <X size={28} className="text-gray-700" />
              ) : (
                <Menu size={28} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* 모바일 메뉴 드롭다운 */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-bold transition text-left ${
                    currentPage === 'home'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  🏠 홈
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-bold transition text-left ${
                    currentPage === 'about'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  ℹ️ 맛나다 소개
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('fruits');
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-bold transition text-left ${
                    currentPage === 'fruits'
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  🍎 과일 목록
                </button>
              </nav>
            </div>
          )}
        </div>

        {/* 카테고리 필터 - 과일 목록 페이지에서만 표시 */}
        {currentPage === 'fruits' && (
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
              <div className="flex items-center gap-2 overflow-x-auto">
                <Filter size={16} className="text-gray-600 flex-shrink-0 hidden sm:block" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 mr-1 sm:mr-2 flex-shrink-0">카테고리:</span>
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold transition whitespace-nowrap flex-shrink-0 ${
                        selectedCategory === cat.id
                          ? 'bg-green-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
                      }`}
                    >
                      <span className="mr-1">{cat.icon}</span>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 페이지 콘텐츠 - 헤더 높이만큼 상단 여백 추가 */}
      <main className={currentPage === 'fruits' ? 'pt-[148px]' : 'pt-[88px]'}>
        {renderPage()}
      </main>

      {/* 과일 상세보기 모달 */}
      {selectedFruit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-800">과일 상세 정보</h3>
              <button
                onClick={() => setSelectedFruit(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-9xl mb-4">{selectedFruit.emoji}</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedFruit.name}</h2>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Star className="text-yellow-400 fill-yellow-400" size={24} />
                  <span className="text-xl font-bold text-gray-700">{selectedFruit.rating}</span>
                  <span className="text-gray-500">(리뷰 {Math.floor(Math.random() * 100 + 50)}개)</span>
                </div>
                <p className="text-lg text-gray-600 mb-4">{selectedFruit.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">가격</div>
                  <div className="text-2xl font-bold text-green-600">
                    {selectedFruit.price.toLocaleString()}원
                  </div>
                  <div className="text-sm text-gray-500">/ {selectedFruit.unit}</div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">원산지</div>
                  <div className="text-xl font-bold text-blue-600">
                    {selectedFruit.origin}
                  </div>
                  <div className="text-sm text-gray-500">100% 원산지 보증</div>
                </div>

                {selectedFruit.season && (
                  <div className="col-span-2 bg-purple-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">제철 시기</div>
                    <div className="text-xl font-bold text-purple-600 flex items-center gap-2">
                      {selectedFruit.season === '봄' && '🌸 봄 (3월~5월)'}
                      {selectedFruit.season === '여름' && '☀️ 여름 (6월~8월)'}
                      {selectedFruit.season === '가을' && '🍂 가을 (9월~11월)'}
                      {selectedFruit.season === '겨울' && '❄️ 겨울 (12월~2월)'}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">가장 맛있는 시기입니다</div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  ✨ 주요 특징 및 효능
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedFruit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-6">
                <h4 className="font-bold text-gray-800 mb-2">💡 구매 안내</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 신선도를 위해 당일 배송을 권장합니다</li>
                  <li>• 구매 후 냉장 보관하시면 더 오래 신선하게 드실 수 있습니다</li>
                  <li>• 불량품 발견 시 100% 교환 보증</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  className={`flex-1 py-4 rounded-lg font-bold text-lg transition ${
                    selectedFruit.inStock
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!selectedFruit.inStock}
                >
                  {selectedFruit.inStock ? '구매 문의하기' : '일시 품절'}
                </button>
                <button
                  onClick={() => setSelectedFruit(null)}
                  className="px-6 py-4 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-12 px-6 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShoppingBag size={24} />
                맛나다
              </h3>
              <p className="text-gray-400 text-sm">
                신선하고 맛있는 과일로<br />
                건강한 하루를 만들어갑니다
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">바로가기</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('home')}>홈</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('about')}>맛나다 소개</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentPage('fruits')}>과일 목록</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">고객센터</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 02-1234-5678</li>
                <li>📧 info@matnada.com</li>
                <li>🕐 평일 09:00 - 18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 맛나다 과일판매점. All rights reserved.</p>
            <p className="mt-2">사업자등록번호: 123-45-67890 | 대표: 홍길동</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FruitStoreWebsite;