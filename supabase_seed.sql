-- =============================================
-- 퍼시스 셀프투어 초기 데이터 (data.json → Supabase)
-- Supabase SQL Editor에서 실행하세요
-- =============================================

-- 존 데이터
insert into zones (id, label, position_x, position_y, images, comment, display_order) values
(
  'zone-a', 'A. 콜라보 미팅존', 20, 35,
  array[
    'https://picsum.photos/seed/zone-a-1/800/600',
    'https://picsum.photos/seed/zone-a-2/800/600',
    'https://picsum.photos/seed/zone-a-3/800/600'
  ],
  '협업과 창의성을 극대화하는 모듈형 배치로 구성된 공간입니다. 다양한 팀 규모에 유연하게 대응할 수 있는 이동형 파티션과 라운드 테이블의 조합이 자유로운 커뮤니케이션을 유도합니다.',
  1
),
(
  'zone-b', 'B. 포커스 워크존', 55, 28,
  array[
    'https://picsum.photos/seed/zone-b-1/800/600',
    'https://picsum.photos/seed/zone-b-2/800/600'
  ],
  '집중 업무를 위한 개인 워크스테이션 클러스터입니다. 어쿠스틱 패널과 높이 조절 데스크의 조합으로 개인 집중도를 극대화하며, 플로우 상태를 유지할 수 있는 최적의 환경을 제공합니다.',
  2
),
(
  'zone-c', 'C. 라운지 존', 22, 65,
  array[
    'https://picsum.photos/seed/zone-c-1/800/600',
    'https://picsum.photos/seed/zone-c-2/800/600',
    'https://picsum.photos/seed/zone-c-3/800/600'
  ],
  '비공식 커뮤니케이션과 짧은 휴식을 위한 공간입니다. 소프트 시팅과 로우 테이블의 배치가 수평적인 대화 분위기를 조성하고, 조명 디밍 시스템으로 시간대별 분위기 연출이 가능합니다.',
  3
),
(
  'zone-d', 'D. 프레젠테이션 존', 68, 62,
  array[
    'https://picsum.photos/seed/zone-d-1/800/600',
    'https://picsum.photos/seed/zone-d-2/800/600'
  ],
  '클라이언트 프레젠테이션과 타운홀 미팅을 위한 다목적 공간입니다. 무선 스크린 연동 시스템과 계단식 좌석 배치로 최대 30인까지 수용 가능하며, 발표자와 청중 간 시선 집중도를 높입니다.',
  4
);

-- 가구 데이터
insert into products (id, zone_id, name, image_url, price, display_order) values
('prod-001', 'zone-a', '링크 모듈 테이블',    'https://picsum.photos/seed/prod-001/400/400', 1200000, 1),
('prod-002', 'zone-a', '소프트 암체어',        'https://picsum.photos/seed/prod-002/400/400',  890000, 2),
('prod-003', 'zone-a', '이동형 파티션',        'https://picsum.photos/seed/prod-003/400/400',  450000, 3),
('prod-004', 'zone-b', '높이조절 스탠딩 데스크','https://picsum.photos/seed/prod-004/400/400', 1580000, 1),
('prod-005', 'zone-b', '어쿠스틱 스크린',      'https://picsum.photos/seed/prod-005/400/400',  320000, 2),
('prod-006', 'zone-b', '에르고 체어',          'https://picsum.photos/seed/prod-006/400/400', 1100000, 3),
('prod-007', 'zone-c', '모듈 소파',            'https://picsum.photos/seed/prod-007/400/400', 2400000, 1),
('prod-008', 'zone-c', '오크 커피 테이블',     'https://picsum.photos/seed/prod-008/400/400',  680000, 2),
('prod-009', 'zone-d', '계단형 트리뷴 벤치',   'https://picsum.photos/seed/prod-009/400/400', 3200000, 1),
('prod-010', 'zone-d', '프레젠터 스탠드',      'https://picsum.photos/seed/prod-010/400/400',  420000, 2);
