export const sanheCategories = [
  {
    id: 'standard-valve-block',
    name: '标准液压阀块',
    nameEn: 'Standard Hydraulic Manifolds',
    desc: '简化液压系统设计和安装，便于实现集成化和标准化，有利于降低制造成本、提高精度及可靠性。',
    image: null,
    subcategories: [
      {
        id: 'aluminum-manifold',
        name: '铝合金阀块',
        materials: ['Al5083', 'AL6061-T6', 'AL7075-T6', 'AL7050-T6'],
        surface: ['阳极氧化', '电镀'],
        features: ['重量轻', '导热性好', '适合中低压场合', '加工精度高'],
      },
      {
        id: 'steel-manifold',
        name: '钢制阀块',
        materials: ['45#', '30CrMo', 'QT450-12', 'QT500-7', 'SJ355', 'Q345D', 'SUS303-316L'],
        surface: ['镀镍', '镀锌', '锌镍合金', '发黑'],
        features: ['高强度', '耐高压', '适合重载工况', '寿命长'],
      },
    ],
    features: ['内部流道短', '弯道少', '元件通配性优秀', '性能可靠', '寿命长'],
  },
  {
    id: 'custom-valve-block',
    name: '定制液压阀块',
    nameEn: 'Custom Hydraulic Manifolds',
    desc: '工程师根据客户系统要求提供最优解决方案和集成块设计，覆盖从概念设计到成品交付全流程。',
    image: null,
    subcategories: [
      {
        id: 'by-material',
        name: '按材料定制',
        desc: '铝合金 / 钢材，多种牌号可选',
      },
      {
        id: 'by-port',
        name: '按接口定制',
        desc: '螺纹插装阀孔 / SAE法兰 / BSP/NPT螺纹',
      },
      {
        id: 'by-pressure',
        name: '按压力定制',
        desc: '低压 <100bar / 中压 100-250bar / 高压 >250bar',
        specs: [
          { level: '低压', range: '<100 bar', color: 'blue' },
          { level: '中压', range: '100–250 bar', color: 'yellow' },
          { level: '高压', range: '>250 bar', color: 'red' },
        ],
      },
      {
        id: 'by-application',
        name: '按应用定制',
        desc: '冶金/海工/港口/新能源/工程机械等专用设计',
      },
    ],
    process: ['需求沟通', '系统分析', '方案设计', '样件制作', '测试验证', '量产交付'],
  },
  {
    id: 'pump-station',
    name: '液压泵站',
    nameEn: 'Hydraulic Power Units',
    desc: '最高压力350bar，功率100kW，采用优质动力泵/电机/控制阀组/过滤器/液位仪表，各行业定制。',
    image: null,
    subcategories: [
      {
        id: 'small-unit',
        name: '小型泵站',
        power: '≤30 kW',
        pressure: '≤100 bar',
        application: '工业机床、自动化设备',
      },
      {
        id: 'medium-unit',
        name: '中型泵站',
        power: '30–60 kW',
        pressure: '100–250 bar',
        application: '工程车辆、冶金辅机',
      },
      {
        id: 'large-unit',
        name: '大型泵站',
        power: '60–100 kW',
        pressure: '250–350 bar',
        application: '风电、船舶海工、科学探索',
      },
      {
        id: 'special-unit',
        name: '特种泵站',
        power: '按工况定制',
        pressure: '按需',
        application: '水下/高温/防爆环境',
      },
    ],
  },
]
