import { AppState } from './types';

export const DEFAULT_CONTENT: AppState = {
  content: {
    hero: {
      id: 'hero',
      isEnabled: true,
      badge: 'n8n AI AUTOMATION',
      title: '업무는 AI에게, 퇴근은 당신에게',
      subtitle: '내 일의 주도권, 이제 AI가 아니라 당신이 갖습니다',
      hookLine: '복잡한 코딩 없이, 당신만의 AI 비서를 만드세요.',
      image: '/src/assets/images/regenerated_image_1777880076047.jpg',
    },
    problem: {
      id: 'problem',
      isEnabled: true,
      title: '매일 반복되는 업무에 지치셨나요?',
      subtitle: '당신의 탓이 아닙니다',
      description: '파이썬과 코딩을 몰라도, 엑셀만 조금 할 줄 알면\n누구나 자동화할 수 있는 세상이 왔습니다',
      painPoints: [
        '💻엑셀 복사 붙여넣기에만 하루 3시간 쓸 때',
        '🗃️여러 툴에 흩어진 자료들을 찾아 헤맬 때',
        '🤦‍♀️자동화를 하고 싶지만 코딩 앞에 무너질 때',
        '🤷ai를 업무에 어떻게 쓸지 막막할 때'
      ],
    },
    solution: {
      id: 'solution',
      isEnabled: true,
      title: '딱 3번의 클릭이면 충분합니다.',
      description: "이 '자동화 리포트'가 당신의 메신저로 도착하기까지,\n딱 3번의 클릭이면 충분합니다.",
      features: [
        { title: 'Chat', description: '내일 오전 9시에 구글 미트 일정 하나 만들어줘.', icon: 'Zap' },
        { title: 'Email', description: '[n8nKorea] 일자 매체별 광고비를 발송 드립니다.', icon: 'Cpu' },
      ],
    },
    assistants: {
      id: 'assistants',
      isEnabled: true,
      title: '단 한 권으로 얻게 될\n4가지 자동화 비서',
      subtitle: '',
      description: '',
      items: [
        '주식 정보 분석 비서',
        '보고서 작성 비서',
        '일정 관리 비서',
        '이메일 자동 발송 비서',
      ],
    },
    proof: {
      id: 'proof',
      isEnabled: false,
      title: '',
      testimonials: [],
    },
    cta: {
      headline: '더이상 업무에 끌려 다니지 마세요',
      buttons: [
        { label: '지금 바로 나만의 ai 비서 만들기', url: '#', type: 'kyobo' },
      ],
      footerText: 'ⓒ 2026. 리코멘드 All rights reserved.',
    },
  },
  theme: {
    pointColor: '#ef387a',
    backgroundColor: '#ffffff',
    fontFamily: 'Pretendard',
  },
  seo: {
    title: '리코멘드 | 최고의 n8n AI 자동화 강의',
    description: 'n8n과 AI를 활용한 업무 자동화의 모든 것. 박정기 저자의 베스트셀러 브릿지 페이지.',
    ogImage: '/src/assets/images/regenerated_image_1777880076047.jpg',
    keywords: 'n8n, 업무 자동화, AI, 마케팅 자동화, 노코드',
  },
};
